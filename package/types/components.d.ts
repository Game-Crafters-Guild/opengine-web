// Generated from the engine's component headers by ComponentScanner --emit-dts. Do not edit.
// One interface and one ComponentType value per reflected component; & NoAdd marks the ones a page
// cannot add or remove. Each field's type follows its reflected kind.

import type { AssetRef, Color, ComponentType, Entity, NoAdd, Vec3 } from './opengine';

export type AmbientLightMode = 'Flat' | 'Gradient';

export type AnimatorCallbackMethod = 'Deferred' | 'Immediate';

export type AnimatorCallbackProcess = 'Idle' | 'Physics' | 'Manual';

export type AnimatorDiscreteCallbackMode = 'Recessive' | 'Dominant';

export type AnimatorGraphParamKind = 'Float' | 'Bool' | 'Trigger';

export type AnimatorPlaybackCommand = 'None' | 'Play' | 'PlaySection' | 'PlayWithBlend' | 'Seek' | 'Pause' | 'Stop' | 'Autoplay';

export type AnimatorPlaybackSource = 'Clip' | 'Timeline' | 'Library' | 'Controller' | 'Graph';

export type AreaLightShape = 'Rectangle' | 'Disc' | 'Sphere' | 'Cylinder';

export type AudioEmitterAttenuation = 'None' | 'Inverse' | 'Linear' | 'Exponential';

export type CameraSensorPreset = 'Custom' | 'Standard8' | 'Super8' | 'Film16' | 'Super16' | 'Film35TwoPerf' | 'Film35ThreePerf' | 'Film35Academy' | 'Super35' | 'Film65FivePerf' | 'Imax15Perf' | 'MicroFourThirds' | 'ApsC' | 'FullFrame' | 'MediumFormat4433' | 'MediumFormat5440' | 'ArriAlexa35' | 'ArriAlexaLF' | 'ArriAlexa65';

export type ColorFilterBlendMode = 'Multiply' | 'Add' | 'Screen' | 'SoftLight';

export type CubeLutStage = 'Finish' | 'Grade';

/** 'Cascaded2': Cascaded (2) */
export type DDGICascadeMode = 'SingleGrid' | 'Cascaded2';

export type DDGIConvergedSolve = 'Continuous' | 'Throttle';

/**
 * 'Coverage': Probe Coverage
 * 'ProbeStateFine': Probe State (Fine)
 * 'NearestProbeIrradianceFine': Nearest Probe Irradiance (Fine)
 * 'FineProbeCoord': Fine Probe Coordinate
 */
export type DDGIDebugView = 'None' | 'Coverage' | 'ProbeState' | 'CascadeWeight' | 'NearestProbeIrradiance' | 'ProbeStateFine' | 'NearestProbeIrradianceFine' | 'FineProbeCoord' | 'FineProbeSlot';

export type DDGIDepthResolution = 'Shared' | 'Fine';

/**
 * 'Quarter': 25%
 * 'Half': 50%
 * 'ThreeQuarter': 75%
 * 'Full': 100%
 */
export type DDGIGlossyResolveScale = 'Quarter' | 'Half' | 'ThreeQuarter' | 'Full';

export type DDGIJitterMode = 'Gated' | 'MonteCarlo';

export type DDGIProbePlacement = 'Grid' | 'Adaptive';

export type DDGIVolumeFit = 'Manual' | 'FollowCamera';

export type DirectionalShadowFilter = 'Grid5x5' | 'Grid3x3' | 'PoissonPCF' | 'PCSS' | 'MSM4' | 'DilatedPCF';

export type DirectionalShadowMode = 'Cascades' | 'RayTraced';

export type DofSamplingQuality = 'Performance' | 'Balanced' | 'Quality';

export type ExposureMeter = 'Picture' | 'Lights';

export type ExposureMode = 'Fixed' | 'Manual' | 'Physical' | 'Auto';

export type FilmGateMask = 'None' | 'RoundedGate' | 'Academy137' | 'Widescreen185' | 'Anamorphic239';

export type FilmGrainMode = 'FidelityFXFast' | 'Filmic';

export type FogGlowQuality = 'Fast' | 'Balanced' | 'High' | 'Cinematic';

export type GridType = 'Square' | 'Hex';

export type HeightFogAxisMode = 'WorldY' | 'WorldX' | 'WorldZ' | 'Custom';

export type HeightFogColorMode = 'FixedColor' | 'SkyHorizon';

export type HeightFogGradientMode = 'None' | 'Distance' | 'Height' | 'ScreenY' | 'MainLight';

export type HeightFogLayerMode = 'Dominant' | 'Additive';

export type HeightFogPreset = 'Custom' | 'MorningHaze' | 'GroundMist' | 'MountainValley' | 'HorizonPollution' | 'Day' | 'Night';

export type HumanoidRetargetLOD = 'Full' | 'NoOps' | 'FKOnly' | 'PoseHold';

export type LightFalloff = 'PhysicalInverseSquare' | 'Linear' | 'SmoothRange' | 'Custom';

export type LightShadowTier = 'Inherit' | 'Low' | 'Medium' | 'High';

export type LightType = 'Directional' | 'Point' | 'Spot' | 'Ambient' | 'Area' | 'Volume';

export type LightUnit = 'Unitless' | 'Lux' | 'Lumen' | 'Candela';

export type Look = 'Neutral' | 'Filmic' | 'Photographic';

export type MarkupMemberMode = 'Include' | 'Exclude';

export type NavigationSourcePolicy = 'Auto' | 'Include' | 'Exclude';

export type NavigationSurfaceMode = 'Mesh' | 'Grid';

export type OceanDepthFogFalloff = 'Exponential' | 'Linear' | 'Smooth';

export type OceanInputBlend = 'Replace' | 'Additive' | 'Multiply' | 'Minimum' | 'Maximum';

export type OceanInputGeometryType = 'Rectangle' | 'EngineMesh' | 'Line' | 'Trail' | 'Particle' | 'SplineBand' | 'CustomNative';

export type OceanTimeProviderMode = 'Default' | 'Custom' | 'Paused' | 'NetworkOffset' | 'Timeline';

export type ParticleBillboard = 'WorldOriented' | 'FaceCamera' | 'YAlongVelocity' | 'FaceCameraYAlongVelocity' | 'LockedToEmitterUp' | 'FaceCameraPosition' | 'Horizontal' | 'ZAlongVelocity';

export type ParticleDrawOrder = 'Spawn' | 'Lifetime' | 'ReverseLifetime' | 'ViewDepth';

export type ParticleEmitterDimension = 'World2D' | 'World3D';

export type ParticleLightingMode = 'Unlit' | 'Lit' | 'SixWay';

export type ParticleSixWayLayout = 'SignedAxes' | 'RightTopBackRgba' | 'TopLeftRightBottomBackFront';

export type PostProcessVolumeShape = 'Box' | 'Sphere' | 'Capsule' | 'Cylinder';

export type RayTracedShadowQuality = 'Performance' | 'Quality';

/** 'Realtime': Realtime (on change) */
export type ReflectionProbeUpdateMode = 'Once' | 'Realtime';

export type ShadowCasting = 'Off' | 'On' | 'ShadowsOnly';

export type SkeletonInstanceOwner = 'Self' | 'Entity';

export type SkyBelowHorizonMode = 'ContinueHorizon' | 'PlanetGround' | 'StylizedGround';

export type SkyMode = 'Physical' | 'Gradient';

export type SkyScalarCurveShapeMode = 'KeyCurve' | 'CubicBezier';

export type SkySunIlluminanceSource = 'Light' | 'Curve';

export type SkySunPathKind = 'Earth' | 'Custom';

export type SplineConformTarget = 'Scene' | 'TerrainOnly';

export type SplineExtrudeProfile = 'Bevel' | 'Crown';

export type SplineExtrudeWidthMode = 'Channel' | 'FitToBanks';

export type SplineExtrudeWidthScale = 'LateralOnly' | 'Uniform' | 'None';

export type SplineFencePartKind = 'None' | 'Post' | 'Span' | 'Gate' | 'Crest' | 'Cap';

export type SplineGroundAuthority = 'Auto' | 'None' | 'Grades' | 'Owns';

export type SplineNetworkMemberKind = 'Road' | 'Area';

export type SplineNodeRule = 'None' | 'AtGrade' | 'SplitLevel' | 'Closed' | 'Attach';

export type SplinePavingMemberMode = 'Exclude' | 'Ignore';

export type SplinePavingMouth = 'Straight' | 'Flared';

export type SplinePlacementConform = 'None' | 'Height' | 'HeightAndSlope';

export type SplinePlacementFit = 'FitToLength' | 'FixedPitch';

export type SplinePlantMode = 'BoundsMin' | 'PivotPlane';

export type SplineSpanGrade = 'Racked' | 'Stepped' | 'Sheared';

export type SplineSpanOverrideKind = 'None' | 'Gate' | 'ExplicitPart';

export type SplineWallCorner = 'Miter' | 'Round';

export type SplineWallGrade = 'Racked' | 'Stepped';

export type SssrSampleQuality = 'Low' | 'Medium' | 'High';

export type StarObserverKind = 'Eye' | 'Camera';

export type StarShapeKind = 'Point' | 'Sparkle';

export type TerrainBaseSource = 'ProceduralNoise' | 'HeightmapAsset' | 'Flat';

export type TerrainDebugView = 'Off' | 'Facets' | 'AtlasSlots';

export type TerrainDomain = 'Planar' | 'Spherical';

export type TerrainGrassPreset = 'Custom' | 'Meadow' | 'Lawn' | 'Steppe' | 'Stylized';

export type TerrainGrassRenderMode = 'Dither' | 'Blend';

export type TerrainModifierBlend = 'Set' | 'Add' | 'Subtract' | 'Min' | 'Max' | 'SmoothMin' | 'SmoothMax' | 'Average';

export type TerrainRuleConditionKind = 'SlopeDegrees' | 'SlopeNormalized' | 'HeightMetres' | 'HeightNormalized' | 'Noise';

export type TerrainRuleFalloffCurve = 'ClampedLinear' | 'Smoothstep';

export type TerrainVolumeShape = 'Rectangle' | 'Circle' | 'SplinePath' | 'SplineArea' | 'Global';

export type TweenEasing = 'Linear' | 'Smooth' | 'Fade' | 'Constant' | 'QuadIn' | 'QuadOut' | 'QuadInOut' | 'QuadOutIn' | 'CubicIn' | 'CubicOut' | 'CubicInOut' | 'CubicOutIn' | 'QuartIn' | 'QuartOut' | 'QuartInOut' | 'QuartOutIn' | 'QuintIn' | 'QuintOut' | 'QuintInOut' | 'QuintOutIn' | 'SineIn' | 'SineOut' | 'SineInOut' | 'SineOutIn' | 'ExpoIn' | 'ExpoOut' | 'ExpoInOut' | 'ExpoOutIn' | 'CircIn' | 'CircOut' | 'CircInOut' | 'CircOutIn' | 'ElasticIn' | 'ElasticOut' | 'ElasticInOut' | 'ElasticOutIn' | 'BackIn' | 'BackOut' | 'BackInOut' | 'BackOutIn' | 'BounceIn' | 'BounceOut' | 'BounceInOut' | 'BounceOutIn' | 'Custom';

export type UIRenderMode = 'Overlay' | 'Fullscreen';

export type ValueCurveShapeMode = 'KeyCurve' | 'CubicBezier';

export type ValueCurveTarget = 'None' | 'TransformPositionX' | 'TransformPositionY' | 'TransformPositionZ' | 'TransformScaleX' | 'TransformScaleY' | 'TransformScaleZ' | 'LightIntensity' | 'PostProcessWeight';

export type VolumetricCloudsPreset = 'Custom' | 'FairWeatherCumulus' | 'Altocumulus' | 'StratusOvercast' | 'Thunderhead' | 'CirrusVeil' | 'BrokenCeiling';

export type VolumetricFogDensityMode = 'Additive' | 'Subtractive' | 'Override';

export type VolumetricFogGradientMode = 'None' | 'LocalX' | 'LocalY' | 'LocalZ' | 'ScreenY' | 'MainLight';

export type WindVolumeBlendMode = 'Additive' | 'Override';

export type WindVolumeShape = 'Box' | 'Sphere' | 'Capsule' | 'Cylinder';

export interface AmbientLight {
    mode: AmbientLightMode;
    color: [number, number, number];
    skyColor: [number, number, number];
    equatorColor: [number, number, number];
    groundColor: [number, number, number];
    intensity: number;
    affectSpecular: boolean;
}
export declare const AmbientLight: ComponentType<AmbientLight>;

export interface AmbientOcclusionEffect {
    enabled: boolean;
    intensity: number;
    radius: number;
    thickness: number;
}
export declare const AmbientOcclusionEffect: ComponentType<AmbientOcclusionEffect>;

export interface AnimatedNodeRef {
    nodeIndex: number;
}
export declare const AnimatedNodeRef: ComponentType<AnimatedNodeRef> & NoAdd;

export interface AnimatedSprite2D {
    spriteFramesGuid: AssetRef;
    animationName: string;
    timeSeconds: number;
    speedScale: number;
    playing: boolean;
    loop: boolean;
}
export declare const AnimatedSprite2D: ComponentType<AnimatedSprite2D>;

export interface Animator {
    active: boolean;
    autoPlayOnEnterPlayMode: boolean;
    clipGuid: AssetRef;
    libraryGuid: AssetRef;
    timelineGuid: AssetRef;
    controllerGuid: AssetRef;
    graphGuid: AssetRef;
    assignedAnimation: string;
    rootNode: string;
    rootMotionTrack: string;
    speedScale: number;
    blendSeconds: number;
    seekTimeSeconds: number;
    sectionStartSeconds: number;
    sectionEndSeconds: number;
    audioMaxPolyphony: number;
    loop: boolean;
    deterministic: boolean;
    resetOnSave: boolean;
    rootMotionLocal: boolean;
    source: AnimatorPlaybackSource;
    pendingCommand: AnimatorPlaybackCommand;
    callbackProcess: AnimatorCallbackProcess;
    callbackMethod: AnimatorCallbackMethod;
    discreteCallbackMode: AnimatorDiscreteCallbackMode;
    pendingGraphParamCount: number;
    clipSourceModelGuid: AssetRef;
    clipSourceAnimationIndex: number;
}
export declare const Animator: ComponentType<Animator>;

