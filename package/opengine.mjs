// src/abi.ts
var kInvalidEntity = 4294967295;
var kOk = 0;
var kInvalidAsset = 0;
var AssetStatus = {
  Loading: 0,
  Ready: 1,
  Failed: 2
};

// src/errors.ts
var OpenEngineError = class extends Error {
  code;
  constructor(code, message) {
    super(message);
    this.name = "OpenEngineError";
    this.code = code;
  }
};

// src/contract.ts
var CallContract = class {
  m_Suspended = null;
  m_Disposed = false;
  /** The suspending call in progress, or null. */
  get suspended() {
    return this.m_Suspended;
  }
  get disposed() {
    return this.m_Disposed;
  }
  markDisposed() {
    this.m_Disposed = true;
  }
  /** Runs a suspending call; no synchronous call is allowed until it settles. */
  async suspend(call, run) {
    this.check(call);
    this.m_Suspended = call;
    try {
      return await run();
    } finally {
      this.m_Suspended = null;
    }
  }
  /** Throws when the engine was disposed. */
  checkAlive(call) {
    if (this.m_Disposed) throw this.disposedError(call);
  }
  disposedError(call) {
    return new OpenEngineError("Disposed", `${call} was called after engine.dispose(). Create a new engine with Engine.create.`);
  }
  /** Throws when `call` may not run now. */
  check(call) {
    this.checkAlive(call);
    if (this.m_Suspended === null) return;
    throw new OpenEngineError(
      "CallOrder",
      `${call} was called while ${this.m_Suspended} is suspended: no engine call may run until Engine.create resolves; await it first.`
    );
  }
};
var kSuspendingCalls = /* @__PURE__ */ new Set(["ge_create", "ge_shutdown"]);
function guardAbi(abi, contract) {
  const wrapped = /* @__PURE__ */ new Map();
  return new Proxy(abi, {
    get(target, key) {
      const value = Reflect.get(target, key);
      if (typeof key !== "string" || typeof value !== "function") return value;
      if (!key.startsWith("ge_") || kSuspendingCalls.has(key)) return value.bind(target);
      let guarded = wrapped.get(key);
      if (guarded === void 0) {
        guarded = (...args) => {
          contract.check(key);
          return value.apply(target, args);
        };
        wrapped.set(key, guarded);
      }
      return guarded;
    }
  });
}

// src/field-codec.ts
var kElementSize = {
  Bool: 1,
  Int8: 1,
  Int16: 2,
  Int32: 4,
  Int64: 8,
  UInt8: 1,
  UInt16: 2,
  UInt32: 4,
  UInt64: 8,
  Float: 4,
  Double: 8,
  Vec2: 8,
  Vec3: 12,
  Vec4: 16,
  Quat: 16,
  Mat4: 64,
  Color: 16,
  AssetGuid: 16,
  EntityHandle: 4
};
var kVectorKeys = {
  Vec2: ["x", "y"],
  Vec3: ["x", "y", "z"],
  Vec4: ["x", "y", "z", "w"],
  Quat: ["x", "y", "z", "w"],
  Color: ["r", "g", "b", "a"]
};
function invalidValue(field, value, expected) {
  return new OpenEngineError("InvalidArgument", `${field.jsName} takes ${expected}; got ${String(value)}.`);
}
function enumStorageKind(field) {
  return field.size === 1 ? "UInt8" : field.size === 2 ? "UInt16" : "Int32";
}
function decodeElement(kind, view, offset) {
  switch (kind) {
    case "Bool":
      return view.getUint8(offset) !== 0;
    case "Int8":
      return view.getInt8(offset);
    case "Int16":
      return view.getInt16(offset, true);
    case "Int32":
      return view.getInt32(offset, true);
    case "UInt8":
      return view.getUint8(offset);
    case "UInt16":
      return view.getUint16(offset, true);
    case "UInt32":
    case "EntityHandle":
      return view.getUint32(offset, true);
    case "Int64":
      return view.getBigInt64(offset, true);
    case "UInt64":
      return view.getBigUint64(offset, true);
    case "Float":
      return view.getFloat32(offset, true);
    case "Double":
      return view.getFloat64(offset, true);
    case "Mat4":
      return Array.from({ length: 16 }, (_, i) => view.getFloat32(offset + 4 * i, true));
    case "AssetGuid": {
      let hex = "";
      for (let i = 0; i < 16; ++i) hex += view.getUint8(offset + i).toString(16).padStart(2, "0");
      return { guid: hex };
    }
    default: {
      const out = {};
      (kVectorKeys[kind] ?? []).forEach((key, i) => {
        out[key] = view.getFloat32(offset + 4 * i, true);
      });
      return out;
    }
  }
}
function encodeElement(field, kind, value, view, offset) {
  const number = () => {
    if (typeof value !== "number" || !Number.isFinite(value)) throw invalidValue(field, value, "a finite number");
    return value;
  };
  switch (kind) {
    case "Bool":
      if (typeof value !== "boolean") throw invalidValue(field, value, "true or false");
      view.setUint8(offset, value ? 1 : 0);
      return;
    case "Int8":
      view.setInt8(offset, number());
      return;
    case "Int16":
      view.setInt16(offset, number(), true);
      return;
    case "Int32":
      view.setInt32(offset, number(), true);
      return;
    case "UInt8":
      view.setUint8(offset, number());
      return;
    case "UInt16":
      view.setUint16(offset, number(), true);
      return;
    case "UInt32":
    case "EntityHandle":
      view.setUint32(offset, number(), true);
      return;
    case "Int64":
    case "UInt64":
      if (typeof value !== "bigint") throw invalidValue(field, value, "a bigint");
      if (kind === "Int64") view.setBigInt64(offset, value, true);
      else view.setBigUint64(offset, value, true);
      return;
    case "Float":
      view.setFloat32(offset, number(), true);
      return;
    case "Double":
      view.setFloat64(offset, number(), true);
      return;
    case "Mat4":
      if (!Array.isArray(value) || value.length !== 16) throw invalidValue(field, value, "an array of 16 numbers");
      value.forEach((v, i) => view.setFloat32(offset + 4 * i, Number(v), true));
      return;
    case "AssetGuid": {
      const text = value?.guid;
      const guid = typeof text === "string" && /^[0-9a-fA-F]{8}(-?[0-9a-fA-F]{4}){3}-?[0-9a-fA-F]{12}$/.test(text) ? text.replaceAll("-", "").toLowerCase() : null;
      if (guid === null) throw invalidValue(field, value, "{ guid } with 32 hex digits, dashed (8-4-4-4-12) or not");
      for (let i = 0; i < 16; ++i) view.setUint8(offset + i, parseInt(guid.slice(2 * i, 2 * i + 2), 16));
      return;
    }
    default: {
      const keys = kVectorKeys[kind];
      if (!keys) throw invalidValue(field, value, "nothing: the field cannot be written from a page");
      const source = value;
      keys.forEach((key, i) => {
        const element = source?.[key];
        if (typeof element !== "number") throw invalidValue(field, value, `{ ${keys.join(", ")} }`);
        view.setFloat32(offset + 4 * i, element, true);
      });
    }
  }
}
function decodeField(field, view, offset) {
  if (field.enumByValue) {
    const raw = decodeElement(enumStorageKind(field), view, offset);
    return field.enumByValue.get(raw) ?? raw;
  }
  if (field.kind === "String") {
    const bytes = new Uint8Array(view.buffer, view.byteOffset + offset, field.size);
    const end = bytes.indexOf(0);
    return new TextDecoder().decode(bytes.slice(0, end < 0 ? bytes.length : end));
  }
  if (field.kind === "Unknown" || field.kind === "Bytes") {
    return new Uint8Array(view.buffer.slice(view.byteOffset + offset, view.byteOffset + offset + field.size));
  }
  if (field.count === 1) return decodeElement(field.kind, view, offset);
  const step = kElementSize[field.kind] ?? field.size / field.count;
  return Array.from({ length: field.count }, (_, i) => decodeElement(field.kind, view, offset + i * step));
}
function encodeField(field, value, view, offset) {
  if (field.enumByName) {
    const raw = typeof value === "string" ? field.enumByName.get(value) : void 0;
    if (raw === void 0) throw invalidValue(field, value, `one of ${[...field.enumByName.keys()].map((n) => `'${n}'`).join(", ")}`);
    encodeElement(field, enumStorageKind(field), raw, view, offset);
    return;
  }
  if (field.kind === "String") {
    if (typeof value !== "string") throw invalidValue(field, value, "a string");
    const bytes = new TextEncoder().encode(value);
    if (bytes.length >= field.size) throw invalidValue(field, value, `a string under ${field.size} bytes`);
    const target = new Uint8Array(view.buffer, view.byteOffset + offset, field.size);
    target.fill(0);
    target.set(bytes);
    return;
  }
  if (field.kind === "Unknown" || field.kind === "Bytes") throw invalidValue(field, value, "nothing: the field cannot be written from a page");
  if (field.count === 1) {
    encodeElement(field, field.kind, value, view, offset);
    return;
  }
  if (!Array.isArray(value) || value.length !== field.count) throw invalidValue(field, value, `an array of ${field.count} values`);
  const step = kElementSize[field.kind] ?? field.size / field.count;
  value.forEach((element, i) => encodeElement(field, field.kind, element, view, offset + i * step));
}