export interface AnimatorGraphParamWrite {
    id: bigint;
    floatValue: number;
    kind: AnimatorGraphParamKind;
    boolValue: number;
}
export declare const AnimatorGraphParamWrite: ComponentType<AnimatorGraphParamWrite>;

export interface AnimatorRef {
    time: number;
    speed: number;
    blendTime: number;
    blendDuration: number;
    sectionStart: number;
    sectionEnd: number;
    flags: number;
    prevTime: number;
}
export declare const AnimatorRef: ComponentType<AnimatorRef>;

export interface AtmosphericCloudLayer {
    enabled: boolean;
    skyFill: number;
    vaporMass: number;
    cloudColor: [number, number, number];
    opacity: number;
    floorHeight: number;
    layerDepth: number;
    bodyFrequency: number;
    edgeFrequency: number;
    edgeBreakup: number;
    driftAngle: number;
    driftRate: number;
    sunFade: number;
    skyBounce: number;
    rimBoost: number;
    occlusion: number;
    historyWeight: number;
    pixelScale: number;
}
export declare const AtmosphericCloudLayer: ComponentType<AtmosphericCloudLayer>;

export interface AudioEmitter {
    clipGuid: AssetRef;
    spatialized: boolean;
    loop: boolean;
    playOnStart: boolean;
    worldId: number;
    bus: number;
    volume: number;
    pitch: number;
    attenuation: AudioEmitterAttenuation;
    minDistance: number;
    maxDistance: number;
    rolloff: number;
}
export declare const AudioEmitter: ComponentType<AudioEmitter>;

export interface AudioListener {
    listenerIndex: number;
    worldId: number;
}
export declare const AudioListener: ComponentType<AudioListener>;

export interface BloomEffect {
    enabled: boolean;
    threshold: number;
    knee: number;
    antiFlicker: boolean;
    intensity: number;
    scatteringAmount: number;
    tint: [number, number, number];
    radius: number;
    octaves: number;
    scatter: number;
    depthVeilEnabled: boolean;
    depthVeilIntensity: number;
    depthVeilStart: number;
    depthVeilEnd: number;
    depthVeilTint: [number, number, number];
    lensDirtEnabled: boolean;
    lensDirtVignette: boolean;
    lensDirtVignetteIntensity: number;
    lensDirtVignetteRadius: number;
    lensDirtVignetteSmoothness: number;
    lensDirtVignetteRounded: boolean;
    lensDirtVignetteColor: [number, number, number];
    lensDirtIntensity: number;
    lensDirtScatter: number;
    lensDirtTexture: AssetRef;
}
export declare const BloomEffect: ComponentType<BloomEffect>;

export interface Camera {
    perspective: boolean;
    fovY: number;
    orthographicSize: number;
    nearZ: number;
    farZ: number;
    visibleLayers: number;
    postProcessProfileId: number;
    msaaSamples: number;
    antiAliasing: number;
    renderScale: number;
    volumeLayers: number;
    exposureControl: ExposureMode;
    exposure: number;
    manualExposureEV: number;
    exposureCompensation: number;
    aperture: number;
    shutterTime: number;
    iso: number;
    focusDistance: number;
    focusDebugMode: number;
    focusDebugAlpha: number;
    apertureBladeCount: number;
    apertureRoundness: number;
    apertureRotation: number;
    anamorphicSqueeze: number;
    sensorPreset: CameraSensorPreset;
    sensorHeightMm: number;
    autoExposureMinEv: number;
    autoExposureMaxEv: number;
    autoExposureSpeedUp: number;
    autoExposureSpeedDown: number;
    autoExposureMeter: ExposureMeter;
    aspectPreset: number;
    customAspectWidth: number;
    customAspectHeight: number;
    pixelPerfect: boolean;
    pixelPerfectPixelsPerUnit: number;
    pixelPerfectReferenceWidth: number;
    pixelPerfectReferenceHeight: number;
    pixelPerfectPixelSnap: boolean;
    pixelPerfectExpand: boolean;
}
export declare const Camera: ComponentType<Camera>;

export interface ChromaticAberrationEffect {
    enabled: boolean;
    intensity: number;
    startOffset: number;
    saturation: number;
    longitudinalIntensity: number;
    comaIntensity: number;
}
export declare const ChromaticAberrationEffect: ComponentType<ChromaticAberrationEffect>;

export interface ColorFilterEffect {
    enabled: boolean;
    blendMode: ColorFilterBlendMode;
    color: [number, number, number];
    intensity: number;
}
export declare const ColorFilterEffect: ComponentType<ColorFilterEffect>;

export interface ColorGradeEffect {
    enabled: boolean;
    shadowsColor: [number, number, number];
    shadowsLightness: number;
    midtonesColor: [number, number, number];
    midtonesLightness: number;
    highlightsColor: [number, number, number];
    highlightsLightness: number;
    contrast: number;
    saturation: number;
    hueShift: number;
    temperature: number;
    tint: number;
    shadowsStart: number;
    shadowsEnd: number;
    highlightsStart: number;
    highlightsEnd: number;
    gradeInLog: boolean;
}
export declare const ColorGradeEffect: ComponentType<ColorGradeEffect>;

export interface ContrastAdaptiveSharpenEffect {
    enabled: boolean;
    stackOrder: number;
    strength: number;
}
export declare const ContrastAdaptiveSharpenEffect: ComponentType<ContrastAdaptiveSharpenEffect>;

export interface CrtEffect {
    enabled: boolean;
    intensity: number;
    curvature: number;
    scanlines: number;
    vignette: number;
    aberration: number;
    softness: number;
    exposureCompensation: boolean;
    emulatedResolutionDiv: number;
}
export declare const CrtEffect: ComponentType<CrtEffect>;

export interface CubeLutEffect {
    enabled: boolean;
    intensity: number;
    stage: CubeLutStage;
    lutAssetGuid: AssetRef;
}
export declare const CubeLutEffect: ComponentType<CubeLutEffect>;

export interface DDGIVolume {
    /** Draws what the probe field resolved instead of lit shading. Probe Coverage shows where the probes only partly answer for a surface, Probe State shows which probes were classified buried and how far they relocated, Cascade Weight shows which grid owns each pixel. Diagnostic only — costs nothing when off. */
    debugView: DDGIDebugView;
    /** Draws the probe lattice in the Scene View, matching the reference demo's show-probes checkbox. Selecting the volume draws its bounds, not its probes, so this stays authoritative while you edit it. */
    showProbes: boolean;
    /** Where the grid's center comes from. Manual keeps it where you placed it. Follow Camera re-centers it on the camera every frame so the scene has GI everywhere the camera goes, snapped to whole probe cells so small movements cost nothing. In Manual the entity's scale sizes the grid; in Follow Camera, Follow Range and Follow Height Fraction size it. */
    fit: DDGIVolumeFit;
    /** How far GI reaches from the camera, in world units, when Fit is Follow Camera. Larger covers more of the level but spreads the same probe count thinner - probe spacing is range * 2 / (Divisions - 1). Ignored when Fit is Manual, where the entity's scale sizes the volume instead. */
    followRange: number;
    /** Vertical reach of a Follow Camera volume, as a fraction of Range. Below 1 spends fewer probes on empty headroom, which is usually what a level wants. Ignored when Fit is Manual. */
    followHeightFraction: number;
    /** How probes are positioned. Adaptive (default) keeps the uniform lattice but nudges each probe out of any geometry it is embedded in, and deactivates one that stays buried so it stops leaking light it cannot see. Grid is the plain lattice — every probe sits at its cell center and contributes, no classify pass — cheaper and fully predictable, and the A/B control for judging what Adaptive changed. */
    probePlacement: DDGIProbePlacement;
    /**
     * How much authority probe classification has, from 0 (off - probes are never relocated or deactivated, exactly like Grid placement, and the classify pass is skipped) to 1 (full). Lower it if thin or two-sided walls are being misread as solid and probes are wrongly deactivated. Does nothing while Probe Placement is Grid. Applied live, no grid rebuild.
     * Range: 0 to 1.
     */
    classifyStrength: number;
    /** Probe count along the grid's longest axis; the other two axes scale by aspect ratio. Higher = finer indirect detail at a roughly cubic cost in trace/blend/upload work. Clamped 2-32; a resolution change rebuilds the probe grid after a short idle delay, not every frame while dragging. */
    divisions: number;
    /**
     * Rays traced per probe per tick — more rays reduce noise per solve at a linear trace cost. Clamped 32-256. The per-tick budget is counted in rays, so a higher value visits fewer probes each tick and the whole grid takes longer to sweep; 256 is what RTXGI ships, 64 is this port's measured default.
     * Label: Rays / Probe
     */
    raysPerProbe: number;
    /** Multiplier on the final blended irradiance before it reaches the forward pass's ambient term. Applied live, no grid rebuild. */
    intensity: number;
    /**
     * How much multi-bounce light the field carries, scaling the recursive bounce term rather than the final output. Useful mainly between 0 (single bounce only) and about 1 (full multi-bounce); above that the convergence bound and the radiance clamp renormalize it away and it stops doing anything. To change how strongly color moves between surfaces, use Radiance Clamp - not this. Applied live, no grid rebuild.
     * Range: 0 to 4.
     */
    bounceIntensity: number;
    /**
     * How much sky light the probes pick up on rays that hit nothing. 0 ignores the sky completely (indoor-only GI, miss rays are black), 1 is the environment's own brightness. Multiplies with the scene's global sky IBL intensity rather than replacing it. Applied live, no grid rebuild.
     * Range: 0 to 2.
     */
    skyIntensity: number;
    /** Ceiling on how bright a single bounce sample may be, which is what stops one over-bright surface from smearing a firefly through the probe field. Dims an outlier without changing its color. This is a ceiling, not a switch - 0 means no bounce light at all. Applied live, no grid rebuild. */
    radianceClamp: number;
    /** Sampling regime for the probe solve. Gated (default, matching the reference library) traces the same ray directions every solve, so once the field converges it is perfectly stable - no shimmer, even while the camera moves. Monte Carlo rotates the ray set every solve for better long-run coverage of the sphere at the cost of permanent low-level temporal noise. Pair Gated with Hysteresis around 0.6 and Monte Carlo with around 0.9. Applied live, no grid rebuild. */
    jitterMode: DDGIJitterMode;
    /**
     * Temporal blend retention in [0,1), which is how much of the old estimate each texel keeps every solve. In frames: a value h takes about ln(0.05)/ln(h) solves to forget an old reading, so 0.9 is roughly 28 frames and 0.6 is roughly 6. Higher is smoother but slower to react to a light or geometry change; lower reacts faster but stays noisier. Pairs with Jitter Mode: 0.6 with Gated (the default pairing, matching the reference library) and 0.9 with Monte Carlo - a held-basis value under a rotating basis reads as large blobs drifting over surfaces. Applied live, no grid rebuild.
     * Range: 0 to 0.99.
     */
    hysteresis: number;
    /**
     * How far a probe texel may jump in one update, measured in multiples of its own noise level. A bigger jump is treated as a firefly and pulled back rather than accepted. Lower is steadier but slower to react; raise it if real lighting changes arrive late.
     * Range: 1 to 20.
     */
    fireflyClamp: number;
    /**
     * How large a change must be, in multiples of a probe texel's own noise level, before it is treated as a real lighting change instead of sampling noise. Lower reacts sooner to real changes at the cost of also reacting to noise.
     * Range: 0.5 to 8.
     */
    changeThreshold: number;
    /**
     * How hard the field snaps to new values where a real lighting change was detected. Higher converges faster after a light moves or a door opens; too high reintroduces noise on those texels.
     * Range: 0 to 0.9.
     */
    snapAmount: number;
    /**
     * Scale on the surface sample bias used when reading indirect irradiance. Increase if thin geometry shows self-shadowing in the indirect term; decrease if indirect light visibly detaches from a surface. Applied live, no grid rebuild.
     * Range: 0 to 8.
     */
    normalBiasScale: number;
    /**
     * How aggressively light is stopped from leaking through walls. 1 is the full visibility test, 0 disables it (light bleeds through thin geometry). Backing off from 1 trades a little leak for less over-darkening on thin or two-sided geometry, which is why the default is not 1.
     * Range: 0 to 1.
     */
    chebyshevStrength: number;
    /** Resolution of the occluder-distance data each probe stores for the leak test. Shared keeps it in the 6x6 irradiance tile (the default, cheapest). Fine gives it its own 14x14 tile, the ratio RTXGI uses, which stops noticeably more light leaking through thin walls; costs one extra depth blend and upload dispatch per cascade per tick and four times the depth atlas memory. Rebuilds the grid after a short idle delay. */
    depthResolution: DDGIDepthResolution;
    /**
     * How sharply each probe direction's stored occluder distance tracks that exact direction. 1 is a plain cosine-weighted average; lower blurs the distance over the whole hemisphere, which leaks more light through walls; higher tracks the nearest occluder in that direction crisply at the cost of more noise. Does nothing while Chebyshev Strength is 0. Applied live, no grid rebuild.
     * Range: 0.01 to 200.
     */
    depthSharpness: number;
    /**
     * How strongly each probe's octahedral tile is denoised on its way into the atlas. 0 is off (the raw blended field, grainier at a given ray count), 1 is the full filter and matches the upstream library. It smooths only within one probe, never between probes, so it cannot bleed light through a wall. Applied live, no grid rebuild.
     * Range: 0 to 1.
     */
    filterStrength: number;
    /**
     * How large a difference between neighboring probe directions the denoise filter still treats as noise rather than a real edge. Higher trusts more neighbors and smooths harder, at the cost of directional detail within a probe; lower keeps that detail and removes less grain. Does nothing while Filter Strength is 0.
     * Range: 0 to 1.
     */
    filterSmoothness: number;
    /** Adds specular reflections baked from the probes, giving metals and smooth surfaces local reflections without a screen-space pass. Costs two extra blend/upload dispatches and one high-resolution atlas per volume; reuses the rays the diffuse field already traces, so it adds no ray cost. */
    enableGlossy: boolean;
    /**
     * How strongly probe reflections displace the environment reflection. At 0 the environment cube is used unchanged; at 1 the probes take full authority wherever they actually saw geometry.
     * Range: 0 to 1.
     */
    reflectionIntensity: number;
    /** Resolution the probe reflections are computed at, as a fraction of the view. 50% (default) recovers most of the cost and its blur hides the probe lobes' coarse texels on large reflectors; 100% computes them per pixel and shows those texels on a close-up mirror. Applied live, no grid rebuild. */
    glossyResolveScale: DDGIGlossyResolveScale;
    /** Keeps the probe solve running while the camera moves. On (default, matching the reference library) the field keeps converging during a fly-through. Off pauses the whole solve during camera motion and resumes shortly after the view comes to rest - the field is world-space, so it stays correct while paused, it just stops reacting to lighting or geometry changes until you stop moving. Costs nothing visually when the view is still; gives the GPU time back while it is not. */
    continuousSolve: boolean;
    /** What the solve does once the probe field has settled. Continuous (default, matching the reference library) keeps spending the full per-tick ray budget. Throttle drops to a small patrol budget once nearly every probe texel has been steady for its full history, and restores the full budget within a few ticks of a lighting or geometry change. Costs one tiny reduction dispatch and readback per tick while on; gives most of the solve's GPU time back on a static scene. */
    convergedSolve: DDGIConvergedSolve;
    /** How many probe grids to run. Single Grid is the coarse lattice alone. Cascaded (2) adds a second, finer grid covering a smaller region centered on this volume, for closer-range indirect detail — roughly double the trace/blend/upload cost. Cascaded is the default, matching the reference library. */
    cascades: DDGICascadeMode;
    /**
     * Fraction of this volume's extents the fine cascade covers (e.g. 0.35 = a sub-box 35% the size, centered the same). Clamped 0.05-0.9. Smaller = denser probes in a smaller region.
     * Range: 0.05 to 0.9.
     */
    fineCascadeExtentFraction: number;
}
export declare const DDGIVolume: ComponentType<DDGIVolume>;

export interface DebandEffect {
    enabled: boolean;
    thresholdLsb: number;
}
export declare const DebandEffect: ComponentType<DebandEffect>;

export interface DepthOfFieldEffect {
    enabled: boolean;
    maxRadius: number;
    samplingQuality: DofSamplingQuality;
    debugMode: number;
    debugAlpha: number;
}
export declare const DepthOfFieldEffect: ComponentType<DepthOfFieldEffect>;

export interface ExposureAdjustmentEffect {
    enabled: boolean;
    compensation: number;
    clampMin: boolean;
    minEv: number;
    clampMax: boolean;
    maxEv: number;
}
export declare const ExposureAdjustmentEffect: ComponentType<ExposureAdjustmentEffect>;

export interface FastBlurEffect {
    enabled: boolean;
    intensity: number;
    focusDistance: number;
    focusRange: number;
    maxRadius: number;
    nearBlur: boolean;
}
export declare const FastBlurEffect: ComponentType<FastBlurEffect>;

export interface FilmSimulationEffect {
    enabled: boolean;
    filmFrameRate: number;
    halationEnabled: boolean;
    halationIntensity: number;
    halationRadius: number;
    halationTint: [number, number, number];
    grainEnabled: boolean;
    grainMode: FilmGrainMode;
    grainIntensity: number;
    grainSize: number;
    grainSmooth: boolean;
    grainDensity: number;
    grainShadowResponse: number;
    grainMidtoneResponse: number;
    grainHighlightResponse: number;
    grainColored: boolean;
    hairEnabled: boolean;
    hairAmount: number;
    hairIntensity: number;
    hairWidth: number;
    hairLength: number;
    hairRandomSize: number;
    hairCurl: number;
    hairCurlRandomness: number;
    scratchesEnabled: boolean;
    scratchAmount: number;
    scratchIntensity: number;
    scratchWidth: number;
    scratchLength: number;
    dustEnabled: boolean;
    dustAmount: number;
    dustIntensity: number;
    dustSize: number;
    dustRandomSize: number;
    gateWeaveEnabled: boolean;
    gateWeaveHorizontal: number;
    gateWeaveVertical: number;
    gateWeaveRotation: number;
    gateMask: FilmGateMask;
    gateMaskFeather: number;
    gateMaskRoundness: number;
}
export declare const FilmSimulationEffect: ComponentType<FilmSimulationEffect>;

export interface GIEmitter {
    active: boolean;
}
export declare const GIEmitter: ComponentType<GIEmitter>;

export interface GameLogicGraphRef {
    graphGuid: AssetRef;
    runOnStart: boolean;
    runOnUpdate: boolean;
    entryFunction: string;
}
export declare const GameLogicGraphRef: ComponentType<GameLogicGraphRef>;

export interface HLODVolume {
    cellSize: number;
    maxInstancingRatio: number;
    minMembers: number;
    vbBudgetMB: number;
    switchCoverage: number;
    switchHysteresis: number;
}
export declare const HLODVolume: ComponentType<HLODVolume>;

export interface HeatDistortionEffect {
    enabled: boolean;
    strength: number;
    speed: number;
    scale: number;
    maskStrength: number;
    distanceStart: number;
    distanceEnd: number;
    directionalFalloff: number;
    useAbsoluteY: boolean;
    softness: number;
}
export declare const HeatDistortionEffect: ComponentType<HeatDistortionEffect>;

export interface HeightFogEffect {
    enabled: boolean;
    preset: HeightFogPreset;
    intensity: number;
    density: number;
    maxOpacity: number;
    distanceFogEnabled: boolean;
    minDistance: number;
    smoothLength: number;
    maxDistance: number;
    layerMode: HeightFogLayerMode;
    heightFogEnabled: boolean;
    baseHeight: number;
    transitionLength: number;
    horizonHeightOffset: number;
    horizonHeightBlendStart: number;
    horizonHeightBlendEnd: number;
    axisMode: HeightFogAxisMode;
    customAxis: [number, number, number];
    colorMode: HeightFogColorMode;
    emissive: [number, number, number];
    gradientMode: HeightFogGradientMode;
    gradientStrength: number;
    gradientLowColor: [number, number, number];
    gradientHighColor: [number, number, number];
    trackDirectionalLight: boolean;
    sunDirection: [number, number, number];
    sunColor: [number, number, number];
    sunIntensity: number;
    sunIntensityScale: number;
    phase: number;
    phaseWeight0: number;
    phaseWeight1: number;
    noiseEnabled: boolean;
    noiseScale: number;
    noiseStrength: number;
    noiseVelocity: [number, number, number];
    noiseContrast: number;
    noiseMin: number;
    noiseMax: number;
    noiseFadeStart: number;
    noiseFadeEnd: number;
    useTimeOfDay: boolean;
    skyEnabled: boolean;
    skyPower: number;
    skyFillStart: number;
    skyFillEnd: number;
    skyHorizonOffset: number;
    skyBottomStrength: number;
    fogGlowEnabled: boolean;
    fogGlowQualityLevel: FogGlowQuality;
    fogGlowIntensity: number;
    fogGlowRadius: number;
    fogGlowOctaves: number;
    fogGlowScatter: number;
    fogGlowThreshold: number;
    fogGlowKnee: number;
    fogGlowFadeStart: number;
    fogGlowFadeEnd: number;
    fogGlowTint: [number, number, number];
    fogGlowAntiFlicker: boolean;
}
export declare const HeightFogEffect: ComponentType<HeightFogEffect>;

export interface HierarchyOrder {
    order: number;
}
export declare const HierarchyOrder: ComponentType<HierarchyOrder>;

export interface HumanoidRetargeterComponent {
    map: AssetRef;
    readonly sourceClipIndex: number;
    readonly sourceSkeletonId: number;
    readonly clipTimeSeconds: number;
    speed: number;
    ikEnabled: boolean;
    ikBlendAlpha: number;
    loop: boolean;
    paused: boolean;
    lodOverride: HumanoidRetargetLOD;
    lodOverrideEnabled: boolean;
}
export declare const HumanoidRetargeterComponent: ComponentType<HumanoidRetargeterComponent> & NoAdd;

export interface LODGroup {
    bias: number;
}
export declare const LODGroup: ComponentType<LODGroup>;

export interface LensFlareSource {
    flare: AssetRef;
    /** For a directional light, project the flare from the light direction as an infinite sun source. Positional distance and source-angle falloff are ignored. */
    sunMode: boolean;
    /**
     * Brightness multiplier on top of the flare definition's global brightness.
     * Range: 0 to 10.
     */
    intensity: number;
    /**
     * Size multiplier on top of the flare definition's global scale.
     * Range: 0 to 10.
     */
    scale: number;
    /** Per-source tint multiplied into every flare element's color. */
    tint: Color;
    /** Fade the flare when scene geometry covers the source (depth probe). */
    occlude: boolean;
    /**
     * When above zero, replaces the definition's max distance for this source (distance fade, size falloff, and cull range).
     * Range: 0 to 1000.
     */
    maxDistanceOverride: number;
}
export declare const LensFlareSource: ComponentType<LensFlareSource>;

export interface Light {
    type: LightType;
    color: [number, number, number];
    intensity: number;
    range: number;
    innerAngle: number;
    outerAngle: number;
    areaShape: AreaLightShape;
    areaWidth: number;
    areaHeight: number;
    areaRadius: number;
    falloff: LightFalloff;
    decay: number;
    fogContribution: number;
    fogDensityBoost: number;
    fogAnisotropy: number;
    fogOriginFade: number;
    castsLight: boolean;
    castsShadows: boolean;
    cascadeCount: number;
    shadowResolutionTier: LightShadowTier;
    shadowAngularDiameter: number;
    useColorTemperature: boolean;
    colorTemperature: number;
    intensityUnit: LightUnit;
}
export declare const Light: ComponentType<Light>;

export interface LocalBounds {
    dynamicObject: boolean;
    castShadows: boolean;
}
export declare const LocalBounds: ComponentType<LocalBounds>;

export interface MarkupRegionMember {
    entity: Entity | null;
    mode: MarkupMemberMode;
}
export declare const MarkupRegionMember: ComponentType<MarkupRegionMember>;

export interface MeshRenderer {
    meshId: number;
    meshNameId: bigint;
    materialAssetGuid: AssetRef;
    modelAssetGuid: AssetRef;
    renderLayers: number;
    shadowCasting: ShadowCasting;
    receiveShadows: boolean;
    motionVectors: boolean;
}
export declare const MeshRenderer: ComponentType<MeshRenderer>;

export interface MorphTargetWeights {
    weightCount: number;
    weights: number[];
    appliedWeights: number[];
    version: number;
    appliedVersion: number;
    sourceMeshId: number;
    sourceMeshGpuHandleId: bigint;
    runtimeMeshGpuHandleId: bigint;
    sourceModelGuid: number[];
    runtimeModelGuid: number[];
}
export declare const MorphTargetWeights: ComponentType<MorphTargetWeights> & NoAdd;

export interface Name {
    value: string;
}
export declare const Name: ComponentType<Name>;

export interface NavigationAgent {
    /** The entity whose Navigation Surface the agent walks. Empty: the only surface in the scene. */
    surface: Entity | null;
    /**
     * Meters per second at full speed.
     * Minimum: 0.
     */
    speed: number;
    /**
     * Meters per second squared: how fast the agent reaches its speed and turns.
     * Minimum: 0.
     */
    acceleration: number;
    /**
     * Meters. The agent counts a corner of its path as reached this close to it.
     * Minimum: 0.
     */
    stoppingDistance: number;
    /**
     * Meters. The agent's size for avoidance and for the cells it holds on a grid.
     * Minimum: 0.01.
     */
    radius: number;
    /**
     * Meters. How far above and below the agent a path looks for the surface.
     * Minimum: 0.01.
     */
    height: number;
    /** Cut the corners of a grid path where the way between them is clear. */
    smoothPaths: boolean;
    /**
     * 0 to 3. Higher looks at more ways around other agents and costs more.
     * Range: 0 to 3.
     */
    avoidanceQuality: number;
    /**
     * How strongly the agent keeps apart from agents near it.
     * Minimum: 0.
     */
    separationWeight: number;
    /**
     * Seconds between solves of a path the agent walks, so it follows changes on the way. 0: solve once.
     * Minimum: 0.
     */
    replanInterval: number;
}
export declare const NavigationAgent: ComponentType<NavigationAgent>;

export interface NavigationSource {
    /** Whether the navigation bake reads this entity's mesh and the meshes of its children that set no policy of their own. Auto: when neither it nor a parent moves. Include: always, where it stands when the bake runs; a child that moves on its own needs its own Include. Exclude: never; colliders still bake. */
    policy: NavigationSourcePolicy;
}
export declare const NavigationSource: ComponentType<NavigationSource>;

export interface NavigationSurface {
    /** Mesh: a navigation mesh agents walk anywhere their size fits. Grid: one height and one walkable flag per cell, for per-cell costs, reservations and hex cells. */
    mode: NavigationSurfaceMode;
    /** Square or hex cells. */
    gridType: GridType;
    /**
     * Meters. The surface keeps this far from walls and drops gaps narrower than twice it.
     * Minimum: 0.01.
     */
    agentRadius: number;
    /**
     * Meters. Space under an overhang lower than this is not walkable.
     * Minimum: 0.01.
     */
    agentHeight: number;
    /**
     * Degrees. Ground steeper than this is not walkable.
     * Range: 0 to 89.
     */
    maxSlope: number;
    /**
     * Meters. The tallest step an agent climbs without a slope.
     * Minimum: 0.
     */
    stepHeight: number;
    /**
     * Meters. The surface's resolution: a mesh is voxelized at this size and cut into tiles of 64 cells; a grid has one cell of this size. Smaller follows the ground more closely and bakes longer.
     * Minimum: 0.05.
     */
    cellSize: number;
    /** Bake over the terrain's footprint, or over everything the bake reads when there is no terrain. Off: bake inside Center and Extent. */
    fitBounds: boolean;
    /** Meters from the entity's position to the middle of the baked box. */
    center: Vec3;
    /** Meters: half the baked box's size. */
    extent: Vec3;
    /** Grid only: the cell costs and blocked cells painted with the navigation grid brush (.navgrid). */
    authoredCells: AssetRef;
    /** Mesh only: the baked tiles saved with the scene (.navsurface). The surface loads them instead of baking when they match its settings and bounds. Written when the scene is saved. */
    bakedData: AssetRef;
}
export declare const NavigationSurface: ComponentType<NavigationSurface>;

export interface OceanAlbedoInput {
    priority: number;
    blend: OceanInputBlend;
    geometry: OceanInputGeometryType;
    extentX: number;
    extentZ: number;
    feather: number;
    color: Color;
    coverage: number;
}
export declare const OceanAlbedoInput: ComponentType<OceanAlbedoInput>;