// src/reflection.ts
function fingerprint(text) {
  const kPrime = 0x100000001b3n;
  const kMask = 0xffffffffffffffffn;
  let hash = 0xcbf29ce484222325n;
  for (const byte of new TextEncoder().encode(text)) {
    hash ^= BigInt(byte);
    hash = hash * kPrime & kMask;
  }
  return hash.toString(16).padStart(16, "0");
}
function checkRelease(json, engineVersion, expected) {
  if (expected.fingerprint === null || fingerprint(json) === expected.fingerprint) return;
  throw new OpenEngineError(
    "VersionMismatch",
    `The engine module is release ${engineVersion} and this library is ${expected.version}; their component layouts differ. Update @openengine/web to ${engineVersion}, or serve the engine module that ships with ${expected.version}.`
  );
}
var Reflection = class {
  engineVersion;
  m_ByName = /* @__PURE__ */ new Map();
  constructor(document2) {
    this.engineVersion = document2.engineVersion;
    for (const component of document2.components) {
      const fields = component.fields.map((field, id) => ({
        id,
        name: field.name,
        jsName: field.tsName,
        kind: field.kind,
        size: field.size,
        count: field.count,
        enumByName: field.enum ? new Map(field.enum.map((e) => [e.name, e.value])) : null,
        enumByValue: field.enum ? new Map(field.enum.map((e) => [e.value, e.name])) : null
      }));
      this.m_ByName.set(component.name, {
        name: component.name,
        typeId: BigInt(component.typeId),
        fields,
        fieldsByJsName: new Map(fields.map((f) => [f.jsName, f]))
      });
    }
  }
  /** The component named `name`; throws naming the fix when this engine does not reflect it. */
  component(name) {
    const info = this.m_ByName.get(name);
    if (!info) {
      throw new OpenEngineError(
        "InvalidArgument",
        `This engine module has no reflected component named '${name}'. Check the name against components.d.ts, or serve the engine module that ships with this library.`
      );
    }
    return info;
  }
  /** The field `jsName` of `component`; throws listing the valid names when it is missing. */
  field(component, jsName) {
    const field = component.fieldsByJsName.get(jsName);
    if (!field) {
      const names = component.fields.map((f) => f.jsName).join(", ");
      throw new OpenEngineError("InvalidArgument", `${component.name} has no field '${jsName}'. Its fields are: ${names}.`);
    }
    return field;
  }
};

// src/bridge.ts
var kMinimumScratchBytes = 1024;
var Bridge = class {
  contract = new CallContract();
  /** Every `ge_` call goes through this guarded view. */
  abi;
  m_Raw;
  m_Reflection = null;
  m_Scratch = 0;
  m_ScratchSize = 0;
  constructor(raw) {
    this.m_Raw = raw;
    this.abi = guardAbi(raw, this.contract);
  }
  get reflection() {
    if (!this.m_Reflection) throw new Error("the registry is read after ge_create");
    return this.m_Reflection;
  }
  /** Reads ge_reflection_json; returns the JSON text for the release check. */
  loadReflection() {
    const text = this.readString(this.abi.ge_reflection_json());
    this.m_Reflection = new Reflection(JSON.parse(text));
    return text;
  }
  /** A scratch block of at least `size` bytes; valid until the next call to scratch. */
  scratch(size) {
    if (size > this.m_ScratchSize) {
      if (this.m_Scratch !== 0) this.m_Raw._free(this.m_Scratch);
      this.m_ScratchSize = Math.max(size, kMinimumScratchBytes);
      this.m_Scratch = this.m_Raw._malloc(this.m_ScratchSize);
    }
    return this.m_Scratch;
  }
  /** Writes `text` as NUL-terminated UTF-8 into the scratch arena. */
  writeString(text) {
    const bytes = new TextEncoder().encode(text);
    const ptr = this.scratch(bytes.length + 1);
    const heap = this.m_Raw.HEAPU8;
    heap.set(bytes, ptr);
    heap[ptr + bytes.length] = 0;
    return ptr;
  }
  readString(ptr) {
    const heap = this.m_Raw.HEAPU8;
    let end = ptr;
    while (heap[end] !== 0) ++end;
    return new TextDecoder().decode(heap.slice(ptr, end));
  }
  /** Shuts the engine down and waits for it; the contract must already be marked disposed. */
  async shutdown() {
    this.check(await this.m_Raw.ge_shutdown(), "engine.dispose");
  }
  /** Throws the engine's message when `code` is not kOk. */
  check(code, call) {
    if (code !== kOk) throw this.failure(call);
  }
  failure(call) {
    return new OpenEngineError("Engine", `${call} failed: ${this.readString(this.abi.ge_last_error())}`);
  }
  hasComponent(entity, component) {
    const result = this.abi.ge_component_has(entity, component.typeId);
    if (result < 0) throw this.failure(`has(${component.name})`);
    return result === 1;
  }
  getField(entity, component, field) {
    const ptr = this.scratch(field.size);
    this.check(this.abi.ge_field_get(entity, component.typeId, field.id, ptr), `reading ${component.name}.${field.jsName}`);
    const heap = this.m_Raw.HEAPU8;
    return decodeField(field, new DataView(heap.buffer, heap.byteOffset + ptr, field.size), 0);
  }
  /** The entity's local LocalBounds box (center, half extents), or null when it has none. */
  entityBounds(entity) {
    const ptr = this.scratch(24);
    const result = this.abi.ge_entity_bounds(entity, ptr);
    if (result < 0) throw this.failure("entity.bounds");
    if (result === 0) return null;
    const heap = this.m_Raw.HEAPU8;
    const floats = new DataView(heap.buffer, heap.byteOffset + ptr, 24);
    const read = (first) => [floats.getFloat32(4 * first, true), floats.getFloat32(4 * first + 4, true), floats.getFloat32(4 * first + 8, true)];
    return { center: read(0), half: read(3) };
  }
  /** The field's bytes for `value`, encoded on the JavaScript side so a bad value throws before any write. */
  encode(field, value) {
    const bytes = new Uint8Array(field.size);
    encodeField(field, value, new DataView(bytes.buffer), 0);
    return bytes;
  }
  setFieldBytes(entity, component, field, bytes) {
    const ptr = this.scratch(bytes.length);
    this.m_Raw.HEAPU8.set(bytes, ptr);
    this.check(this.abi.ge_field_set(entity, component.typeId, field.id, ptr), `writing ${component.name}.${field.jsName}`);
  }
  setField(entity, component, field, value) {
    this.setFieldBytes(entity, component, field, this.encode(field, value));
  }
};

// src/build-stamp.ts
var kPackageVersion = "2026.10.0-alpha.1";
var kReflectionFingerprint = null;

// src/components.ts
var ComponentToken = class {
  name;
  typeId = null;
  constructor(name) {
    this.name = name;
  }
};
var FixedComponentToken = class extends ComponentToken {
  noAdd = true;
};
var Transform = new FixedComponentToken("Transform");
var Light = new ComponentToken("Light");
var LocalBounds = new ComponentToken("LocalBounds");
var MeshRenderer = new ComponentToken("MeshRenderer");
var Camera = new ComponentToken("Camera");
var SkyEnvironment = new ComponentToken("SkyEnvironment");
var kTokens = [Transform, Light, LocalBounds, MeshRenderer, Camera, SkyEnvironment];
function bindComponentTokens(reflection) {
  for (const token of kTokens) token.typeId = reflection.component(token.name).typeId;
}

// src/host.ts
function browserHost() {
  return {
    requestAnimationFrame: (callback) => requestAnimationFrame(callback),
    cancelAnimationFrame: (handle) => cancelAnimationFrame(handle),
    setTimeout: (callback, delayMs) => window.setTimeout(callback, delayMs),
    clearTimeout: (handle) => window.clearTimeout(handle),
    nowMs: () => performance.now(),
    isHidden: () => document.visibilityState === "hidden",
    onVisibilityChange(callback) {
      document.addEventListener("visibilitychange", callback);
      return () => document.removeEventListener("visibilitychange", callback);
    },
    observeResize(element, callback) {
      const observer = new ResizeObserver(() => callback());
      observer.observe(element);
      return () => observer.disconnect();
    },
    devicePixelRatio: () => window.devicePixelRatio || 1,
    crossOriginIsolated: () => globalThis.crossOriginIsolated === true,
    hasWebGPU: () => "gpu" in navigator && navigator.gpu !== void 0,
    resolveUrl: (url) => new URL(url, document.baseURI).href,
    log: (message) => console.info(message),
    reportError: (error) => globalThis.reportError(error)
  };
}