export interface OceanAlbedoSource {
    /** Range: 0 to 500. */
    extentX: number;
    /** Range: 0 to 500. */
    extentZ: number;
    color: Color;
    /** Range: 0 to 1. */
    coverage: number;
}
export declare const OceanAlbedoSource: ComponentType<OceanAlbedoSource>;

export interface OceanAnimatedWaveInput {
    priority: number;
    blend: OceanInputBlend;
    geometry: OceanInputGeometryType;
    extentX: number;
    extentZ: number;
    feather: number;
    amplitude: number;
    wavelength: number;
    directionDegrees: number;
    chop: number;
}
export declare const OceanAnimatedWaveInput: ComponentType<OceanAnimatedWaveInput>;

export interface OceanBuoyancy {
    /** Range: 0 to 100. */
    buoyancyStrength: number;
    /** Range: 0.05 to 10. */
    probeRadius: number;
    /** Range: 0 to 5. */
    draft: number;
    /** Range: -5 to 5. */
    waterLineOffset: number;
    /** Range: 0 to 10. */
    linearDrag: number;
    /** Range: 0 to 10. */
    angularDrag: number;
}
export declare const OceanBuoyancy: ComponentType<OceanBuoyancy>;

export interface OceanClipInput {
    priority: number;
    blend: OceanInputBlend;
    geometry: OceanInputGeometryType;
    extentX: number;
    extentZ: number;
    feather: number;
    clipState: number;
}
export declare const OceanClipInput: ComponentType<OceanClipInput>;

export interface OceanClipSource {
    /** Range: 0 to 500. */
    extentX: number;
    /** Range: 0 to 500. */
    extentZ: number;
    /** Range: 0 to 1. */
    clipState: number;
    /** Range: 0 to 200. */
    feather: number;
}
export declare const OceanClipSource: ComponentType<OceanClipSource>;

export interface OceanDepthCacheSource {
    useWhenStale: boolean;
    path: string;
    cacheAsset: AssetRef;
    sourceRevision: number;
    bakedRevision: number;
    cacheRevision: number;
    bakeWidth: number;
    bakeHeight: number;
    sourceLayers: number;
    bakeOnlyMeshDepthContributors: boolean;
    bakeLoadMissingAssets: boolean;
    bakeIncludeDisabledRenderers: boolean;
    bakeIncludeSkinnedMeshes: boolean;
    bakeIncludeTerrainHeightfields: boolean;
    /** Range: -100000 to 100000. */
    bakeOriginX: number;
    /** Range: -100000 to 100000. */
    bakeOriginZ: number;
    /** Range: 1 to 100000. */
    bakeSizeX: number;
    /** Range: 1 to 100000. */
    bakeSizeZ: number;
    /** Range: -10000 to 10000. */
    bakeSeaLevel: number;
    /** Range: 1 to 100000. */
    bakeDeepWaterDepth: number;
    /** Range: 0 to 100000. */
    streamRadius: number;
    streamPriority: number;
}
export declare const OceanDepthCacheSource: ComponentType<OceanDepthCacheSource>;

export interface OceanDepthContributor {
    /** Range: 0 to 500. */
    extentX: number;
    /** Range: 0 to 500. */
    extentZ: number;
    /** Range: 0 to 100. */
    depth: number;
    /** Range: 0 to 50. */
    feather: number;
    /** Range: 0 to 1. */
    roundness: number;
}
export declare const OceanDepthContributor: ComponentType<OceanDepthContributor>;

export interface OceanDepthInput {
    priority: number;
    blend: OceanInputBlend;
    geometry: OceanInputGeometryType;
    extentX: number;
    extentZ: number;
    feather: number;
    depth: number;
    roundness: number;
}
export declare const OceanDepthInput: ComponentType<OceanDepthInput>;

export interface OceanDynamicWaveInput {
    priority: number;
    blend: OceanInputBlend;
    geometry: OceanInputGeometryType;
    extentX: number;
    extentZ: number;
    feather: number;
    amplitude: number;
}
export declare const OceanDynamicWaveInput: ComponentType<OceanDynamicWaveInput>;

export interface OceanFlowInput {
    priority: number;
    blend: OceanInputBlend;
    geometry: OceanInputGeometryType;
    extentX: number;
    extentZ: number;
    feather: number;
    flowX: number;
    flowZ: number;
}
export declare const OceanFlowInput: ComponentType<OceanFlowInput>;

export interface OceanFlowMapSource {
    /** Range: 0 to 500. */
    extentX: number;
    /** Range: 0 to 500. */
    extentZ: number;
    flowMap: AssetRef;
    /** Range: 0 to 50. */
    strength: number;
    /** Range: 0 to 200. */
    feather: number;
    /** Range: -20 to 20. */
    biasX: number;
    /** Range: -20 to 20. */
    biasZ: number;
}
export declare const OceanFlowMapSource: ComponentType<OceanFlowMapSource>;

export interface OceanFlowSource {
    /** Range: 0 to 500. */
    extentX: number;
    /** Range: 0 to 500. */
    extentZ: number;
    /** Range: -20 to 20. */
    flowX: number;
    /** Range: -20 to 20. */
    flowZ: number;
}
export declare const OceanFlowSource: ComponentType<OceanFlowSource>;

export interface OceanFoamInput {
    priority: number;
    blend: OceanInputBlend;
    geometry: OceanInputGeometryType;
    extentX: number;
    extentZ: number;
    feather: number;
    amount: number;
    texture: AssetRef;
    useVertexColor: boolean;
}
export declare const OceanFoamInput: ComponentType<OceanFoamInput>;

export interface OceanGerstnerShape {
    priority: number;
    extentX: number;
    extentZ: number;
    feather: number;
    waveCount: number;
    amplitude: number[];
    wavelength: number[];
    directionDegrees: number[];
    chop: number[];
}
export declare const OceanGerstnerShape: ComponentType<OceanGerstnerShape>;

export interface OceanHeightInput {
    priority: number;
    blend: OceanInputBlend;
    geometry: OceanInputGeometryType;
    extentX: number;
    extentZ: number;
    feather: number;
    height: number;
    absoluteHeight: boolean;
}
export declare const OceanHeightInput: ComponentType<OceanHeightInput>;

export interface OceanMeshDepthContributor {
    contributorLayers: number;
    /** Range: 0 to 50. */
    extentPadding: number;
    /** Range: -10 to 10. */
    depthBias: number;
    /** Range: 0 to 100. */
    minDepth: number;
    /** Range: 0 to 500. */
    maxDepth: number;
    /** Range: 0 to 50. */
    feather: number;
    /** Range: 0 to 1. */
    roundness: number;
}
export declare const OceanMeshDepthContributor: ComponentType<OceanMeshDepthContributor>;

export interface OceanPolygonWaterBody {
    pointCount: number;
    /** Range: -2000 to 2000. */
    pointX: number[];
    /** Range: -2000 to 2000. */
    pointZ: number[];
    confineSurface: boolean;
    /** Range: 0 to 200. */
    clipFeather: number;
    underwaterVolume: boolean;
    /** Range: 0 to 500. */
    underwaterDepth: number;
    flow: boolean;
    /** Range: -20 to 20. */
    flowX: number;
    /** Range: -20 to 20. */
    flowZ: number;
    waveOverride: boolean;
    /** Range: 0 to 2. */
    waveWeight: number;
    /** Range: 0 to 2. */
    waveChop: number;
    /** Range: 0 to 500. */
    waveFeather: number;
    useLocalSpectrum: boolean;
    localSpectrumAsset: AssetRef;
    localWaveCount: number;
    /** Range: 0 to 10. */
    localWaveAmplitude: number;
    /** Range: 0.1 to 200. */
    localWaveWavelength: number;
    /** Range: -360 to 360. */
    localWaveDirectionDegrees: number;
    /** Range: 0 to 10. */
    localWaveExtraAmplitude: number[];
    /** Range: 0.1 to 200. */
    localWaveExtraWavelength: number[];
    /** Range: -360 to 360. */
    localWaveExtraDirectionDegrees: number[];
    /** Ocean preset whose surface values (color, optics, foam, detail textures) apply inside this water body. Empty keeps the ocean's own surface. */
    materialOverride: AssetRef;
    /** Where water-body materials overlap, higher priorities apply over lower ones. */
    materialPriority: number;
}
export declare const OceanPolygonWaterBody: ComponentType<OceanPolygonWaterBody>;

export interface OceanPresetBinding {
    preset: AssetRef;
    liveLinked: boolean;
}
export declare const OceanPresetBinding: ComponentType<OceanPresetBinding>;

export interface OceanPresetOverride {
    fieldIdentifier: bigint;
}
export declare const OceanPresetOverride: ComponentType<OceanPresetOverride> & NoAdd;

export interface OceanRenderer {
    /** Ocean quality tier. 0 = Low, 1 = Medium, 2 = High. */
    qualityOverride: number;
    /** Number of camera-snapped ocean LOD cascade layers. */
    lodCount: number;
    /**
     * Texel resolution per axis for ocean simulation cascades.
     * Label: LOD Data Resolution
     */
    lodDataResolution: number;
    /**
     * World size of the finest ocean cascade. Smaller values concentrate detail near the camera.
     * Range: 1 to 256.
     */
    minScale: number;
    /**
     * Maximum world size of the coarsest ocean cascade.
     * Range: 1 to 4096.
     */
    maxScale: number;
    /** Multiplier for the camera-centered ocean grid density. */
    geometryUpSampleFactor: number;
    /** Divider for ocean grid density and triangle count. */
    geometryDownSampleFactor: number;
    /**
     * Scales wave dispersion gravity for FFT and dynamic waves.
     * Range: 0 to 10.
     */
    gravityMultiplier: number;
    /**
     * Multiplies ocean animation time. 0 freezes wave and simulation motion.
     * Range: 0 to 4.
     */
    timeScale: number;
    /**
     * Offsets ocean animation phase without changing speed.
     * Range: -100000 to 100000.
     */
    timeOffset: number;
    timeProvider: OceanTimeProviderMode;
    networkTimeOffset: number;
    networkTimeRate: number;
    timelineTime: number;
    timelinePlaybackRate: number;
    timelinePlaying: boolean;
    pausedTime: number;
    /** Uses Fixed Time as the absolute ocean time for deterministic preview or capture. */
    useFixedTime: boolean;
    /**
     * Absolute ocean time used when Use Fixed Time is enabled.
     * Range: -100000 to 100000.
     */
    fixedTime: number;
    /** Runtime budget for active Ocean Depth Cache Source components. 0 keeps all eligible caches. */
    maxActiveDepthCaches: number;
    /** Captures dynamic mesh geometry into the seabed-depth texture from a top-down pass. */
    rasterDepthCapture: boolean;
    /** Resolution of the dynamic raster seabed-depth capture. */
    rasterDepthResolution: number;
    /** The render layers the raster seabed-depth capture draws. */
    rasterDepthCaptureLayers: number;
    /**
     * World X size of the top-down raster seabed-depth capture.
     * Range: 1 to 10000.
     */
    rasterDepthCaptureSizeX: number;
    /**
     * World Z size of the top-down raster seabed-depth capture.
     * Range: 1 to 10000.
     */
    rasterDepthCaptureSizeZ: number;
    /**
     * Extra height above captured geometry for the raster depth camera.
     * Range: 0.01 to 1000.
     */
    rasterDepthCaptureTopPadding: number;
    /**
     * Fallback water depth used where raster capture finds no seabed.
     * Range: 1 to 100000.
     */
    rasterDepthCaptureDeepWaterDepth: number;
    /**
     * Global wind speed in meters per second for FFT and Gerstner waves.
     * Range: 0 to 40.
     */
    globalWindSpeed: number;
    /**
     * Global wind direction in degrees. 0 points along world +X.
     * Range: -180 to 180.
     */
    globalWindDirection: number;
    /**
     * Directional spread of global wind waves. Higher values make a more chaotic sea.
     * Range: 0 to 1.
     */
    globalWindTurbulence: number;
    /** Optional asset-backed global wave spectrum. */
    spectrumAsset: AssetRef;
    collisionProvider: number;
    fftCollisionAsset: AssetRef;
    maxCollisionQueryCount: number;
    animatedWavesCollisionSettings: AssetRef;
    dynamicWaveSettings: AssetRef;
    foamSettings: AssetRef;
    shadowSettings: AssetRef;
    /** Experimental path that combines FFT displacement cascades once per frame. */
    combineCascade: boolean;
}
export declare const OceanRenderer: ComponentType<OceanRenderer>;

export interface OceanSeabed {
    /** Range: 0 to 2000. */
    extentX: number;
    /** Range: 0 to 2000. */
    extentZ: number;
    /** Range: -100 to 10. */
    baseHeight: number;
    /** Range: -1 to 1. */
    slopeX: number;
    /** Range: -1 to 1. */
    slopeZ: number;
}
export declare const OceanSeabed: ComponentType<OceanSeabed>;

export interface OceanShadowInput {
    priority: number;
    blend: OceanInputBlend;
    geometry: OceanInputGeometryType;
    extentX: number;
    extentZ: number;
    feather: number;
    hardShadow: number;
    softShadow: number;
}
export declare const OceanShadowInput: ComponentType<OceanShadowInput>;

export interface OceanSplineInput {
    /** Range: 0.1 to 500. */
    width: number;
    /** Draw ocean water only inside this spline band. The coarsest clip level covers all authored water; nearer levels refine the shoreline. */
    confineSurface: boolean;
    /** Range: 0 to 200. */
    clipFeather: number;
    underwaterVolume: boolean;
    /** Range: 0 to 500. */
    underwaterDepth: number;
    flow: boolean;
    /** Range: -50 to 50. */
    flowSpeed: number;
    reverseFlow: boolean;
    clip: boolean;
    albedo: boolean;
    color: Color;
    /** Range: 0 to 1. */
    albedoCoverage: number;
    depth: boolean;
    /** Range: 0 to 100. */
    depthMeters: number;
    /** Range: 0 to 50. */
    depthFeather: number;
    /**
     * Longest ribbon segment in meters. Smaller follows tight curves more closely at the cost of more triangles.
     * Range: 0.1 to 100.
     */
    maxSegmentLength: number;
}
export declare const OceanSplineInput: ComponentType<OceanSplineInput>;