// src/math.ts
var kDegToRad = Math.PI / 180;
function quatMultiply(a, b) {
  return {
    w: a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z,
    x: a.w * b.x + a.x * b.w + a.y * b.z - a.z * b.y,
    y: a.w * b.y - a.x * b.z + a.y * b.w + a.z * b.x,
    z: a.w * b.z + a.x * b.y - a.y * b.x + a.z * b.w
  };
}
function quatFromAxisDegrees(axis, degrees) {
  const half = 0.5 * degrees * kDegToRad;
  const s = Math.sin(half);
  return { x: axis[0] * s, y: axis[1] * s, z: axis[2] * s, w: Math.cos(half) };
}
function columnLength(m, first) {
  return Math.hypot(m[first], m[first + 1], m[first + 2]);
}
function matrixPosition(m) {
  return [m[12], m[13], m[14]];
}
function matrixScale(m) {
  return [columnLength(m, 0), columnLength(m, 4), columnLength(m, 8)];
}
function matrixRotation(m) {
  const sx = columnLength(m, 0);
  const sy = columnLength(m, 4);
  const sz = columnLength(m, 8);
  if (sx <= 0 || sy <= 0 || sz <= 0) return { x: 0, y: 0, z: 0, w: 1 };
  const r00 = m[0] / sx, r10 = m[1] / sx, r20 = m[2] / sx;
  const r01 = m[4] / sy, r11 = m[5] / sy, r21 = m[6] / sy;
  const r02 = m[8] / sz, r12 = m[9] / sz, r22 = m[10] / sz;
  const trace = r00 + r11 + r22;
  if (trace > 0) {
    const s2 = Math.sqrt(trace + 1) * 2;
    return { w: 0.25 * s2, x: (r21 - r12) / s2, y: (r02 - r20) / s2, z: (r10 - r01) / s2 };
  }
  if (r00 > r11 && r00 > r22) {
    const s2 = Math.sqrt(1 + r00 - r11 - r22) * 2;
    return { w: (r21 - r12) / s2, x: 0.25 * s2, y: (r01 + r10) / s2, z: (r02 + r20) / s2 };
  }
  if (r11 > r22) {
    const s2 = Math.sqrt(1 + r11 - r00 - r22) * 2;
    return { w: (r02 - r20) / s2, x: (r01 + r10) / s2, y: 0.25 * s2, z: (r12 + r21) / s2 };
  }
  const s = Math.sqrt(1 + r22 - r00 - r11) * 2;
  return { w: (r10 - r01) / s, x: (r02 + r20) / s, y: (r12 + r21) / s, z: 0.25 * s };
}
function composeMatrix(position, q, scale) {
  const normSquared = q.x * q.x + q.y * q.y + q.z * q.z + q.w * q.w;
  const s = normSquared > 0 ? 2 / normSquared : 0;
  const x2 = q.x * s, y2 = q.y * s, z2 = q.z * s;
  const xx = q.x * x2, xy = q.x * y2, xz = q.x * z2;
  const yy = q.y * y2, yz = q.y * z2, zz = q.z * z2;
  const wx = q.w * x2, wy = q.w * y2, wz = q.w * z2;
  const [sx, sy, sz] = scale;
  return [
    (1 - (yy + zz)) * sx,
    (xy + wz) * sx,
    (xz - wy) * sx,
    0,
    (xy - wz) * sy,
    (1 - (xx + zz)) * sy,
    (yz + wx) * sy,
    0,
    (xz + wy) * sz,
    (yz - wx) * sz,
    (1 - (xx + yy)) * sz,
    0,
    position[0],
    position[1],
    position[2],
    1
  ];
}
function quatFromEulerDegrees(x, y, z) {
  const roll = x * kDegToRad, pitch = y * kDegToRad, yaw = z * kDegToRad;
  const cy = Math.cos(yaw * 0.5), sy = Math.sin(yaw * 0.5);
  const cp = Math.cos(pitch * 0.5), sp = Math.sin(pitch * 0.5);
  const cr = Math.cos(roll * 0.5), sr = Math.sin(roll * 0.5);
  return {
    w: cr * cp * cy + sr * sp * sy,
    x: sr * cp * cy - cr * sp * sy,
    y: cr * sp * cy + sr * cp * sy,
    z: cr * cp * sy - sr * sp * cy
  };
}
function eulerDegreesFromQuat(q) {
  const sinrCosp = 2 * (q.w * q.x + q.y * q.z);
  const cosrCosp = 1 - 2 * (q.x * q.x + q.y * q.y);
  const sinp = 2 * (q.w * q.y - q.z * q.x);
  const pitch = Math.abs(sinp) >= 1 ? Math.sign(sinp) * Math.PI / 2 : Math.asin(sinp);
  const sinyCosp = 2 * (q.w * q.z + q.x * q.y);
  const cosyCosp = 1 - 2 * (q.y * q.y + q.z * q.z);
  return [Math.atan2(sinrCosp, cosrCosp) / kDegToRad, pitch / kDegToRad, Math.atan2(sinyCosp, cosyCosp) / kDegToRad];
}
function transformBox(m, center, half) {
  const out = [m[12], m[13], m[14]];
  const extent = [0, 0, 0];
  for (let row = 0; row < 3; ++row) {
    for (let col = 0; col < 3; ++col) {
      const element = m[col * 4 + row];
      out[row] += element * center[col];
      extent[row] += Math.abs(element) * half[col];
    }
  }
  return { center: out, half: extent };
}

// src/live-quaternion.ts
var LiveQuaternion = class {
  m_Read;
  m_Write;
  constructor(read, write) {
    this.m_Read = read;
    this.m_Write = write;
  }
  get x() {
    return this.m_Read().x;
  }
  set x(value) {
    this.m_Write({ ...this.m_Read(), x: value });
  }
  get y() {
    return this.m_Read().y;
  }
  set y(value) {
    this.m_Write({ ...this.m_Read(), y: value });
  }
  get z() {
    return this.m_Read().z;
  }
  set z(value) {
    this.m_Write({ ...this.m_Read(), z: value });
  }
  get w() {
    return this.m_Read().w;
  }
  set w(value) {
    this.m_Write({ ...this.m_Read(), w: value });
  }
  set(x, y, z, w) {
    this.m_Write({ x, y, z, w });
    return this;
  }
};

// src/live-vector3.ts
var LiveVector3 = class {
  m_Read;
  m_Write;
  constructor(read, write) {
    this.m_Read = read;
    this.m_Write = write;
  }
  get x() {
    return this.m_Read()[0];
  }
  set x(value) {
    this.writeComponent(0, value);
  }
  get y() {
    return this.m_Read()[1];
  }
  set y(value) {
    this.writeComponent(1, value);
  }
  get z() {
    return this.m_Read()[2];
  }
  set z(value) {
    this.writeComponent(2, value);
  }
  set(x, y, z) {
    this.m_Write([x, y, z]);
    return this;
  }
  copy(v) {
    return this.set(v.x, v.y, v.z);
  }
  writeComponent(index, value) {
    const v = this.m_Read();
    v[index] = value;
    this.m_Write(v);
  }
};

// src/transform-view.ts
var TransformViewImpl = class {
  position;
  /** Euler degrees, the editor inspector's X, Y, Z convention. */
  rotation;
  quaternion;
  scale;
  m_Access;
  constructor(access) {
    this.m_Access = access;
    this.position = new LiveVector3(() => matrixPosition(access.readMatrix()), (v) => this.writePosition(v));
    this.rotation = new LiveVector3(
      () => eulerDegreesFromQuat(matrixRotation(access.readMatrix())),
      (v) => this.writeRotation(quatFromEulerDegrees(v[0], v[1], v[2]))
    );
    this.quaternion = new LiveQuaternion(() => matrixRotation(access.readMatrix()), (q) => this.writeRotation(q));
    this.scale = new LiveVector3(() => matrixScale(access.readMatrix()), (v) => this.writeScale(v));
  }
  get parent() {
    return this.m_Access.readParent();
  }
  set parent(parent) {
    this.m_Access.writeParent(parent);
  }
  rotateX(degrees) {
    return this.rotateLocal([1, 0, 0], degrees);
  }
  rotateY(degrees) {
    return this.rotateLocal([0, 1, 0], degrees);
  }
  rotateZ(degrees) {
    return this.rotateLocal([0, 0, 1], degrees);
  }
  rotateLocal(axis, degrees) {
    const m = this.m_Access.readMatrix();
    const q = quatMultiply(matrixRotation(m), quatFromAxisDegrees(axis, degrees));
    this.m_Access.writeMatrix(composeMatrix(matrixPosition(m), q, matrixScale(m)));
    return this;
  }
  writePosition(v) {
    const m = this.m_Access.readMatrix();
    m[12] = v[0];
    m[13] = v[1];
    m[14] = v[2];
    this.m_Access.writeMatrix(m);
  }
  writeRotation(q) {
    const m = this.m_Access.readMatrix();
    this.m_Access.writeMatrix(composeMatrix(matrixPosition(m), q, matrixScale(m)));
  }
  writeScale(v) {
    const m = this.m_Access.readMatrix();
    this.m_Access.writeMatrix(composeMatrix(matrixPosition(m), matrixRotation(m), v));
  }
};

// src/vector3.ts
var Vector3 = class {
  x;
  y;
  z;
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  set(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }
  copy(v) {
    return this.set(v.x, v.y, v.z);
  }
};

// src/component-view.ts
var kAccess = Symbol("access");
var g_Prototypes = /* @__PURE__ */ new WeakMap();
function prototypeFor(component) {
  let prototype = g_Prototypes.get(component);
  if (prototype) return prototype;
  prototype = {};
  for (const field of component.fields) {
    Object.defineProperty(prototype, field.jsName, {
      enumerable: true,
      get() {
        return this[kAccess].readField(component, field.jsName);
      },
      set(value) {
        this[kAccess].writeField(component, field.jsName, value);
      }
    });
  }
  g_Prototypes.set(component, prototype);
  return prototype;
}
function componentView(component, access) {
  return Object.create(prototypeFor(component), { [kAccess]: { value: access } });
}

// src/entity.ts
function refuseFixed(component, call) {
  if (component.noAdd !== true) return;
  throw new OpenEngineError(
    "InvalidArgument",
    `Every entity has a ${component.name}, so entity.${call}(${component.name}) is refused; use entity.set(${component.name}, values) to change it.`
  );
}
var EntityImpl = class _EntityImpl {
  id;
  owner;
  transform;
  m_Alive = true;
  constructor(owner, id) {
    this.owner = owner;
    this.id = id;
    this.transform = new TransformViewImpl({
      readMatrix: () => this.readField(this.component("Transform"), "matrix"),
      writeMatrix: (matrix) => this.writeField(this.component("Transform"), "matrix", matrix),
      readParent: () => this.readParent(),
      writeParent: (parent) => this.writeParent(parent)
    });
  }
  get name() {
    const name = this.component("Name");
    return this.hasInfo(name) ? this.readField(name, "value") : "";
  }
  get bounds() {
    this.assertAlive();
    const box = this.owner.bridge.entityBounds(this.id);
    if (!box) return null;
    const matrix = this.readField(this.component("Transform"), "matrix");
    const { center, half } = transformBox(matrix, box.center, box.half);
    return {
      center: new Vector3(...center),
      size: new Vector3(2 * half[0], 2 * half[1], 2 * half[2]),
      min: new Vector3(center[0] - half[0], center[1] - half[1], center[2] - half[2]),
      max: new Vector3(center[0] + half[0], center[1] + half[1], center[2] + half[2])
    };
  }
  get(component) {
    const info = this.component(component.name);
    return this.hasInfo(info) ? componentView(info, this) : void 0;
  }
  set(component, values) {
    const info = this.component(component.name);
    const bridge = this.owner.bridge;
    const writes = Object.entries(values).map(([jsName, value]) => {
      const field = bridge.reflection.field(info, jsName);
      return { field, bytes: bridge.encode(field, this.toEngineValue(field, value)) };
    });
    if (!this.hasInfo(info)) bridge.check(bridge.abi.ge_component_add(this.id, info.typeId), `set(${info.name})`);
    for (const { field, bytes } of writes) bridge.setFieldBytes(this.id, info, field, bytes);
    return componentView(info, this);
  }
  add(component) {
    refuseFixed(component, "add");
    const info = this.component(component.name);
    if (this.hasInfo(info)) {
      throw new OpenEngineError("InvalidArgument", `The entity already has ${info.name}; use entity.set(${info.name}, values) to change it.`);
    }
    this.owner.bridge.check(this.owner.bridge.abi.ge_component_add(this.id, info.typeId), `add(${info.name})`);
    return componentView(info, this);
  }
  remove(component) {
    refuseFixed(component, "remove");
    const info = this.component(component.name);
    if (!this.hasInfo(info)) return;
    this.owner.bridge.check(this.owner.bridge.abi.ge_component_remove(this.id, info.typeId), `remove(${info.name})`);
  }
  has(component) {
    return this.hasInfo(this.component(component.name));
  }
  destroy() {
    this.assertAlive();
    this.owner.bridge.check(this.owner.bridge.abi.ge_entity_destroy(this.id), "destroy()");
    this.m_Alive = false;
    this.owner.forget(this.id);
  }
  readField(component, jsName) {
    this.assertAlive();
    const bridge = this.owner.bridge;
    const field = bridge.reflection.field(component, jsName);
    const value = bridge.getField(this.id, component, field);
    if (field.kind !== "EntityHandle") return value;
    return value === kInvalidEntity ? null : this.owner.entityFor(value);
  }
  writeField(component, jsName, value) {
    this.assertAlive();
    const bridge = this.owner.bridge;
    const field = bridge.reflection.field(component, jsName);
    bridge.setField(this.id, component, field, this.toEngineValue(field, value));
  }
  /** An EntityHandle field takes an Entity (or null for none); every other field its value as is. */
  toEngineValue(field, value) {
    if (field.kind !== "EntityHandle") return value;
    if (value === null) return kInvalidEntity;
    if (value instanceof _EntityImpl) return value.id;
    throw new OpenEngineError("InvalidArgument", `${field.jsName} takes an Entity or null; got ${String(value)}.`);
  }
  component(name) {
    return this.owner.bridge.reflection.component(name);
  }
  hasInfo(info) {
    this.assertAlive();
    return this.owner.bridge.hasComponent(this.id, info);
  }
  readParent() {
    const parent = this.component("Parent");
    if (!this.hasInfo(parent)) return null;
    return this.readField(parent, "parent");
  }
  writeParent(parent) {
    this.assertAlive();
    const parentId = parent === null ? kInvalidEntity : parent.id;
    this.owner.bridge.check(this.owner.bridge.abi.ge_entity_parent(this.id, parentId), "transform.parent");
  }
  assertAlive() {
    if (!this.m_Alive) throw new OpenEngineError("Disposed", `Entity ${this.id} was destroyed; create a new one with scene.create.`);
  }
};