export interface OceanSurface {
    /** Base deep-water color used when depth fog fully hides the refracted scene. */
    deepColor: Color;
    /** Tint of whitecaps, shoreline foam, and intersection foam. */
    foamColor: Color;
    /**
     * Scales horizontal wave displacement. Higher values sharpen crests and wind chop.
     * Range: 0 to 2.
     */
    choppyScale: number;
    /**
     * Controls how strongly reflection concentrates near grazing viewing angles.
     * Range: 1 to 20.
     */
    fresnelPower: number;
    /**
     * Scales sky and planar reflection contribution on the water surface.
     * Range: 0 to 1.
     */
    reflectionStrength: number;
    /**
     * Overall intensity of the teal subsurface glow through wave crests.
     * Range: 0 to 4.
     */
    subsurfaceStrength: number;
    /**
     * Coverage multiplier for wave-generated whitecaps.
     * Range: 0 to 5.
     */
    foamAmount: number;
    /**
     * How quickly simulated foam decays over time. Lower values leave longer trails.
     * Range: 0 to 4.
     */
    foamFadeRate: number;
    /**
     * Amount of foam deposited by breaking or pinching wave crests.
     * Range: 0 to 5.
     */
    waveFoamStrength: number;
    /**
     * Breaking threshold for wave foam. Higher values create foam more readily.
     * Range: 0 to 2.
     */
    waveFoamCoverage: number;
    /**
     * World tiling scale for the bubble and foam texture pattern.
     * Range: 0.01 to 50.
     */
    foamScale: number;
    /**
     * Softness of foam edges and threshold transitions.
     * Range: 0.001 to 1.
     */
    foamFeather: number;
    spray: boolean;
    /**
     * Most spray droplet clusters alive at once in each view.
     * Range: 256 to 262144.
     */
    sprayMaxParticles: number;
    /**
     * Minimum wind speed in meters per second before open-water crest spray begins.
     * Range: 0 to 40.
     */
    sprayWindThreshold: number;
    /**
     * Crest points tested for spray each second, per square meter of the spawn disk.
     * Range: 0 to 1000.
     */
    spraySpawnRate: number;
    /**
     * Radius in meters around the camera within which spray can be born.
     * Range: 1 to 500.
     */
    spraySpawnRadius: number;
    /**
     * Minimum sampled crest strength required to emit wind spray. Higher values restrict spray to stronger crests.
     * Range: 0 to 1.
     */
    sprayEmissionThreshold: number;
    /** Range: 0.05 to 5. */
    sprayLifetime: number;
    /** Range: 0.01 to 5. */
    sprayStartSize: number;
    /** Range: 0.01 to 8. */
    sprayEndSize: number;
    /** Range: 0 to 10. */
    sprayUpVelocity: number;
    /** Range: 0 to 2. */
    sprayWindVelocityScale: number;
    /** Range: 0 to 1. */
    sprayOpacity: number;
    sprayRenderLayers: number;
    sprayGeometryIntersections: boolean;
    /** Range: 0 to 100. */
    sprayIntersectionSpawnRate: number;
    /** Range: 0.05 to 10. */
    sprayIntersectionBand: number;
    /** Optional texture sampled for foam bubbles. Empty uses procedural foam. */
    foamTexture: AssetRef;
    /** Debug overlay mode for inspecting foam, shoreline, and depth data. */
    foamDebugMode: number;
    /**
     * Seabed depth range where shoreline foam appears and fades out.
     * Range: 0.01 to 5.
     */
    shorelineFoamMaxDepth: number;
    /**
     * Intensity multiplier for foam along shallow shorelines.
     * Range: 0 to 5.
     */
    shorelineFoamStrength: number;
    /**
     * Strength of high-frequency normal detail on the water surface.
     * Range: 0 to 2.
     */
    normalsStrength: number;
    /**
     * World tiling scale of high-frequency water normal detail.
     * Range: 0.01 to 200.
     */
    normalsScale: number;
    /** Main diffuse and scatter color of lit water. */
    diffuse: Color;
    /** Diffuse color used when viewing across the water at grazing angles. */
    diffuseGrazing: Color;
    /** Diffuse tint for water faces with less direct sun. */
    diffuseShadow: Color;
    /** Shallow-water tint blended in where the seabed is near the surface. */
    subSurfaceShallowCol: Color;
    /**
     * Depth at which shallow-water tint fully fades to deep water.
     * Range: 0.01 to 50.
     */
    subSurfaceDepthMax: number;
    /**
     * Exponent shaping the shallow-to-deep color fade.
     * Range: 0.01 to 10.
     */
    subSurfaceDepthPower: number;
    /** Ambient subsurface scatter color pushed through the water. */
    subSurfaceColour: Color;
    /**
     * Baseline subsurface scatter present across the surface.
     * Range: 0 to 4.
     */
    subSurfaceBase: number;
    /**
     * Forward-scatter lobe intensity toward the sun.
     * Range: 0 to 10.
     */
    subSurfaceSun: number;
    /**
     * Falloff of the sun-facing subsurface scatter lobe.
     * Range: 1 to 16.
     */
    subSurfaceSunFallOff: number;
    /**
     * Scales the reflection of the sky and surroundings. 1 is the full reflection; lower values let the water body show through. The highlights of lights are not scaled.
     * Range: 0 to 1.
     */
    specular: number;
    /**
     * Roughness of the water surface. Higher blurs its highlights and reflections.
     * Range: 0 to 1.
     */
    roughness: number;
    /**
     * Index of refraction of air. With the water's index of refraction, it sets the Fresnel reflection and the refraction.
     * Range: 1 to 2.
     */
    iorAir: number;
    /**
     * Index of refraction for water, used for Fresnel and underwater bending.
     * Range: 1 to 2.
     */
    iorWater: number;
    /** Draws the objects a planar capture sees over the environment reflection. Where the capture drew nothing, the water shows the environment reflection. */
    planarReflections: boolean;
    /**
     * How strongly the planar capture covers the reflected environment; above 1 it brightens the captured objects.
     * Range: 0 to 3.
     */
    planarReflectionStrength: number;
    /** Resolution scale of the planar reflection capture relative to the main view. */
    planarReflectionScale: number;
    /** Color of the procedural reflected sky at the zenith. */
    skyBase: Color;
    /** Reflected sky tint in the sun direction. */
    skyTowardsSun: Color;
    /** Reflected sky tint away from the sun. */
    skyAwayFromSun: Color;
    /**
     * Sharpness of the reflected sky blend around the sun direction.
     * Range: 0 to 0.99.
     */
    skyDirectionality: number;
    /** Per-channel water extinction for refracted and underwater geometry. Higher values fog faster. */
    depthFogDensity: Color;
    /** Distance curve used by surface refraction fog and the underwater pass. */
    depthFogFalloff: OceanDepthFogFalloff;
    /**
     * Meters of clear water before depth fog starts to build.
     * Range: 0 to 250.
     */
    depthFogStartDistance: number;
    /**
     * Distance where Linear/Smooth depth fog reaches its authored range. 0 uses an automatic range from density.
     * Range: 0 to 1000.
     */
    depthFogEndDistance: number;
    /**
     * Curve shaping for depth fog distance. 1 is neutral; higher values delay fog near the camera.
     * Range: 0.1 to 8.
     */
    depthFogFalloffPower: number;
    /**
     * Strength of screen-space refraction distortion from surface normals.
     * Range: 0 to 2.
     */
    refractionStrength: number;
    /**
     * Reduces sky and planar reflection only where shallow refraction is clear, keeping seabed caustics visible. 0 leaves reflection unchanged.
     * Range: 0 to 1.
     */
    shallowReflectionSuppression: number;
    /**
     * Meters of view path through the water over which the depth fog ramps up to full strength, keeping the seabed readable in the shallows. Shorter brings the deep color in sooner.
     * Range: 0.01 to 50.
     */
    shallowClarityDistance: number;
    /**
     * The fraction of depth fog at the surface (1 = no window), ramping up to full over the clarity distance.
     * Range: 0 to 1.
     */
    shallowClarityFloor: number;
    /**
     * World tiling size of the caustics pattern. Smaller values make tighter caustics.
     * Range: 0 to 25.
     */
    causticsScale: number;
    /**
     * Neutral average subtracted from caustics so they can darken as well as brighten.
     * Range: 0 to 1.
     */
    causticsAverage: number;
    /**
     * Contrast and intensity of the caustics pattern.
     * Range: 0 to 10.
     */
    causticsStrength: number;
    /**
     * Water depth where caustics appear sharpest.
     * Range: 0 to 250.
     */
    causticsFocalDepth: number;
    /**
     * Depth range over which caustics stay sharp around the focal depth.
     * Range: 0.01 to 1000.
     */
    causticsDepthOfField: number;
    /**
     * Amount of ripple distortion applied to procedural caustics UVs.
     * Range: 0 to 0.25.
     */
    causticsDistortionStrength: number;
    /**
     * World tiling scale of the caustics distortion sample.
     * Range: 0.01 to 50.
     */
    causticsDistortionScale: number;
    /** Optional user caustics texture. Empty uses the procedural caustics web. */
    causticsTexture: AssetRef;
    /** Enables the fullscreen underwater pass when the camera is below the water surface. */
    underwater: boolean;
    /**
     * Width of the bright waterline band when the camera crosses the surface.
     * Range: 0 to 1.
     */
    meniscusWidth: number;
    /** Range: 0.005 to 0.5. */
    waterlineFadeDistance: number;
    /** Enables sun light scattering through the underwater view. */
    underwaterInscattering: boolean;
    /** Intensity of underwater in-scattered light. */
    inscatterStrength: number;
    /** Anisotropy of underwater scattering. Higher values push light forward toward the sun direction. */
    inscatterPhaseG: number;
    /** Enables underwater lens and waterline distortion. */
    underwaterDistortion: boolean;
    /** Strength of the underwater screen distortion. */
    distortionStrength: number;
    /** Enables procedural underwater god rays. */
    underwaterGodRays: boolean;
    /** Brightness of underwater god rays. */
    godRayStrength: number;
    /** Angular density of the underwater light shafts. */
    godRayDensity: number;
    /** Projects caustics onto submerged scene geometry in the underwater pass. */
    causticsOnGeometry: boolean;
    /**
     * Brightness of the caustics the water reflects onto geometry above it. 0 turns them off (the default).
     * Range: 0 to 4.
     */
    reflectedCausticsStrength: number;
    /** Range: 0 to 25. */
    reflectedCausticsHeight: number;
    /** Range: 0.01 to 8. */
    reflectedCausticsFalloff: number;
    /** Enables the ocean flow cascade to advect foam and surface detail. */
    flow: boolean;
    /** Enables interactive dynamic waves from Ocean Wave Impulse components and water interactions. */
    dynamicWaves: boolean;
    /** Enables clip sources that cut holes or restore regions in the ocean surface. */
    clipSurface: boolean;
    /**
     * Default clip value outside clip sources. 0 keeps water solid; 1 clips it away.
     * Range: 0 to 1.
     */
    defaultClippingState: number;
    /** Enables albedo sources that paint color onto the water surface. */
    albedo: boolean;
    /**
     * Screen-space depth range used to form foam where water meets opaque geometry.
     * Range: 0.01 to 10.
     */
    intersectionFoamDepth: number;
    /**
     * Intensity multiplier for the foam where water meets geometry.
     * Range: 0 to 5.
     */
    intersectionFoamStrength: number;
    /**
     * Relief of textured foam. Zero keeps foam flat. Only used with a foam texture.
     * Range: 0 to 2.
     */
    foamNormalStrength: number;
    /**
     * Amount of submerged bubbles drawn under textured foam. Only used with a foam texture.
     * Range: 0 to 1.
     */
    foamBubbleCoverage: number;
    /**
     * Apparent depth of the submerged bubble layer as the view angle changes.
     * Range: 0 to 0.5.
     */
    foamBubbleParallax: number;
    /**
     * Surface roughness where textured foam covers the water.
     * Range: 0.04 to 1.
     */
    foamRoughness: number;
    /** Optional detail normal map for small ripples. Assigning it turns on the detailed surface shading. Empty keeps the analytic ripples. */
    normalTexture: AssetRef;
}
export declare const OceanSurface: ComponentType<OceanSurface>;

export interface OceanUnderwaterExclusionVolume {
    /** Range: 0 to 500. */
    extentX: number;
    /** Range: 0 to 500. */
    extentY: number;
    /** Range: 0 to 500. */
    extentZ: number;
}
export declare const OceanUnderwaterExclusionVolume: ComponentType<OceanUnderwaterExclusionVolume>;

export interface OceanUnderwaterPortalOccluder {
    /** Range: 0 to 500. */
    extentX: number;
    /** Range: 0 to 500. */
    extentY: number;
    /** Range: 0 to 500. */
    extentZ: number;
}
export declare const OceanUnderwaterPortalOccluder: ComponentType<OceanUnderwaterPortalOccluder>;

export interface OceanUnderwaterVolume {
    /** Range: 0 to 500. */
    extentX: number;
    /** Range: 0 to 500. */
    extentY: number;
    /** Range: 0 to 500. */
    extentZ: number;
}
export declare const OceanUnderwaterVolume: ComponentType<OceanUnderwaterVolume>;

export interface OceanWaterBody {
    /**
     * Half the body's width in meters along world X, measured from the entity origin; the water spans twice this.
     * Range: 0 to 2000.
     */
    extentX: number;
    /**
     * Half the body's length in meters along world Z, measured from the entity origin; the water spans twice this.
     * Range: 0 to 2000.
     */
    extentZ: number;
    /** Draw ocean water only inside this body. The coarsest clip level covers all authored water; nearer levels refine the shoreline. */
    confineSurface: boolean;
    /** Range: 0 to 200. */
    clipFeather: number;
    underwaterVolume: boolean;
    /** Range: 0 to 500. */
    underwaterDepth: number;
    flow: boolean;
    /** Range: -20 to 20. */
    flowX: number;
    /** Range: -20 to 20. */
    flowZ: number;
    waveOverride: boolean;
    /** Range: 0 to 2. */
    waveWeight: number;
    /** Range: 0 to 2. */
    waveChop: number;
    /** Range: 0 to 500. */
    waveFeather: number;
    useLocalSpectrum: boolean;
    localSpectrumAsset: AssetRef;
    localWaveCount: number;
    /** Range: 0 to 10. */
    localWaveAmplitude: number;
    /** Range: 0.1 to 200. */
    localWaveWavelength: number;
    /** Range: -360 to 360. */
    localWaveDirectionDegrees: number;
    /** Range: 0 to 10. */
    localWaveExtraAmplitude: number[];
    /** Range: 0.1 to 200. */
    localWaveExtraWavelength: number[];
    /** Range: -360 to 360. */
    localWaveExtraDirectionDegrees: number[];
    /** Ocean preset whose surface values (color, optics, foam, detail textures) apply inside this water body. Empty keeps the ocean's own surface. */
    materialOverride: AssetRef;
    /** Where water-body materials overlap, higher priorities apply over lower ones. */
    materialPriority: number;
}
export declare const OceanWaterBody: ComponentType<OceanWaterBody>;