// src/scene.ts
var SceneImpl = class {
  bridge;
  m_Host;
  m_Entities = /* @__PURE__ */ new Map();
  m_Defaults = null;
  /** Settles when every load requested so far has settled. */
  m_LoadQueue = Promise.resolve();
  /** The load the engine is running, polled until it is Ready or Failed. */
  m_ActiveLoad = null;
  constructor(host) {
    this.m_Host = host;
    this.bridge = host.bridge;
  }
  setDefaults(defaults) {
    this.m_Defaults = defaults;
  }
  get camera() {
    return this.defaults().camera;
  }
  get sun() {
    return this.defaults().sun;
  }
  get sky() {
    return this.defaults().sky;
  }
  create(name) {
    const id = this.bridge.abi.ge_entity_create();
    if (id === kInvalidEntity) throw this.bridge.failure("scene.create");
    const entity = this.entityFor(id);
    if (name !== void 0 && name !== "") {
      const info = this.bridge.reflection.component("Name");
      this.bridge.check(this.bridge.abi.ge_component_add(id, info.typeId), "scene.create");
      entity.writeField(info, "value", name);
    }
    return entity;
  }
  load(url) {
    if (this.bridge.contract.disposed) return Promise.reject(this.bridge.contract.disposedError("scene.load"));
    const absolute = this.m_Host.resolveUrl(url);
    const load = this.m_LoadQueue.then(() => this.startLoad(absolute));
    this.m_LoadQueue = load.catch(() => void 0);
    return load;
  }
  /** True while the engine is running a load. */
  get loading() {
    return this.m_ActiveLoad !== null;
  }
  /** Checks the running load once; resolves or rejects it when the engine is done with it. */
  pollLoads() {
    const active = this.m_ActiveLoad;
    if (!active) return;
    const bridge = this.bridge;
    try {
      const status = bridge.abi.ge_asset_status(active.handle);
      if (status === AssetStatus.Loading) {
        this.m_Host.requestLoadPoll();
        return;
      }
      this.m_ActiveLoad = null;
      if (status !== AssetStatus.Ready) throw bridge.failure(`scene.load('${active.url}')`);
      const id = bridge.abi.ge_instantiate_model(active.handle, kInvalidEntity);
      if (id === kInvalidEntity) throw bridge.failure(`scene.load('${active.url}')`);
      active.resolve(this.entityFor(id));
    } catch (error) {
      this.m_ActiveLoad = null;
      active.reject(error);
    }
  }
  /** Rejects the running load: the engine is going away. */
  abandonLoads() {
    const active = this.m_ActiveLoad;
    this.m_ActiveLoad = null;
    active?.reject(this.bridge.contract.disposedError(`scene.load('${active.url}')`));
  }
  entityFor(id) {
    let entity = this.m_Entities.get(id);
    if (!entity) {
      entity = new EntityImpl(this, id);
      this.m_Entities.set(id, entity);
    }
    return entity;
  }
  forget(id) {
    this.m_Entities.delete(id);
  }
  onFrame(callback) {
    return this.m_Host.onFrame(callback);
  }
  startLoad(url) {
    const bridge = this.bridge;
    bridge.contract.checkAlive(`scene.load('${url}')`);
    const handle = bridge.abi.ge_load_asset(bridge.writeString(url));
    if (handle === kInvalidAsset) throw bridge.failure(`scene.load('${url}')`);
    return new Promise((resolve, reject) => {
      this.m_ActiveLoad = { handle, url, resolve, reject };
      this.m_Host.requestLoadPoll();
    });
  }
  defaults() {
    if (!this.m_Defaults) throw new Error("the default entities are created by Engine.create");
    return this.m_Defaults;
  }
};

// src/sky-view.ts
var SkyViewImpl = class {
  entity;
  constructor(entity) {
    this.entity = entity;
  }
  get timeOfDay() {
    return this.sky().timeOfDayHours;
  }
  set timeOfDay(hours) {
    this.sky().timeOfDayHours = hours;
  }
  get latitude() {
    return this.sky().latitude;
  }
  set latitude(degrees) {
    this.sky().latitude = degrees;
  }
  get dayOfYear() {
    return this.sky().dayOfYear;
  }
  set dayOfYear(day) {
    this.sky().dayOfYear = day;
  }
  get northHeading() {
    return this.sky().northHeading;
  }
  set northHeading(degrees) {
    this.sky().northHeading = degrees;
  }
  sky() {
    const sky = this.entity.get(SkyEnvironment);
    if (!sky) throw new OpenEngineError("InvalidArgument", `scene.sky's entity has no SkyEnvironment any more; add it back with entity.set(SkyEnvironment, {}).`);
    return sky;
  }
};

// src/sun-view.ts
var SunViewImpl = class {
  entity;
  constructor(entity) {
    this.entity = entity;
  }
  get intensity() {
    return this.light().intensity;
  }
  set intensity(lux) {
    this.light().intensity = lux;
  }
  get color() {
    return this.light().color;
  }
  set color(rgb) {
    this.light().color = rgb;
  }
  get castsShadows() {
    return this.light().castsShadows;
  }
  set castsShadows(value) {
    this.light().castsShadows = value;
  }
  light() {
    const light = this.entity.get(Light);
    if (!light) throw new OpenEngineError("InvalidArgument", `scene.sun's entity has no Light any more; add it back with entity.set(Light, {}).`);
    return light;
  }
};