export interface OceanWaterInteraction {
    /** Range: 0.1 to 50. */
    radius: number;
    /** Range: 0 to 5. */
    strength: number;
    /** Range: 0 to 50. */
    minSpeed: number;
    /** Range: 0 to 5. */
    verticalStrength: number;
    /** Range: 0 to 50. */
    minVerticalSpeed: number;
    /** Range: 0 to 10. */
    maxAmplitude: number;
    nestedSphereCount: number;
    nestedRadiusScale: number;
    nestedWeight: number;
    flowRelativeVelocity: boolean;
    velocityLead: number;
    waveMotionCompensation: number;
    speedClamp: number;
    teleportDistance: number;
    largeWaveBoost: number;
    debugSubsteps: number;
}
export declare const OceanWaterInteraction: ComponentType<OceanWaterInteraction>;

export interface OceanWaveImpulse {
    /** Range: 0.1 to 50. */
    radius: number;
    /** Range: -5 to 5. */
    amplitude: number;
}
export declare const OceanWaveImpulse: ComponentType<OceanWaveImpulse>;

export interface OceanWaveMaskTextureSource {
    /** Range: 0 to 500. */
    extentX: number;
    /** Range: 0 to 500. */
    extentZ: number;
    waveMaskMap: AssetRef;
    /** Range: 0 to 4. */
    weightScale: number;
    /** Range: 0 to 4. */
    chopScale: number;
    /** Range: -2 to 2. */
    weightBias: number;
    /** Range: -2 to 2. */
    chopBias: number;
    /** Range: 0 to 1. */
    coverage: number;
    /** Range: 0 to 200. */
    feather: number;
}
export declare const OceanWaveMaskTextureSource: ComponentType<OceanWaveMaskTextureSource>;

export interface OceanWaveSpectrum {
    /** Range: 0 to 40. */
    windSpeed: number;
    /** Range: -180 to 180. */
    windDirectionDegrees: number;
    /** Range: 0 to 1. */
    turbulence: number;
    /** Range: 0 to 10. */
    multiplier: number;
    /** Range: 0 to 2. */
    chop: number;
    /** Range: 0 to 25. */
    gravityScale: number;
    /** Range: 0 to 128. */
    loopPeriod: number;
    /** Range: 0 to 2. */
    spectrumPower: number[];
    /** Range: 0 to 4. */
    chopScales: number[];
    /** Range: 0 to 4. */
    gravityScales: number[];
    octaveDisabled: boolean[];
    /** Range: 0 to 1. */
    directionalSpread: number;
    /** Range: 0 to 4. */
    amplitudeScale: number;
    /** Range: 1 to 1000. */
    maxWavelength: number;
    /** Range: 0 to 1. */
    weight: number;
    /** Range: 0 to 50. */
    maxHorizontalDisplacement: number;
    /** Range: 0 to 30. */
    maxVerticalDisplacement: number;
    /** Range: 0 to 1. */
    respectShallowWaterAttenuation: number;
}
export declare const OceanWaveSpectrum: ComponentType<OceanWaveSpectrum>;

export interface Parent {
    entity: Entity | null;
}
export declare const Parent: ComponentType<Parent>;

export interface ParticleCollisionEvent {
    emitter: Entity | null;
    particleId: number;
    killedParticle: boolean;
    position: Vec3;
    normal: Vec3;
    velocity: Vec3;
    speed: number;
}
export declare const ParticleCollisionEvent: ComponentType<ParticleCollisionEvent> & NoAdd;

export interface ParticleCollisionEventsBuffer {
    readonly count: number;
}
export declare const ParticleCollisionEventsBuffer: ComponentType<ParticleCollisionEventsBuffer> & NoAdd;

export interface ParticleEmitter3D {
    /** The processor stack the particles run; none runs the default stack */
    stack: AssetRef;
    /** Spawn new particles. Particles already alive keep simulating when off */
    emitting: boolean;
    /**
     * Most live particles
     * Range: 0 to 4096.
     */
    amount: number;
    /**
     * Seconds simulated before the effect is first shown
     * Range: 0 to 60.
     */
    prewarmSeconds: number;
    /**
     * Multiplies the simulation clock
     * Minimum: 0.
     */
    simulationSpeed: number;
    /** 2D keeps particles on the emitter's XY plane */
    dimension: ParticleEmitterDimension;
    /** Particles move with the emitter instead of staying where they were born */
    localSpace: boolean;
    /**
     * Simulation steps per second; 0 steps once per frame, in bounded steps
     * Range: 0 to 240.
     */
    ticksPerSecond: number;
    /** Draw particles between simulation steps. Off shows each step as it lands */
    interpolate: boolean;
    /** Random sequence of the effect; 0 derives one from the entity */
    seed: number;
}
export declare const ParticleEmitter3D: ComponentType<ParticleEmitter3D>;

export interface ParticlePlayback {
    paused: boolean;
    restart: number;
    singleStep: number;
    seek: number;
    seekTime: number;
    pendingEvents: bigint[];
    pendingEventCount: number;
    readonly liveCount: number;
    readonly simulatedSteps: number;
    readonly simulatedTime: number;
    readonly droppedTime: number;
    readonly simulationMs: number;
}
export declare const ParticlePlayback: ComponentType<ParticlePlayback> & NoAdd;

export interface ParticleRenderer {
    /** Material asset the particles draw with; its properties and textures apply, the particle shaders stay */
    material: AssetRef;
    /** RGBA atlas, cells counted left to right, then top to bottom */
    texture: AssetRef;
    /**
     * Horizontal cells of the texture sheet
     * Range: 1 to 256.
     */
    columns: number;
    /**
     * Vertical cells of the texture sheet
     * Range: 1 to 256.
     */
    rows: number;
    /** Cells the sheet plays; 0 plays every cell */
    frameCount: number;
    /**
     * Cells per second; 0 plays the sheet once over each particle's life
     * Minimum: 0.
     */
    frameRate: number;
    /**
     * First cell, fractional when blending
     * Minimum: 0.
     */
    startFrame: number;
    /** Loop the sheet when it plays at a frame rate */
    loop: boolean;
    /** Crossfade between cells; off shows each cell whole, for hand-drawn frames */
    blendFrames: boolean;
    /** Unlit, lit by the scene's lights, or lit through six baked response maps */
    lighting: ParticleLightingMode;
    /** First six-way response map; import it as linear data */
    sixWayMapA: AssetRef;
    /** Second six-way response map; import it as linear data */
    sixWayMapB: AssetRef;
    /** How the two response maps pack the six directions */
    sixWayLayout: ParticleSixWayLayout;
    /**
     * Power on the directional response; 1 keeps the maps as baked
     * Minimum: 0.
     */
    sixWayContrast: number;
    /** Optional RGB emission atlas, played with the texture sheet */
    emissionTexture: AssetRef;
    /** Color of the particles' own light */
    emissionColor: Color;
    /**
     * Emission multiplier, 0 emits nothing. Unlit: 1 adds the display's white at any exposure. Lit: scene light, 1 is 203 nits
     * Minimum: 0.
     */
    emissionIntensity: number;
    /** How each particle's quad or mesh faces; facing the camera's position keeps a particle close to a wide-angle camera from spreading across the view */
    billboard: ParticleBillboard;
    /** Particles take the emitter's scale on top of their own size */
    inheritScale: boolean;
    /**
     * Extra length along the motion per unit of speed
     * Minimum: 0.
     */
    velocityStretch: number;
    /** The order particles draw in; View Depth sorts each particle by its distance from the camera */
    drawOrder: ParticleDrawOrder;
    /**
     * Meshes each particle draws, first submesh of each; none draws a sprite
     * Label: Mesh
     */
    meshes: AssetRef[];
    /** The render layers the particles are on */
    renderLayers: number;
    /**
     * Distance from the camera in meters at which particles begin to thin out
     * Minimum: 0.
     */
    thinningStart: number;
    /**
     * Distance from the camera in meters at which every particle is hidden; 0 turns thinning off
     * Minimum: 0.
     */
    thinningEnd: number;
    /** Draw only the trails, not the particles that lay them */
    trailOnly: boolean;
    /** Trails take the particle's color instead of white */
    trailInheritColor: boolean;
    /** Trail width follows the particle's size */
    trailSizeAffectsWidth: boolean;
    /** Fade toward both ends of the trail instead of over its age */
    trailFadeOverLength: boolean;
    /**
     * Smallest width multiplier, picked once per trail
     * Minimum: 0.
     */
    trailWidthMin: number;
    /**
     * Largest width multiplier, picked once per trail
     * Minimum: 0.
     */
    trailWidthMax: number;
    /**
     * Opacity at the most opaque point of the trail
     * Range: 0 to 1.
     */
    trailAlphaPeak: number;
    /** Repeat the texture by distance travelled instead of stretching it over the trail */
    trailTextureTile: boolean;
    /**
     * Texture repeats along the trail
     * Minimum: 0.
     */
    trailTextureScaleU: number;
    /**
     * Texture repeats across the trail
     * Minimum: 0.
     */
    trailTextureScaleV: number;
}
export declare const ParticleRenderer: ComponentType<ParticleRenderer>;

export interface ParticleSubEmitter {
    /** The emitter a spawn rule naming this slot spawns its particles in */
    emitter: Entity | null;
}
export declare const ParticleSubEmitter: ComponentType<ParticleSubEmitter> & NoAdd;

export interface ParticleWorldSettings {
    /**
     * Most live particles every emitter in the world together simulates
     * Range: 0 to 65536.
     */
    maxParticles: number;
}
export declare const ParticleWorldSettings: ComponentType<ParticleWorldSettings>;

export interface PostProcessVolume {
    weight: number;
    priority: number;
    volumeLayers: number;
    isGlobal: boolean;
    shape: PostProcessVolumeShape;
    blendDistance: number;
    look: Look;
    nightTintStrength: number;
    nightTintColor: Color;
}
export declare const PostProcessVolume: ComponentType<PostProcessVolume>;

export interface ReflectionProbe {
    /** Fade width near the influence edge. Visible when the camera is near the probe boundary. */
    blendDistance: number;
    /** Tie-breaker when more than one probe influences the camera. */
    priority: number;
    /** Use the transform-scaled local box for probe selection and parallax-corrected specular reflections. When disabled, the transform range is treated as an ellipsoid. */
    boxProjection: boolean;
    /** Offset of the capture and projection origin along the probe's local X axis. */
    originOffsetX: number;
    /** Offset of the capture and projection origin along the probe's local Y axis. */
    originOffsetY: number;
    /** Offset of the capture and projection origin along the probe's local Z axis. */
    originOffsetZ: number;
    /** Runtime IBL multiplier. Updates immediately without rebaking the cubemap. */
    intensity: number;
    /** Exposure applied when baking the probe capture. */
    exposureEV: number;
    /** Yaw rotation applied to sky/HDRI probe lighting during bake. */
    rotationDegrees: number;
    /** Darkens lighting sampled from below the horizon. 0 keeps it bright; 1 makes it black. */
    iblLowerHemisphereDarkness: number;
    captureEnvironment: boolean;
    /** Cubemap face resolution for the scene capture. Higher values sharpen mirror-like reflections but make probe bakes more expensive. */
    captureResolution: number;
    /** When the probe re-bakes. Once: only when the probe's own settings, the sky or the geometry in its world are added or removed. Realtime (on change): also whenever its world changes: lights, the sky, moved or edited renderables, material edits, and animated or depth-writing content such as skinned characters, terrain, an animated ocean or grass. Shader-time material animation, playing video textures and particles do not re-bake it; set the interval to 0 to capture them every frame. */
    updateMode: ReflectionProbeUpdateMode;
    /**
     * Realtime (on change): the fastest the probe may re-bake while the world changes, in seconds; 0 = every frame.
     * Minimum: 0.
     */
    realtimeUpdateInterval: number;
    /** Far clip distance for scene capture. 0 uses the probe volume. */
    maxDistance: number;
    /** The render layers the probe's capture draws. */
    capturedLayers: number;
}
export declare const ReflectionProbe: ComponentType<ReflectionProbe>;

export interface SceneViewHidden {
    active: boolean;
}
export declare const SceneViewHidden: ComponentType<SceneViewHidden> & NoAdd;

export interface SceneViewHiddenInHierarchy {
    active: boolean;
}
export declare const SceneViewHiddenInHierarchy: ComponentType<SceneViewHiddenInHierarchy> & NoAdd;

export interface ScreenSpaceReflectionsEffect {
    enabled: boolean;
    intensity: number;
    maxDistance: number;
    thickness: number;
    edgeFade: number;
    maxSteps: number;
    sampleQuality: SssrSampleQuality;
    multiBounce: boolean;
}
export declare const ScreenSpaceReflectionsEffect: ComponentType<ScreenSpaceReflectionsEffect>;

export interface ShadowSettingsEffect {
    enabled: boolean;
    mode: DirectionalShadowMode;
    rayTracedQuality: RayTracedShadowQuality;
    filter: DirectionalShadowFilter;
    maxShadowDistance: number;
    distanceFadeFraction: number;
    splitLambda: number;
    depthBias: number;
    normalBias: number;
    screenSpaceShadows: boolean;
    screenSpaceShadowThickness: number;
}
export declare const ShadowSettingsEffect: ComponentType<ShadowSettingsEffect>;

export interface SkeletonRef {
    sourceModelGuid: AssetRef;
    ownerMode: SkeletonInstanceOwner;
    instanceOwner: Entity | null;
}
export declare const SkeletonRef: ComponentType<SkeletonRef>;

export interface SkinnedMeshRenderer {
    meshId: number;
    castShadows: boolean;
    receiveShadows: boolean;
}
export declare const SkinnedMeshRenderer: ComponentType<SkinnedMeshRenderer>;