// src/engine.ts
var kHiddenTickMs = 33;
var kDefaultSunLux = 1e5;
function selectBuild(threads, crossOriginIsolated) {
  if (threads === "single") return { build: "st", reason: "threads: 'single' was requested" };
  if (threads === "multi") {
    if (!crossOriginIsolated) {
      throw new OpenEngineError(
        "InvalidArgument",
        "threads: 'multi' needs a cross-origin isolated page (COOP same-origin and COEP require-corp headers, or coi-serviceworker.js served from a folder that holds the page and the engine module); use threads: 'auto' to fall back to the single-threaded build."
      );
    }
    return { build: "mt", reason: "threads: 'multi' was requested" };
  }
  return crossOriginIsolated ? { build: "mt", reason: "the page is cross-origin isolated" } : { build: "st", reason: "the page is not cross-origin isolated (no COOP/COEP headers or service worker)" };
}
var g_CanvasCount = 0;
function canvasSelector(canvas) {
  if (!canvas.id) canvas.id = `opengine-canvas-${++g_CanvasCount}`;
  return `#${canvas.id}`;
}
var EngineImpl = class {
  bridge;
  scene;
  m_Host;
  m_Canvas;
  m_FrameCallbacks = /* @__PURE__ */ new Set();
  m_Running = false;
  m_LastFrameMs = null;
  m_PendingFrame = null;
  /** A load poll scheduled on its own because the engine is not running. */
  m_PendingPoll = null;
  m_Unsubscribe = [];
  constructor(bridge, host, canvas) {
    this.bridge = bridge;
    this.m_Host = host;
    this.m_Canvas = canvas;
    this.scene = new SceneImpl(this);
  }
  resolveUrl(url) {
    return this.m_Host.resolveUrl(url);
  }
  /** Creates the camera, the sun and the sky the empty world starts with. */
  createDefaultWorld() {
    const camera = this.scene.create("Camera");
    camera.set(Camera, {});
    camera.transform.position.set(0, 1.5, -5);
    const sun = this.scene.create("Sun");
    sun.set(Light, { type: "Directional", intensityUnit: "Lux", intensity: kDefaultSunLux, castsShadows: true });
    sun.transform.rotation.set(50, -30, 0);
    const sky = this.scene.create("Sky");
    sky.set(SkyEnvironment, { sunLight: sun });
    this.scene.setDefaults({ camera, sun: new SunViewImpl(sun), sky: new SkyViewImpl(sky) });
  }
  /** Starts tracking the canvas size and the tab's visibility. */
  attach() {
    this.m_Unsubscribe.push(this.m_Host.observeResize(this.m_Canvas, () => this.resize()));
    this.m_Unsubscribe.push(this.m_Host.onVisibilityChange(() => this.reschedule()));
    this.resize();
  }
  run() {
    this.bridge.contract.checkAlive("engine.run");
    if (this.m_Running) return;
    this.m_Running = true;
    this.m_LastFrameMs = null;
    this.schedule();
  }
  pause() {
    if (!this.m_Running) return;
    this.m_Running = false;
    this.cancelPendingFrame();
    this.requestLoadPoll();
  }
  onFrame(callback) {
    this.m_FrameCallbacks.add(callback);
    return () => this.m_FrameCallbacks.delete(callback);
  }
  resize() {
    const code = this.bridge.abi.ge_resize(this.m_Canvas.clientWidth, this.m_Canvas.clientHeight, this.m_Host.devicePixelRatio());
    this.bridge.check(code, "engine.resize");
  }
  async dispose() {
    if (this.bridge.contract.disposed) return;
    this.pause();
    this.cancel(this.m_PendingPoll);
    this.m_PendingPoll = null;
    for (const unsubscribe of this.m_Unsubscribe.splice(0)) unsubscribe();
    this.bridge.contract.markDisposed();
    this.scene.abandonLoads();
    await this.bridge.shutdown();
  }
  requestLoadPoll() {
    if (this.m_Running || this.m_PendingPoll || this.bridge.contract.disposed || !this.scene.loading) return;
    this.m_PendingPoll = this.scheduleCallback(() => this.idlePoll());
  }
  idlePoll() {
    this.m_PendingPoll = null;
    if (this.m_Running || this.bridge.contract.disposed) return;
    this.bridge.check(this.bridge.abi.ge_update_assets(), "scene.load");
    this.scene.pollLoads();
  }
  /**
   * One frame: the page's callbacks, then the engine's tick, then the running load's poll.
   * A callback that throws is reported and the frame goes on; one that pauses or disposes
   * the engine ends the frame before the tick.
   */
  frame(timeMs) {
    this.m_PendingFrame = null;
    if (!this.m_Running) return;
    this.m_PendingFrame = this.scheduleCallback((t) => this.frame(t));
    const dt = this.m_LastFrameMs === null ? 0 : (timeMs - this.m_LastFrameMs) / 1e3;
    this.m_LastFrameMs = timeMs;
    for (const callback of [...this.m_FrameCallbacks]) {
      try {
        callback(dt);
      } catch (error) {
        this.m_Host.reportError(error);
      }
      if (!this.m_Running) return;
    }
    this.bridge.check(this.bridge.abi.ge_tick(), "ge_tick");
    this.scene.pollLoads();
  }
  /** Animation frames while the tab is visible, the hidden-tab timer otherwise. */
  scheduleCallback(callback) {
    if (this.m_Host.isHidden()) {
      return { kind: "timer", handle: this.m_Host.setTimeout(() => callback(this.m_Host.nowMs()), kHiddenTickMs) };
    }
    return { kind: "raf", handle: this.m_Host.requestAnimationFrame(callback) };
  }
  schedule() {
    this.m_PendingFrame = this.scheduleCallback((timeMs) => this.frame(timeMs));
  }
  reschedule() {
    if (!this.m_Running) return;
    this.cancelPendingFrame();
    this.schedule();
  }
  cancelPendingFrame() {
    this.cancel(this.m_PendingFrame);
    this.m_PendingFrame = null;
  }
  cancel(pending) {
    if (!pending) return;
    if (pending.kind === "raf") this.m_Host.cancelAnimationFrame(pending.handle);
    else this.m_Host.clearTimeout(pending.handle);
  }
};
async function createEngine(options, host, loadCore, stamp) {
  if (!host.hasWebGPU()) {
    throw new OpenEngineError("NoWebGPU", "This browser has no WebGPU. Use a current Chrome or Edge, or Safari or Firefox with WebGPU enabled.");
  }
  const { build, reason } = selectBuild(options.threads ?? "auto", host.crossOriginIsolated());
  host.log(`OpenEngine: using the ${build === "mt" ? "threaded" : "single-threaded"} build because ${reason}.`);
  const bridge = new Bridge(await loadCore(build, options.canvas));
  const selector = canvasSelector(options.canvas);
  const code = await bridge.contract.suspend("ge_create", () => bridge.abi.ge_create(bridge.writeString(selector), 0));
  bridge.check(code, "Engine.create");
  const json = bridge.loadReflection();
  checkRelease(json, bridge.reflection.engineVersion, stamp);
  bindComponentTokens(bridge.reflection);
  const engine = new EngineImpl(bridge, host, options.canvas);
  engine.createDefaultWorld();
  engine.attach();
  return engine;
}
function defaultCoreUrl() {
  return new URL("./", import.meta.url).href;
}
function bindingLoader(coreUrl) {
  return async (build, canvas) => {
    const bindingUrl = new URL("opengine-core-binding.js", coreUrl).href;
    let binding;
    try {
      binding = await import(bindingUrl);
    } catch (error) {
      throw new OpenEngineError("Engine", `Could not load the engine module from ${bindingUrl}: ${String(error)}. Serve opengine-core-binding.js and opengine-core.st/mt.js and .wasm from that folder, or pass coreUrl to Engine.create.`);
    }
    return binding.loadCore({ build, coreUrl, canvas });
  };
}
var Engine = {
  create(options) {
    const coreUrl = options.coreUrl ?? defaultCoreUrl();
    return createEngine(options, browserHost(), bindingLoader(coreUrl), { version: kPackageVersion, fingerprint: kReflectionFingerprint });
  }
};

// src/orbit-controls.ts
var kDegToRad2 = Math.PI / 180;
var kPitchLimit = 89;
var kWheelPixelsPerEFold = 1e3;
var kLinePixels = 16;
var OrbitControlsImpl = class {
  target = new Vector3();
  distance;
  minDistance = 0.01;
  maxDistance = Infinity;
  enableDamping = true;
  dampingFactor = 0.1;
  rotateSpeed = 1;
  zoomSpeed = 1;
  panSpeed = 1;
  m_Camera;
  m_Element;
  m_Yaw;
  m_Pitch;
  m_YawDelta = 0;
  m_PitchDelta = 0;
  m_ZoomDelta = 0;
  m_PanDelta = [0, 0, 0];
  /** Pan drag pixels not yet converted to meters; update() converts them at the current pose. */
  m_PanPixels = [0, 0];
  m_Drag = null;
  m_Detach = [];
  constructor(camera, element) {
    if (!(camera instanceof EntityImpl)) throw new OpenEngineError("InvalidArgument", "OrbitControls takes an entity from this engine, such as scene.camera.");
    this.m_Camera = camera;
    this.m_Element = element;
    const p = camera.transform.position;
    const offset = [p.x - this.target.x, p.y - this.target.y, p.z - this.target.z];
    this.distance = Math.hypot(...offset) || 1;
    this.m_Pitch = Math.asin(Math.max(-1, Math.min(1, -offset[1] / this.distance))) / kDegToRad2;
    this.m_Yaw = Math.atan2(-offset[2], -offset[0]) / kDegToRad2;
    this.listen("pointerdown", (e) => this.onPointerDown(e));
    this.listen("pointermove", (e) => this.onPointerMove(e));
    this.listen("pointerup", (e) => this.onPointerUp(e));
    this.listen("pointercancel", (e) => this.onPointerUp(e));
    this.listen("wheel", (e) => this.onWheel(e), { passive: false });
    this.listen("contextmenu", (e) => e.preventDefault());
    this.m_Detach.push(camera.owner.onFrame((dt) => this.update(dt)));
  }
  update(dt = 0) {
    this.convertPanPixels();
    const f = this.enableDamping ? 1 - Math.pow(1 - this.dampingFactor, dt * 60) : 1;
    this.m_Yaw += this.m_YawDelta * f;
    this.m_YawDelta -= this.m_YawDelta * f;
    const pitch = this.m_Pitch + this.m_PitchDelta * f;
    this.m_Pitch = Math.max(-kPitchLimit, Math.min(kPitchLimit, pitch));
    this.m_PitchDelta = pitch === this.m_Pitch ? this.m_PitchDelta - this.m_PitchDelta * f : 0;
    this.target.set(this.target.x + this.m_PanDelta[0] * f, this.target.y + this.m_PanDelta[1] * f, this.target.z + this.m_PanDelta[2] * f);
    this.m_PanDelta = this.m_PanDelta.map((v) => v - v * f);
    this.distance = Math.max(this.minDistance, Math.min(this.maxDistance, this.distance * Math.exp(this.m_ZoomDelta * f)));
    this.m_ZoomDelta -= this.m_ZoomDelta * f;
    const look = this.look();
    const transform = this.m_Camera.transform;
    transform.position.set(this.target.x - look[0] * this.distance, this.target.y - look[1] * this.distance, this.target.z - look[2] * this.distance);
    const q = quatMultiply(quatFromAxisDegrees([0, 1, 0], 90 - this.m_Yaw), quatFromAxisDegrees([1, 0, 0], -this.m_Pitch));
    transform.quaternion.set(q.x, q.y, q.z, q.w);
  }
  dispose() {
    for (const detach of this.m_Detach.splice(0)) detach();
  }
  look() {
    const yaw = this.m_Yaw * kDegToRad2;
    const pitch = this.m_Pitch * kDegToRad2;
    return [Math.cos(pitch) * Math.cos(yaw), Math.sin(pitch), Math.cos(pitch) * Math.sin(yaw)];
  }
  listen(type, handler, options) {
    this.m_Element.addEventListener(type, handler, options);
    this.m_Detach.push(() => this.m_Element.removeEventListener(type, handler, options));
  }
  onPointerDown(event) {
    const pan = event.button === 2 || event.button === 0 && event.shiftKey;
    if (!pan && event.button !== 0) return;
    if (this.m_Drag) return;
    this.m_Drag = { mode: pan ? "pan" : "rotate", pointerId: event.pointerId, x: event.clientX, y: event.clientY };
    this.m_Element.setPointerCapture?.(event.pointerId);
  }
  onPointerUp(event) {
    if (this.m_Drag?.pointerId === event.pointerId) this.m_Drag = null;
  }
  onPointerMove(event) {
    if (!this.m_Drag || this.m_Drag.pointerId !== event.pointerId) return;
    const dx = event.clientX - this.m_Drag.x;
    const dy = event.clientY - this.m_Drag.y;
    this.m_Drag.x = event.clientX;
    this.m_Drag.y = event.clientY;
    if (this.m_Drag.mode === "rotate") this.rotateBy(dx, dy);
    else {
      this.m_PanPixels[0] += dx;
      this.m_PanPixels[1] += dy;
    }
  }
  onWheel(event) {
    event.preventDefault();
    const pixels = event.deltaMode === 1 ? event.deltaY * kLinePixels : event.deltaMode === 2 ? event.deltaY * (this.m_Element.clientHeight || 1) : event.deltaY;
    this.m_ZoomDelta += pixels / kWheelPixelsPerEFold * this.zoomSpeed;
  }
  /** A drag of (dx, dy) pixels: the full height of the element turns the camera 360 degrees. */
  rotateBy(dx, dy) {
    const degreesPerPixel = 360 / (this.m_Element.clientHeight || 1) * this.rotateSpeed;
    this.m_YawDelta -= dx * degreesPerPixel;
    this.m_PitchDelta -= dy * degreesPerPixel;
  }
  /** The pending pan drag: the scene under the pointer follows it at the target's depth. */
  convertPanPixels() {
    const [dx, dy] = this.m_PanPixels;
    if (dx === 0 && dy === 0) return;
    this.m_PanPixels = [0, 0];
    const fovY = this.m_Camera.get(Camera)?.fovY ?? 60;
    const metersPerPixel = 2 * this.distance * Math.tan(0.5 * fovY * kDegToRad2) / (this.m_Element.clientHeight || 1) * this.panSpeed;
    const yaw = this.m_Yaw * kDegToRad2;
    const pitch = this.m_Pitch * kDegToRad2;
    const right = [Math.sin(yaw), 0, -Math.cos(yaw)];
    const up = [-Math.sin(pitch) * Math.cos(yaw), Math.cos(pitch), -Math.sin(pitch) * Math.sin(yaw)];
    for (let i = 0; i < 3; ++i) this.m_PanDelta[i] += (-right[i] * dx + up[i] * dy) * metersPerPixel;
  }
};
export {
  Camera,
  Engine,
  Light,
  LocalBounds,
  MeshRenderer,
  OpenEngineError,
  OrbitControlsImpl as OrbitControls,
  SkyEnvironment,
  Transform,
  Vector3
};