export interface SkyEnvironment {
    mode: SkyMode;
    gradientSkyTopColor: Color;
    gradientSkyHorizonColor: Color;
    gradientSkyBottomColor: Color;
    gradientSkyIntensity: number;
    timeOfDayHours: number;
    latitude: number;
    dayOfYear: number;
    northHeading: number;
    sunPath: SkySunPathKind;
    customAxisHeading: number;
    customAxisAltitude: number;
    customNoonHeight: number;
    animateTimeOfDay: boolean;
    timeOfDayCycleSeconds: number;
    skyExposureTrim: number;
    iblIntensity: number;
    iblLowerHemisphereDarkness: number;
    ambientTintSky: Color;
    ambientTintEquator: Color;
    ambientTintGround: Color;
    groundBrightnessShapeMode: SkyScalarCurveShapeMode;
    belowHorizonMode: SkyBelowHorizonMode;
    belowHorizonBlendSharpnessShapeMode: SkyScalarCurveShapeMode;
    belowHorizonDarknessShapeMode: SkyScalarCurveShapeMode;
    groundHazeStrength: number;
    groundHorizonCosWidthShapeMode: SkyScalarCurveShapeMode;
    groundHorizonNightCosWidthShapeMode: SkyScalarCurveShapeMode;
    sunDirOverride: [number, number, number];
    autoSunMoon: boolean;
    sunLight: Entity | null;
    timeOfDayDrivesSunLight: boolean;
    driveSunColor: boolean;
    sunIlluminanceSource: SkySunIlluminanceSource;
    moonlightIlluminance: number;
    showSun: boolean;
    showMoon: boolean;
    sunSize: number;
    sunSize2D: number;
    skyPan2D: number;
    moonArcPosition: number;
    autoMoonArc: boolean;
    moonCycleDays: number;
    moonSize: number;
    moonSize2D: number;
    moonExposureEV: number;
    fallingStarsEnabled: boolean;
    fallingStarIntervalSeconds: number;
    starLimitingMagnitude: number;
    starTwinkleAmount: number;
    starHighlightCompression: number;
    starGlow: number;
    starTwinkleRate: number;
    starObserver: StarObserverKind;
    starCoreScale: number;
    starSpikes: number;
    starSpikeLength: number;
    starShape: StarShapeKind;
}
export declare const SkyEnvironment: ComponentType<SkyEnvironment>;

export interface SkyScalarCubicBezier {
    control1X: number;
    control1Y: number;
    control2X: number;
    control2Y: number;
    anchorStartY: number;
    anchorEndY: number;
}
export declare const SkyScalarCubicBezier: ComponentType<SkyScalarCubicBezier>;

export interface SkyScalarDayKeys {
    midnight: number;
    dawn: number;
    midday: number;
    sunset: number;
}
export declare const SkyScalarDayKeys: ComponentType<SkyScalarDayKeys> & NoAdd;

export interface SkyVec3DayKeys {
    midnight: [number, number, number];
    dawn: [number, number, number];
    midday: [number, number, number];
    sunset: [number, number, number];
}
export declare const SkyVec3DayKeys: ComponentType<SkyVec3DayKeys> & NoAdd;

export interface Skybox {
    hdriIntensity: number;
    rotationDegrees: number;
    iblIntensity: number;
    iblLowerHemisphereDarkness: number;
    resolution: string;
    sourceSlug: string;
    hdriAssetGuid: string;
    hdriPath: string;
}
export declare const Skybox: ComponentType<Skybox>;

export interface SplineComponent {
    defaultRadius: number;
}
export declare const SplineComponent: ComponentType<SplineComponent>;

export interface SplineExtrude {
    /** The shape of the cross-section. Bevel is a flat strip whose edges drop, for a path or a stream. Crown is a road that is higher at the center, with a shoulder at each side. */
    profile: SplineExtrudeProfile;
    /** The width of the cross-section in meters, before the spline's width channel scales it. */
    width: number;
    /** How far the outer edge drops below the surface, in meters. A tapered end sinks by the same distance. With Fit To Banks, how far the edge of the water sinks into the bank. */
    edgeDrop: number;
    /** How far in from the edge the surface stays flat, in meters. */
    edgeInset: number;
    /** How much higher the center line is than the edges, in meters. */
    crownRise: number;
    /** The width of the shoulder at each side of the road, in meters. */
    shoulderWidth: number;
    /** How far each shoulder drops below the edge of the road, in meters. */
    shoulderDrop: number;
    /** What the spline's width channel changes. Lateral Only makes the cross-section wider and keeps its height. Uniform scales its width and height. None ignores the width channel. */
    widthScale: SplineExtrudeWidthScale;
    /** Channel sweeps the cross-section along the spline. Fit To Banks fills the area that the ground holds at the height of the spline, for water such as a river or a lake. */
    widthMode: SplineExtrudeWidthMode;
    /**
     * How far from the spline the fill looks for banks, in meters. Increase it when the build reports banks it cannot see.
     * Label: Search Reach
     */
    maxHalfWidth: number;
    /** The lowest world height of the filled surface, in meters. Set it where a river meets a sea or a lake of known height, so that the two surfaces join. None means that the surface has no floor. */
    floorHeight: number;
    /**
     * The length in meters over which each open end narrows to a point and sinks by Edge Drop. 0 keeps the ends square.
     * Label: End Taper
     */
    endTaperMetres: number;
    /** How the extrude meets the surface under the spline. None keeps the heights of the spline. Height puts the extrude on the surface. Height And Slope also tilts it with the surface. */
    conformMode: SplinePlacementConform;
    /** What the conform ray may land on. Scene takes the nearest surface of any kind, so a ribbon passing under a tree or a bridge is swept over its roof; TerrainOnly makes scenery transparent so the ribbon follows the ground beneath it. Under TerrainOnly the drawn drape line can still ride scene props while the generated geometry follows the terrain under them; the line does not read this setting yet. */
    conformTarget: SplineConformTarget;
    /** Moves the extrude to the right of the direction of travel, in meters. A negative value moves it to the left. */
    lateralOffset: number;
    /** Raises the extrude above the surface it follows, in meters. A water surface needs a small lift to sit in its bed without flicker. */
    verticalOffset: number;
    /**
     * How many times the texture repeats per meter along the extrude.
     * Label: Tiles Per Meter U
     */
    tilesPerMetreU: number;
    /**
     * How many times the texture repeats per meter across the extrude.
     * Label: Tiles Per Meter V
     */
    tilesPerMetreV: number;
    /** The material of the generated surface. Empty uses the built-in material. */
    material: AssetRef;
    /**
     * How wide the verge is, out from each edge of the road.
     * Label: Width (m)
     * Range: 0.01 to 10.
     */
    vergeWidth: number;
    /**
     * How high the verge stands above the road's surface.
     * Label: Height (m)
     * Range: 0.01 to 10.
     */
    vergeHeight: number;
    /**
     * The surface drawn on the verge; empty uses the road's Material.
     * Label: Material
     */
    vergeMaterial: AssetRef;
    /**
     * Builds a curb along both edges of the road. Where the road leaves a Spline Paving, the paving's curb runs on into it as one piece. Turning this on fills an empty Material with that paving's curb material.
     * Label: Build Verge
     */
    verge: boolean;
    /** What the extrude does to the terrain under it. Auto reads it from the cross-section. A path grades the terrain to its heights. A road grades and owns its ground, so other routes stop at its edge; it also clears its grass and paints the ground Dirt. A filled water region leaves the terrain alone. Owns or Grades adds its terrain effects to this entity, and you can tune their fields. None removes only the effects that this field added, and you can undo it. While the extrude grades, a Flatten or Ground Claim that you delete comes back. */
    groundAuthority: SplineGroundAuthority;
    /** The generated surface casts shadows. */
    castShadows: boolean;
    /** Shadows fall on the generated surface. */
    receiveShadows: boolean;
}
export declare const SplineExtrude: ComponentType<SplineExtrude>;

export interface SplineFence {
    postPitch: number;
    crestPitch: number;
    /** How the posts meet the surface under the spline. None keeps the frame of the spline. Height puts each post on the surface. Height And Slope also tilts it with the surface. Spans take their frame from the posts. */
    conformMode: SplinePlacementConform;
    /** What the posts stand on. Scene takes the nearest surface of any kind, so a fence under a tree or an awning stands on top of it, and the longer path over it can take more spans. Terrain Only ignores scenery, so the posts follow the ground under it. With Terrain Only the drawn line of the spline can still ride over scenery that the parts pass under. */
    conformTarget: SplineConformTarget;
    slopeBlend: number;
    spanMaxStretch: number;
    /** Which height of a part meets the ground. Pivot Plane puts the height of the mesh's pivot on the ground, so a part modeled to reach below its pivot sinks into the ground as it was made to. Bounds Min lifts the part until its lowest point touches the ground, so a part like that floats. */
    plantMode: SplinePlantMode;
    /** How a span follows a slope. Racked turns the whole part onto the slope, so its posts lean (rails, hedges). Stepped keeps the part level at the lower post, so the height steps at each post (brick walls, castle walls). Sheared slants the part and keeps its posts upright, so both ends meet their own post: the joint a real fence uses on a slope. */
    spanGrade: SplineSpanGrade;
    seed: number;
    overrideMaterial: AssetRef;
}
export declare const SplineFence: ComponentType<SplineFence>;

export interface SplineFencePart {
    mesh: AssetRef;
    /** What the part is. Post: stands between two spans. A fence whose spans carry their own posts needs no Post part. Span: fills the gap between two posts. Gate: stands in a span that a span override makes a gate. Crest: laid along the tops of the spans at Crest Pitch, such as battlements. Cap: closes the end of a row of crest parts. The fence picks among the parts of one kind by Seed. */
    kind: SplineFencePartKind;
}
export declare const SplineFencePart: ComponentType<SplineFencePart> & NoAdd;

export interface SplineGroundProvisioned {
    flatten: boolean;
    claim: boolean;
    volume: boolean;
    grass: boolean;
    paint: boolean;
}
export declare const SplineGroundProvisioned: ComponentType<SplineGroundProvisioned>;

export interface SplineNetworkMember {
    /** Road: a strip that carries traffic, open or a ring. Area: a closed outline that roads enter, such as a square. */
    kind: SplineNetworkMemberKind;
}
export declare const SplineNetworkMember: ComponentType<SplineNetworkMember>;

export interface SplineNetworkOverride {
    other: Entity | null;
    arcLengthMetres: number;
    otherArcLengthMetres: number;
    rule: SplineNodeRule;
}
export declare const SplineNetworkOverride: ComponentType<SplineNetworkOverride>;

export interface SplineNetworkOverrides {
}
export declare const SplineNetworkOverrides: ComponentType<SplineNetworkOverrides> & NoAdd;

export interface SplinePaving {
    memberCount: number;
    /** The surface drawn on the paving, at the material's own tiling in meters; empty draws it flat gray. */
    material: AssetRef;
    /** Any whole number: each value slides the paving material's pattern to another place on the ground. The outline and the curb stay as they are. */
    seed: number;
    /**
     * How wide the curb is along every edge where no road enters; 0 builds no curb.
     * Label: Width (m)
     * Range: 0 to 10.
     */
    borderWidth: number;
    /**
     * How high the curb stands above the paving.
     * Label: Height (m)
     * Range: 0.01 to 10.
     */
    borderHeight: number;
    /**
     * The radius of the arc at each side of a road in a Flared mouth. Where two roads enter close together, or a road enters at a shallow angle, the arc gets smaller or is left out.
     * Label: Radius (m)
     * Range: 0.1 to 10.
     */
    mouthRadius: number;
    /**
     * The surface drawn on the curb; empty uses the paving's Material.
     * Label: Material
     */
    borderMaterial: AssetRef;
    /**
     * How the curb turns where the edge turns: on one sharp edge (Miter) or on a rounded outside (Round).
     * Label: Corner
     */
    borderCorner: SplineWallCorner;
    /** What the paving does to the terrain under it. Auto is Owns: the terrain is graded to the rim, its grass is cleared and the ground is painted Dirt, and the ground is claimed, so other grading stops at its edge. On a sloped rim the ground steps along the plaza's diagonals. Grades grades the terrain and does not claim it. None leaves the terrain as it is and lays the paving on it. A change removes only the effects that this field added, and you can undo it. */
    groundAuthority: SplineGroundAuthority;
    /** What the paving lies on: the terrain only, so props on the square never lift it (Terrain Only), or any surface, such as a bridge deck (Scene). */
    conformTarget: SplineConformTarget;
    /**
     * How the paving meets a road that enters it: its edge curves into the road (Flared) or meets the road's sides at a square corner (Straight).
     * Label: Shape
     */
    mouth: SplinePavingMouth;
    /** Whether the paving and the curb cast shadows onto the scene. */
    castShadows: boolean;
    /** Whether shadows fall on the paving and the curb. */
    receiveShadows: boolean;
}
export declare const SplinePaving: ComponentType<SplinePaving>;

export interface SplinePavingMember {
    entity: Entity | null;
    mode: SplinePavingMemberMode;
}
export declare const SplinePavingMember: ComponentType<SplinePavingMember>;

export interface SplinePlacement {
    straightPool: AssetRef[];
    curvePool: AssetRef[];
    scatterPool: AssetRef[];
    spacing: number;
    /** Fit To Length rounds the number of tiles so that they fill the spline exactly. Fixed Pitch steps exactly Spacing meters and cuts the last partial step. */
    fit: SplinePlacementFit;
    /** How the tiles meet the surface under the spline. None keeps the frame of the spline. Height puts each tile on the surface and keeps it upright. Height And Slope also tilts it with the surface. */
    conformMode: SplinePlacementConform;
    /** What the tiles stand on. Scene takes the nearest surface of any kind, so a tile under a cart or a canopy sits on top of it. Terrain Only ignores scenery, so the tiles follow the ground under it. With Terrain Only the drawn line of the spline can still ride over scenery that the tiles pass under. */
    conformTarget: SplineConformTarget;
    /** Which plane of the tile meets the ground. Bounds Min lifts until the mesh's lowest vertex touches, so a slab authored around its own mid-plane stands its full thickness above the ground; Pivot Plane lands the mesh's local y=0 on the surface and lets anything below it bury. Kits disagree about where their ground is and the wrong choice is a visible error either way: the measured Synty footpath slabs are 0.27 m thick with their pivot 0.19 m above their lowest vertex, so Bounds Min stands the whole slab proud where Pivot Plane leaves under 0.10 m. */
    plantMode: SplinePlantMode;
    lateralOffset: number;
    slopeBlend: number;
    maxTiltDegrees: number;
    seed: number;
    /** Label: Spacing Jitter Meters */
    spacingJitterMetres: number;
    yawJitterDegrees: number;
    /** Label: Lateral Jitter Meters */
    lateralJitterMetres: number;
    dropoutChance: number;
    /** Label: End Taper Meters */
    endTaperMetres: number;
    seamShearMaxDegrees: number;
    overrideMaterial: AssetRef;
}
export declare const SplinePlacement: ComponentType<SplinePlacement>;

export interface SplineSpanOverride {
    pointIndex: number;
    spanOrdinal: number;
    kind: SplineSpanOverrideKind;
    poolSlot: number;
}
export declare const SplineSpanOverride: ComponentType<SplineSpanOverride> & NoAdd;

export interface SplineWall {
    /**
     * Meters across the wall. The spline's width does not change it.
     * Range: 0.05 to 100.
     */
    thickness: number;
    /**
     * Meters from the ground to the top of the wall. On a slope with Grade set to Stepped, each stretch between two points stands at least this tall everywhere.
     * Range: 0.05 to 100.
     */
    height: number;
    /** How the wall meets a slope. Racked keeps the top parallel to the ground, as a hedge or a palisade does. Stepped keeps the top of each stretch between two points level, at Height above its highest ground, and steps up or down where two stretches meet, as coursed masonry does. */
    grade: SplineWallGrade;
    /** What the wall builds where its spline turns at a point: Miter meets the two faces on one sharp edge, Round sweeps the outside in an arc. A turn sharper than 120 degrees is always built round. Adding the wall picks Miter for a spline of straight segments and Round for a curved one. */
    corner: SplineWallCorner;
    /** The wall's surface. Empty keeps a flat gray. Texture coordinates are in meters, along each face and up from the wall's lowest point, so the stone size is the material's own tiling. */
    material: AssetRef;
    /** How the wall follows the ground under its spline. None keeps the spline's own heights; Height and Height And Slope both set the wall on the surface below the spline, since the wall takes its lean from the spline, not from the surface. The base always sinks into a cross slope so it never floats. */
    conformMode: SplinePlacementConform;
    /** What the ground under the wall is. Scene takes the nearest surface of any kind, so a wall passing under a tree is built over its roof; TerrainOnly makes scenery transparent so the wall stands on the terrain beneath it. */
    conformTarget: SplineConformTarget;
    /** Whether the wall casts shadows onto the scene. */
    castShadows: boolean;
    /** Whether shadows fall on the wall. */
    receiveShadows: boolean;
}
export declare const SplineWall: ComponentType<SplineWall>;

export interface Terrain {
    terrainAssetGuid: AssetRef;
    terrainAssetType: number;
    baseSource: TerrainBaseSource;
    sizeX: number;
    sizeZ: number;
    heightScale: number;
    samplesPerMeter: number;
    streamingRadius: number;
    domain: TerrainDomain;
    planetRadius: number;
    sphereSculptGuid: AssetRef;
    seaLevel: number;
    targetPixelError: number;
    maxDepthOverride: number;
    debugView: TerrainDebugView;
    terrainDataHandle: number;
    terrainDataGeneration: number;
    tiledTerrainHandle: number;
    tiledTerrainGeneration: number;
    materialTiling: number;
    materialLibraryGuid: AssetRef;
    layerRoleSlot: number[];
    layerAlbedoTexture: AssetRef[];
    layerTiling: [number, number, number, number];
    layerHexTiling: number;
    renderLayers: number;
    castShadows: boolean;
    receiveShadows: boolean;
}
export declare const Terrain: ComponentType<Terrain> & NoAdd;

export interface TerrainColorZone {
    payloadRef: AssetRef;
    extentX: number;
    extentZ: number;
    falloff: number;
    priority: number;
}
export declare const TerrainColorZone: ComponentType<TerrainColorZone> & NoAdd;

export interface TerrainGrass {
    renderMode: TerrainGrassRenderMode;
    preset: TerrainGrassPreset;
    bladesPerSquareMeter: number;
    range: number;
    densityFalloff: number;
    placementSeed: number;
    clumpSize: number;
    clumpHeightVariance: number;
    clumpAlignment: number;
    clumpTaper: number;
    bladeHeight: number;
    bladeWidth: number;
    bladeTilt: number;
    bladeBend: number;
    bladeTwist: number;
    bladeTaperStart: number;
    tuftFan: number;
    bladeSegments: number;
    randomScale: number;
    layerIndex: number;
    maskThreshold: number;
    windDirection: number;
    windGustSpeed: number;
    windGustScale: number;
    windStrength: number;
    windRestingLean: number;
    windFlutterAmount: number;
    windFlutterSpeed: number;
    windSeed: number;
    brightness: number;
    randomBrightness: number;
    hueVariation: number;
    rootFadeStart: number;
    rootFadeEnd: number;
    groundingStrength: number;
    /** The height along the blade, from 0 at the root to 1 at the tip, up to which the ground's color tints the blade. At 0.5 the root starts at the ground's color, the ground's color reaches mid-blade, and the upper half keeps the leaf color. At 1 the tint fades out toward the tip. Applies while Root Color is Auto and Splat Root Color is on. */
    groundTintHeight: number;
    canopyShade: number;
    groundDarkening: number;
    translucency: number;
    textureGrass: boolean;
    textureCardsPerSquareMeter: number;
    textureSize: number;
    useSplatRootColor: boolean;
    rootColor: number;
    tipColor: number;
    backlightColor: number;
    soilColor: number;
    albedoTextureAssetGuid: AssetRef;
    alphaTextureAssetGuid: AssetRef;
    normalTextureAssetGuid: AssetRef;
    atlasColumns: number;
    atlasRows: number;
    atlasTileCount: number;
    alphaCutoff: number;
    normalStrength: number;
}
export declare const TerrainGrass: ComponentType<TerrainGrass> & NoAdd;

export interface TerrainModifierVolume {
    shape: TerrainVolumeShape;
    _ShapePad: number[];
    radius: number;
    rectHalfX: number;
    rectHalfZ: number;
    falloff: number;
    falloffInward: number;
    stationSpacing: number;
    weight: number;
    priority: number;
}
export declare const TerrainModifierVolume: ComponentType<TerrainModifierVolume>;

export interface TerrainPaintZone {
    payloadRef: AssetRef;
    extentX: number;
    extentZ: number;
    falloff: number;
    priority: number;
    layerIndex: number;
    strength: number;
}
export declare const TerrainPaintZone: ComponentType<TerrainPaintZone> & NoAdd;

export interface TerrainPlanetRelief {
    /** Base surface displacement along the normal (meters). ~= R/40 reads well. */
    amplitude: number;
    /** Angular frequency of the base noise (wavelength ~= 2*pi*R / frequency). */
    frequency: number;
    /** fBM octaves stacked onto the base relief shape for finer detail (1-8). */
    octaves: number;
}
export declare const TerrainPlanetRelief: ComponentType<TerrainPlanetRelief> & NoAdd;

export interface TerrainRuleCondition {
    kind: TerrainRuleConditionKind;
    falloffCurve: TerrainRuleFalloffCurve;
    _Pad0: number[];
    min: number;
    max: number;
    feather: number;
    noiseFrequency: number;
    noiseSeed: number;
}
export declare const TerrainRuleCondition: ComponentType<TerrainRuleCondition>;

export interface TerrainSculptZone {
    payloadRef: AssetRef;
    extentX: number;
    extentZ: number;
    falloff: number;
    priority: number;
    blend: TerrainModifierBlend;
    _Pad: number[];
}
export declare const TerrainSculptZone: ComponentType<TerrainSculptZone> & NoAdd;

export interface TerrainSurfaceRule {
    materialSlot: number;
    strength: number;
    replace: boolean;
    conditionCount: number;
    _Pad0: number[];
}
export declare const TerrainSurfaceRule: ComponentType<TerrainSurfaceRule>;

export interface TimelinePlaybackState {
    timeSeconds: number;
    previousTimeSeconds: number;
    playing: boolean;
    paused: boolean;
}
export declare const TimelinePlaybackState: ComponentType<TimelinePlaybackState> & NoAdd;

export interface Transform {
    matrix: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
}
export declare const Transform: ComponentType<Transform> & NoAdd;

export interface UIDocument {
    layout: AssetRef;
    style: AssetRef;
    sortOrder: number;
    renderMode: UIRenderMode;
}
export declare const UIDocument: ComponentType<UIDocument>;

export interface ValueCurve {
    enabled: boolean;
    playing: boolean;
    loop: boolean;
    pingPong: boolean;
    applyToTarget: boolean;
    target: ValueCurveTarget;
    shapeMode: ValueCurveShapeMode;
    useBuiltinEasing: boolean;
    builtinEasing: TweenEasing;
    durationSeconds: number;
    startValue: number;
    endValue: number;
    cubicBezierControl1X: number;
    cubicBezierControl1Y: number;
    cubicBezierControl2X: number;
    cubicBezierControl2Y: number;
    cubicBezierAnchorStartY: number;
    cubicBezierAnchorEndY: number;
    elapsedSeconds: number;
    currentValue: number;
}
export declare const ValueCurve: ComponentType<ValueCurve>;

export interface VhsEffect {
    enabled: boolean;
    intensity: number;
    wobble: number;
    tracking: number;
    signalGlitches: number;
    glitchOffsets: number;
    timeBasePreset: number;
    interference: number;
    frameFeedback: number;
    feedbackDecay: number;
    feedbackMotionThreshold: number;
    feedbackTrailLength: number;
    compositeSignalMode: number;
    dotCrawl: number;
    colorBleed: number;
    colorBleedOffset: number;
    tapeNoise: number;
    chromaStreaks: number;
    dropouts: number;
    scanlines: number;
    speed: number;
    overlayEnabled: boolean;
    overlayColor: [number, number, number];
    overlayOpacity: number;
    overlaySize: number;
    overlayFont: number;
    overlayPositionX: number;
    overlayPositionY: number;
    overlayText: string;
    dateBurnEnabled: boolean;
    dateBurnColor: [number, number, number];
    dateBurnSize: number;
    dateBurnPositionX: number;
    dateBurnPositionY: number;
    dateBurnYear: number;
    dateBurnMonth: number;
    dateBurnDay: number;
    dateBurnHour: number;
    dateBurnMinute: number;
    transportMode: number;
    transportStrength: number;
}
export declare const VhsEffect: ComponentType<VhsEffect>;

export interface VideoTextureComponent {
    videoPath: string;
    uniformName: string;
    loop: boolean;
    playOnStart: boolean;
    playing: boolean;
    playbackSpeed: number;
}
export declare const VideoTextureComponent: ComponentType<VideoTextureComponent>;

export interface VignetteEffect {
    enabled: boolean;
    stackOrder: number;
    intensity: number;
    smoothness: number;
    rounded: boolean;
    color: [number, number, number];
}
export declare const VignetteEffect: ComponentType<VignetteEffect>;

export interface VolumetricClouds {
    enabled: boolean;
    preset: VolumetricCloudsPreset;
    radius: number;
    altitude: number;
    thickness: number;
    numStepsLight: number;
    stepSize: number;
    rayOffsetStrength: number;
    cloudScale: number;
    densityMultiplier: number;
    densityOffset: number;
    shapeOffset: [number, number, number];
    shapeNoiseWeights: [number, number, number, number];
    detailNoiseScale: number;
    detailNoiseWeight: number;
    detailNoiseWeights: [number, number, number];
    detailOffset: [number, number, number];
    lightAbsorptionThroughCloud: number;
    lightAbsorptionTowardSun: number;
    darknessThreshold: number;
    forwardScattering: number;
    backScattering: number;
    baseBrightness: number;
    phaseFactor: number;
    timeScale: number;
    baseSpeed: number;
    detailSpeed: number;
    historyWeight: number;
}
export declare const VolumetricClouds: ComponentType<VolumetricClouds>;

export interface VolumetricFogEffect {
    enabled: boolean;
    intensity: number;
    maxDistance: number;
    xyCellSizePixels: number;
    zSliceCount: number;
    depthDistribution: number;
    density: number;
    baseHeight: number;
    heightFalloff: number;
    skyFade: number;
    albedo: [number, number, number];
    emission: [number, number, number];
    anisotropy: number;
    trackDirectionalLight: boolean;
    sunIntensityScale: number;
    sunScatteringTint: [number, number, number];
    ambientScatteringTint: [number, number, number];
    noiseEnabled: boolean;
    noiseScale: number;
    noiseStrength: number;
    noiseVelocity: [number, number, number];
    noiseContrast: number;
    noiseChannelWeights: [number, number, number, number];
    densityThreshold: number;
    densityThresholdSoftness: number;
    densityMode: VolumetricFogDensityMode;
    gradientMode: VolumetricFogGradientMode;
    gradientStrength: number;
    gradientLowTint: [number, number, number];
    gradientHighTint: [number, number, number];
    temporalEnabled: boolean;
    temporalBlend: number;
    jitterStrength: number;
    jitterMotion: boolean;
    compositeDepthBias: number;
    shadowBias: number;
    fogGlowEnabled: boolean;
    fogGlowQualityLevel: FogGlowQuality;
    fogGlowIntensity: number;
    fogGlowRadius: number;
    fogGlowOctaves: number;
    fogGlowScatter: number;
    fogGlowThreshold: number;
    fogGlowKnee: number;
    fogGlowFadeStart: number;
    fogGlowFadeEnd: number;
    fogGlowTint: [number, number, number];
    fogGlowAntiFlicker: boolean;
}
export declare const VolumetricFogEffect: ComponentType<VolumetricFogEffect>;

export interface WindVolume {
    isGlobal: boolean;
    shape: WindVolumeShape;
    blendMode: WindVolumeBlendMode;
    blendDistance: number;
    weight: number;
    priority: number;
    directionX: number;
    directionY: number;
    directionZ: number;
    speed: number;
    turbulence: number;
    gustFrequency: number;
    gustScale: number;
}
export declare const WindVolume: ComponentType<WindVolume>;

export interface WorldSectorCoord {
    x: number;
    y: number;
    z: number;
}
export declare const WorldSectorCoord: ComponentType<WorldSectorCoord>;

export interface WorldTransform {
    matrix: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
    version: number;
}
export declare const WorldTransform: ComponentType<WorldTransform>;
