// Generated from the engine's component headers by ComponentScanner --emit-dts. Do not edit.
// One interface and one ComponentType value per reflected component; & NoAdd marks the ones a page
// cannot add or remove. Each field's type follows its reflected kind.

import type { AssetRef, Color, ComponentType, Entity, NoAdd, Vec3 } from './opengine';

export type AmbientLightMode = 'Flat' | 'Gradient';

export type AnimatorGraphParamKind = 'Float' | 'Bool' | 'Trigger';

export type AreaLightShape = 'Rectangle' | 'Disc' | 'Sphere' | 'Cylinder';

export type CameraSensorPreset = 'Custom' | 'Standard8' | 'Super8' | 'Film16' | 'Super16' | 'Film35TwoPerf' | 'Film35ThreePerf' | 'Film35Academy' | 'Super35' | 'Film65FivePerf' | 'Imax15Perf' | 'MicroFourThirds' | 'ApsC' | 'FullFrame' | 'MediumFormat4433' | 'MediumFormat5440' | 'ArriAlexa35' | 'ArriAlexaLF' | 'ArriAlexa65';

export type ColorFilterBlendMode = 'Multiply' | 'Add' | 'Screen' | 'SoftLight';

export type DDGICascadeMode = 'SingleGrid' | 'Cascaded2';

export type DDGIConvergedSolve = 'Continuous' | 'Throttle';

export type DDGIDebugView = 'None' | 'Coverage' | 'ProbeState' | 'CascadeWeight' | 'NearestProbeIrradiance' | 'ProbeStateFine' | 'NearestProbeIrradianceFine' | 'FineProbeCoord' | 'FineProbeSlot';

export type DDGIDepthResolution = 'Shared' | 'Fine';

export type DDGIGlossyResolveScale = 'Quarter' | 'Half' | 'ThreeQuarter' | 'Full';

export type DDGIJitterMode = 'Gated' | 'MonteCarlo';

export type DDGIProbePlacement = 'Grid' | 'Adaptive';

export type DDGIVolumeFit = 'Manual' | 'FollowCamera';

export type DirectionalShadowFilter = 'Grid5x5' | 'Grid3x3' | 'PoissonPCF' | 'PCSS' | 'MSM4' | 'DilatedPCF';

export type DirectionalShadowMode = 'Cascades' | 'RayTraced';

export type DofSamplingQuality = 'Performance' | 'Balanced' | 'Quality';

export type ExposureMode = 'Fixed' | 'Manual' | 'Physical' | 'Auto';

export type FilmGateMask = 'None' | 'RoundedGate' | 'Academy137' | 'Widescreen185' | 'Anamorphic239';

export type FilmGrainMode = 'FidelityFXFast' | 'Filmic';

export type FogGlowQuality = 'Fast' | 'Balanced' | 'High' | 'Cinematic';

export type HeightFogAxisMode = 'WorldY' | 'WorldX' | 'WorldZ' | 'Custom';

export type HeightFogGradientMode = 'None' | 'Distance' | 'Height' | 'ScreenY' | 'MainLight';

export type HeightFogLayerMode = 'Dominant' | 'Additive';

export type HeightFogPreset = 'Custom' | 'MorningHaze' | 'GroundMist' | 'MountainValley' | 'HorizonPollution' | 'Day' | 'Night';

export type LightFalloff = 'PhysicalInverseSquare' | 'Linear' | 'SmoothRange' | 'Custom';

export type LightShadowTier = 'Inherit' | 'Low' | 'Medium' | 'High';

export type LightType = 'Directional' | 'Point' | 'Spot' | 'Ambient' | 'Area' | 'Volume';

export type LightUnit = 'Unitless' | 'Lux' | 'Lumen' | 'Candela';

export type OceanDepthFogFalloff = 'Exponential' | 'Linear' | 'Smooth';

export type OceanInputBlend = 'Replace' | 'Additive' | 'Multiply' | 'Minimum' | 'Maximum';

export type OceanInputGeometryType = 'Rectangle' | 'EngineMesh' | 'Line' | 'Trail' | 'Particle' | 'SplineBand' | 'CustomNative';

export type OceanTimeProviderMode = 'Default' | 'Custom' | 'Paused' | 'NetworkOffset' | 'Timeline';

export type OceanWaveMode = 'Gerstner' | 'FFT';

export type ParticleBillboard = 'WorldOriented' | 'FaceCamera' | 'YAlongVelocity' | 'FaceCameraYAlongVelocity' | 'LockedToEmitterUp' | 'FaceCameraPosition' | 'Horizontal' | 'ZAlongVelocity';

export type ParticleDrawOrder = 'Spawn' | 'Lifetime' | 'ReverseLifetime' | 'ViewDepth';

export type ParticleEmitterDimension = 'World2D' | 'World3D';

export type ParticleLightingMode = 'Unlit' | 'Lit' | 'SixWay';

export type ParticleSixWayLayout = 'SignedAxes' | 'RightTopBackRgba' | 'TopLeftRightBottomBackFront';

export type PostProcessVolumeShape = 'Box' | 'Sphere' | 'Capsule' | 'Cylinder';

export type RayTracedShadowQuality = 'Performance' | 'Quality';

export type ReflectionProbeUpdateMode = 'Once' | 'Realtime';

export type SkeletonInstanceOwner = 'Self' | 'Entity';

export type SkyMode = 'Physical' | 'Gradient';

export type SkyScalarCurveShapeMode = 'KeyCurve' | 'CubicBezier';

export type SkySunIlluminanceSource = 'Light' | 'Curve';

export type SkySunPathKind = 'Earth' | 'Custom';

export type SplineConformTarget = 'Scene' | 'TerrainOnly';

export type SplineExtrudeProfile = 'Bevel' | 'Crown';

export type SplineExtrudeWidthMode = 'Channel' | 'FitToBanks';

export type SplineExtrudeWidthScale = 'LateralOnly' | 'Uniform' | 'None';

export type SplineGroundAuthority = 'Auto' | 'None' | 'Grades' | 'Owns';

export type SplinePlacementConform = 'None' | 'Height' | 'HeightAndSlope';

export type SplinePlacementFit = 'FitToLength' | 'FixedPitch';

export type SplinePlantMode = 'BoundsMin' | 'PivotPlane';

export type SplineSpanGrade = 'Racked' | 'Stepped' | 'Sheared';

export type SplineSpanOverrideKind = 'None' | 'Gate' | 'ExplicitPiece';

export type SplineWallCorner = 'Mitre' | 'Round';

export type SplineWallGrade = 'Racked' | 'Stepped';

export type SssrSampleQuality = 'Low' | 'Medium' | 'High';

export type TerrainGrassRenderMode = 'Dither' | 'Blend';

export type TerrainRuleConditionKind = 'SlopeDegrees' | 'SlopeNormalized' | 'HeightMetres' | 'HeightNormalized' | 'Noise';

export type TerrainRuleFalloffCurve = 'ClampedLinear' | 'Smoothstep';

export type TerrainVolumeShape = 'Rectangle' | 'Circle' | 'SplinePath' | 'SplineArea' | 'Global';

export type TonemapMode = 'ACES' | 'Reinhard' | 'AgX' | 'Filmic' | 'Neutral' | 'Linear' | 'GranTurismo7' | 'ACES2';

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
    cullingMask: number;
    postProcessProfileId: number;
    msaaSamples: number;
    antiAliasing: number;
    renderScale: number;
    postProcessMask: number;
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
    autoExposureKey: number;
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
    stackOrder: number;
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
    stackOrder: number;
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

export interface DDGIVolume {
    /** Draws what the probe field resolved instead of lit shading. Coverage shows where the probes only partly answer for a surface, Probe State shows which probes were classified buried and how far they relocated, Cascade Weight shows which grid owns each pixel. Diagnostic only — costs nothing when off. */
    debugView: DDGIDebugView;
    /** Draws the probe lattice in the Scene View, matching the reference demo's show-probes checkbox. Selecting the volume draws its bounds, not its probes, so this stays authoritative while you edit it. */
    showProbes: boolean;
    /** Where the grid's centre comes from. Manual keeps it where you placed it. Follow Camera re-centres it on the camera every frame so the scene has GI everywhere the camera goes, snapped to whole probe cells so small movements cost nothing. The entity's scale still sizes the grid in both modes. */
    fit: DDGIVolumeFit;
    /** How far GI reaches from the camera, in world units, when Fit is Follow Camera. Larger covers more of the level but spreads the same probe count thinner - probe spacing is range * 2 / (Divisions - 1). Ignored when Fit is Manual, where the entity's scale sizes the volume instead. */
    followRange: number;
    /** Vertical reach of a Follow Camera volume, as a fraction of Range. Below 1 spends fewer probes on empty headroom, which is usually what a level wants. Ignored when Fit is Manual. */
    followHeightFraction: number;
    /** How probes are positioned. Adaptive (default) keeps the uniform lattice but nudges each probe out of any geometry it is embedded in, and deactivates one that stays buried so it stops leaking light it cannot see. Grid is the plain lattice — every probe sits at its cell centre and contributes, no classify pass — cheaper and fully predictable, and the A/B control for judging what Adaptive changed. */
    probePlacement: DDGIProbePlacement;
    /** How much authority probe classification has, from 0 (off - probes are never relocated or deactivated, exactly like Grid placement, and the classify pass is skipped) to 1 (full). Lower it if thin or two-sided walls are being misread as solid and probes are wrongly deactivated. Does nothing while Probe Placement is Grid. Applied live, no grid rebuild. */
    classifyStrength: number;
    /** Probe count along the grid's longest axis; the other two axes scale by aspect ratio. Higher = finer indirect detail at a roughly cubic cost in trace/blend/upload work. Clamped 2-32; a resolution change rebuilds the probe grid after a short idle delay, not every frame while dragging. */
    probesLongAxis: number;
    /** Rays traced per probe per tick — more rays reduce noise per solve at a linear trace cost. Clamped 32-256. The per-tick budget is counted in rays, so a higher value visits fewer probes each tick and the whole grid takes longer to sweep; 256 is what RTXGI ships, 64 is this port's measured default. */
    raysPerProbe: number;
    /** Multiplier on the final blended irradiance before it reaches the forward pass's ambient term. Applied live, no grid rebuild. */
    intensity: number;
    /** How much multi-bounce light the field carries, scaling the recursive bounce term rather than the final output. Useful mainly between 0 (single bounce only) and about 1 (full multi-bounce); above that the convergence bound and the radiance clamp renormalize it away and it stops doing anything. To change how strongly colour moves between surfaces, use Radiance Clamp - not this. Applied live, no grid rebuild. */
    bounceIntensity: number;
    /** How much sky light the probes pick up on rays that hit nothing. 0 ignores the sky completely (indoor-only GI, miss rays are black), 1 is the environment's own brightness. Multiplies with the scene's global sky IBL intensity rather than replacing it. Applied live, no grid rebuild. */
    skyIntensity: number;
    /** Ceiling on how bright a single bounce sample may be, which is what stops one over-bright surface from smearing a firefly through the probe field. Dims an outlier without changing its colour. This is a ceiling, not a switch - 0 means no bounce light at all. Applied live, no grid rebuild. */
    radianceClamp: number;
    /** Sampling regime for the probe solve. Gated (default, matching the reference library) traces the same ray directions every solve, so once the field converges it is perfectly stable - no shimmer, even while the camera moves. Monte Carlo rotates the ray set every solve for better long-run coverage of the sphere at the cost of permanent low-level temporal noise. Pair Gated with Hysteresis around 0.6 and Monte Carlo with around 0.9. Applied live, no grid rebuild. */
    jitterMode: DDGIJitterMode;
    /** Temporal blend retention in [0,1), which is how much of the old estimate each texel keeps every solve. In frames: a value h takes about ln(0.05)/ln(h) solves to forget an old reading, so 0.9 is roughly 28 frames and 0.6 is roughly 6. Higher is smoother but slower to react to a light or geometry change; lower reacts faster but stays noisier. Pairs with Jitter Mode: 0.6 with Gated (the default pairing, matching the reference library) and 0.9 with Monte Carlo - a held-basis value under a rotating basis reads as large blobs drifting over surfaces. Applied live, no grid rebuild. */
    hysteresis: number;
    /** How far a probe texel may jump in one update, measured in multiples of its own noise level. A bigger jump is treated as a firefly and pulled back rather than accepted. Lower is steadier but slower to react; raise it if real lighting changes arrive late. */
    fireflyClamp: number;
    /** How large a change must be, in multiples of a probe texel's own noise level, before it is treated as a real lighting change instead of sampling noise. Lower reacts sooner to real changes at the cost of also reacting to noise. */
    changeThreshold: number;
    /** How hard the field snaps to new values where a real lighting change was detected. Higher converges faster after a light moves or a door opens; too high reintroduces noise on those texels. */
    snapAmount: number;
    /** Scale on the surface sample bias used when reading indirect irradiance. Increase if thin geometry shows self-shadowing in the indirect term; decrease if indirect light visibly detaches from a surface. Applied live, no grid rebuild. */
    normalBiasScale: number;
    /** How aggressively light is stopped from leaking through walls. 1 is the full visibility test, 0 disables it (light bleeds through thin geometry). Backing off from 1 trades a little leak for less over-darkening on thin or two-sided geometry, which is why the default is not 1. */
    chebyshevStrength: number;
    /** Resolution of the occluder-distance data each probe stores for the leak test. Shared keeps it in the 6x6 irradiance tile (the default, cheapest). Fine gives it its own 14x14 tile, the ratio RTXGI uses, which stops noticeably more light leaking through thin walls; costs one extra depth blend and upload dispatch per cascade per tick and four times the depth atlas memory. Rebuilds the grid after a short idle delay. */
    depthResolution: DDGIDepthResolution;
    /** How sharply each probe direction's stored occluder distance tracks that exact direction. 1 is a plain cosine-weighted average; lower blurs the distance over the whole hemisphere, which leaks more light through walls; higher tracks the nearest occluder in that direction crisply at the cost of more noise. Does nothing while Chebyshev Strength is 0. Applied live, no grid rebuild. */
    depthSharpness: number;
    /** How strongly each probe's octahedral tile is denoised on its way into the atlas. 0 is off (the raw blended field, grainier at a given ray count), 1 is the full filter and matches the upstream library. It smooths only within one probe, never between probes, so it cannot bleed light through a wall. Applied live, no grid rebuild. */
    filterStrength: number;
    /** How large a difference between neighbouring probe directions the denoise filter still treats as noise rather than a real edge. Higher trusts more neighbours and smooths harder, at the cost of directional detail within a probe; lower keeps that detail and removes less grain. Does nothing while Filter Strength is 0. */
    filterSmoothness: number;
    /** Adds specular reflections baked from the probes, giving metals and smooth surfaces local reflections without a screen-space pass. Costs two extra blend/upload dispatches and one high-resolution atlas per volume; reuses the rays the diffuse field already traces, so it adds no ray cost. */
    enableGlossy: boolean;
    /** How strongly probe reflections displace the environment reflection. At 0 the environment cube is used unchanged; at 1 the probes take full authority wherever they actually saw geometry. */
    reflectionIntensity: number;
    /** Resolution the probe reflections are computed at, as a fraction of the view. 50% (default) recovers most of the cost and its blur hides the probe lobes' coarse texels on large reflectors; 100% computes them per pixel and shows those texels on a close-up mirror. Applied live, no grid rebuild. */
    glossyResolveScale: DDGIGlossyResolveScale;
    /** Keeps the probe solve running while the camera moves. On (default, matching the reference library) the field keeps converging during a fly-through. Off pauses the whole solve during camera motion and resumes shortly after the view comes to rest - the field is world-space, so it stays correct while paused, it just stops reacting to lighting or geometry changes until you stop moving. Costs nothing visually when the view is still; gives the GPU time back while it is not. */
    continuousSolve: boolean;
    /** What the solve does once the probe field has settled. Continuous (default, matching the reference library) keeps spending the full per-tick ray budget. Throttle drops to a small patrol budget once nearly every probe texel has been steady for its full history, and restores the full budget within a few ticks of a lighting or geometry change. Costs one tiny reduction dispatch and readback per tick while on; gives most of the solve's GPU time back on a static scene. */
    convergedSolve: DDGIConvergedSolve;
    /** How many probe grids to run. Single Grid is the coarse lattice alone. Cascaded (2) adds a second, finer grid covering a smaller region centered on this volume, for closer-range indirect detail — roughly double the trace/blend/upload cost. Cascaded is the default, matching the reference library. */
    cascades: DDGICascadeMode;
    /** Fraction of this volume's extents the fine cascade covers (e.g. 0.35 = a sub-box 35% the size, centered the same). Clamped 0.05-0.9. Smaller = denser probes in a smaller region. */
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

export interface HLODProxy {
    clusterId: number;
}
export declare const HLODProxy: ComponentType<HLODProxy> & NoAdd;

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

export interface LODGroup {
    bias: number;
}
export declare const LODGroup: ComponentType<LODGroup>;

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

export interface MeshGPUData {
    meshIndex: number;
    materialIndex: number;
    instanceIndex: number;
    lastTransformVersion: number;
    lastFlags: number;
    lastSkinPaletteOffset: number;
    lastLodBias: number;
    lastRuntimeId: number;
    lastBoundsCenter: [number, number, number];
    lastBoundsRadius: number;
    lastMeshUploadSequence: bigint;
    lastSectorX: number;
    lastSectorY: number;
    lastSectorZ: number;
    lastPrevDiffers: boolean;
    hlodEvicted: boolean;
}
export declare const MeshGPUData: ComponentType<MeshGPUData>;

export interface MeshRenderer {
    meshId: number;
    meshNameId: bigint;
    meshGpuHandleId: bigint;
    materialAssetGuid: AssetRef;
    modelAssetGuid: AssetRef;
    renderLayerMask: number;
    castShadows: boolean;
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
    extentX: number;
    extentZ: number;
    color: Color;
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
    buoyancyStrength: number;
    probeRadius: number;
    draft: number;
    waterLineOffset: number;
    linearDrag: number;
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
    extentX: number;
    extentZ: number;
    clipState: number;
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
    renderLayerMask: number;
    bakeOnlyMeshDepthContributors: boolean;
    bakeLoadMissingAssets: boolean;
    bakeIncludeDisabledRenderers: boolean;
    bakeIncludeSkinnedMeshes: boolean;
    bakeIncludeTerrainHeightfields: boolean;
    bakeOriginX: number;
    bakeOriginZ: number;
    bakeSizeX: number;
    bakeSizeZ: number;
    bakeSeaLevel: number;
    bakeDeepWaterDepth: number;
    streamRadius: number;
    streamPriority: number;
}
export declare const OceanDepthCacheSource: ComponentType<OceanDepthCacheSource>;

export interface OceanDepthContributor {
    extentX: number;
    extentZ: number;
    depth: number;
    feather: number;
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
    extentX: number;
    extentZ: number;
    flowMap: AssetRef;
    strength: number;
    feather: number;
    biasX: number;
    biasZ: number;
}
export declare const OceanFlowMapSource: ComponentType<OceanFlowMapSource>;

export interface OceanFlowSource {
    extentX: number;
    extentZ: number;
    flowX: number;
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
    renderLayerMask: number;
    extentPadding: number;
    depthBias: number;
    minDepth: number;
    maxDepth: number;
    feather: number;
    roundness: number;
}
export declare const OceanMeshDepthContributor: ComponentType<OceanMeshDepthContributor>;

export interface OceanPolygonWaterBody {
    pointCount: number;
    pointX: number[];
    pointZ: number[];
    confineSurface: boolean;
    clipFeather: number;
    underwaterVolume: boolean;
    underwaterDepth: number;
    flow: boolean;
    flowX: number;
    flowZ: number;
    waveOverride: boolean;
    waveWeight: number;
    waveChop: number;
    waveFeather: number;
    useLocalSpectrum: boolean;
    localSpectrumAsset: AssetRef;
    localWaveCount: number;
    localWaveAmplitude: number;
    localWaveWavelength: number;
    localWaveDirectionDegrees: number;
    localWaveExtraAmplitude: number[];
    localWaveExtraWavelength: number[];
    localWaveExtraDirectionDegrees: number[];
    /** Ocean preset whose surface values (colour, optics, foam, detail textures) apply inside this water body. Empty keeps the ocean's own surface. */
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
    qualityOverride: number;
    lodCount: number;
    lodDataResolution: number;
    minScale: number;
    maxScale: number;
    geometryUpSampleFactor: number;
    geometryDownSampleFactor: number;
    gravityMultiplier: number;
    timeScale: number;
    timeOffset: number;
    timeProvider: OceanTimeProviderMode;
    networkTimeOffset: number;
    networkTimeRate: number;
    timelineTime: number;
    timelinePlaybackRate: number;
    timelinePlaying: boolean;
    pausedTime: number;
    useFixedTime: boolean;
    fixedTime: number;
    maxActiveDepthCaches: number;
    rasterDepthCapture: boolean;
    rasterDepthCaptureResolution: number;
    rasterDepthCaptureRenderLayerMask: number;
    rasterDepthCaptureSizeX: number;
    rasterDepthCaptureSizeZ: number;
    rasterDepthCaptureTopPadding: number;
    rasterDepthCaptureDeepWaterDepth: number;
    globalWindSpeed: number;
    globalWindDirection: number;
    globalWindTurbulence: number;
    spectrumAsset: AssetRef;
    collisionProvider: number;
    fftCollisionAsset: AssetRef;
    maxCollisionQueryCount: number;
    animatedWavesCollisionSettings: AssetRef;
    dynamicWaveSettings: AssetRef;
    foamSettings: AssetRef;
    shadowSettings: AssetRef;
    combineDisplacementCascade: boolean;
}
export declare const OceanRenderer: ComponentType<OceanRenderer>;

export interface OceanSeabed {
    extentX: number;
    extentZ: number;
    baseHeight: number;
    slopeX: number;
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
    width: number;
    /** Draw ocean water only inside this spline band. The coarsest clip level covers all authored water; nearer levels refine the shoreline. */
    confineSurface: boolean;
    clipFeather: number;
    underwaterVolume: boolean;
    underwaterDepth: number;
    flow: boolean;
    flowSpeed: number;
    reverseFlow: boolean;
    clip: boolean;
    albedo: boolean;
    color: Color;
    albedoCoverage: number;
    depth: boolean;
    depthMeters: number;
    depthFeather: number;
    /** Longest ribbon segment in meters. Smaller follows tight curves more closely at the cost of more triangles. */
    maxSegmentLength: number;
}
export declare const OceanSplineInput: ComponentType<OceanSplineInput>;

export interface OceanSurface {
    seaLevel: number;
    waveMode: OceanWaveMode;
    deepColor: Color;
    foamColor: Color;
    choppyScale: number;
    fresnelPower: number;
    reflectionStrength: number;
    subsurfaceStrength: number;
    foamAmount: number;
    foamFadeRate: number;
    waveFoamStrength: number;
    waveFoamCoverage: number;
    foamScale: number;
    foamFeather: number;
    spray: boolean;
    /** Most spray droplet clusters alive at once in each view. */
    sprayMaxParticles: number;
    sprayWindThreshold: number;
    /** Crest points tested for spray each second, per square meter of the spawn disk. */
    spraySpawnRate: number;
    /** Radius in meters around the camera within which spray can be born. */
    spraySpawnRadius: number;
    sprayEmissionThreshold: number;
    sprayLifetime: number;
    sprayStartSize: number;
    sprayEndSize: number;
    sprayUpVelocity: number;
    sprayWindVelocityScale: number;
    sprayOpacity: number;
    sprayRenderLayerMask: number;
    sprayGeometryIntersections: boolean;
    sprayIntersectionSpawnRate: number;
    sprayIntersectionBand: number;
    foamTexture: AssetRef;
    foamDebugMode: number;
    shorelineFoamMaxDepth: number;
    shorelineFoamStrength: number;
    normalsStrength: number;
    normalsScale: number;
    diffuse: Color;
    diffuseGrazing: Color;
    diffuseShadow: Color;
    subSurfaceShallowCol: Color;
    subSurfaceDepthMax: number;
    subSurfaceDepthPower: number;
    subSurfaceColour: Color;
    subSurfaceBase: number;
    subSurfaceSun: number;
    subSurfaceSunFallOff: number;
    specular: number;
    roughness: number;
    iorAir: number;
    iorWater: number;
    planarReflections: boolean;
    planarReflectionStrength: number;
    planarReflectionScale: number;
    skyBase: Color;
    skyTowardsSun: Color;
    skyAwayFromSun: Color;
    skyDirectionality: number;
    directionalLightColor: Color;
    directionalLightBoost: number;
    directionalLightFallOff: number;
    depthFogDensity: Color;
    depthFogFalloff: OceanDepthFogFalloff;
    depthFogStartDistance: number;
    depthFogEndDistance: number;
    depthFogFalloffPower: number;
    refractionStrength: number;
    shallowRefractionReflectionSuppression: number;
    shallowClarityDistance: number;
    shallowClarityFloor: number;
    causticsScale: number;
    causticsAverage: number;
    causticsStrength: number;
    causticsFocalDepth: number;
    causticsDepthOfField: number;
    causticsDistortionStrength: number;
    causticsDistortionScale: number;
    causticsTexture: AssetRef;
    underwater: boolean;
    meniscusWidth: number;
    waterlineFadeDistance: number;
    underwaterInscattering: boolean;
    inscatterStrength: number;
    inscatterPhaseG: number;
    underwaterDistortion: boolean;
    distortionStrength: number;
    underwaterGodRays: boolean;
    godRayStrength: number;
    godRayDensity: number;
    causticsOnGeometry: boolean;
    /** Brightness of the caustics the water reflects onto geometry above it. 0 turns them off (the default). */
    reflectedCausticsStrength: number;
    reflectedCausticsHeight: number;
    reflectedCausticsFalloff: number;
    flow: boolean;
    dynamicWaves: boolean;
    clipSurface: boolean;
    defaultClippingState: number;
    albedo: boolean;
    intersectionFoamDepth: number;
    intersectionFoamStrength: number;
    /** Relief of textured foam. Zero keeps foam flat. Only used with a foam texture. */
    foamNormalStrength: number;
    /** Amount of submerged bubbles drawn under textured foam. Only used with a foam texture. */
    foamBubbleCoverage: number;
    /** Apparent depth of the submerged bubble layer as the view angle changes. */
    foamBubbleParallax: number;
    /** Surface roughness where textured foam covers the water. */
    foamRoughness: number;
    /** Optional detail normal map for small ripples. Assigning it turns on the detailed surface shading. Empty keeps the analytic ripples. */
    normalTexture: AssetRef;
}
export declare const OceanSurface: ComponentType<OceanSurface>;

export interface OceanUnderwaterExclusionVolume {
    extentX: number;
    extentY: number;
    extentZ: number;
}
export declare const OceanUnderwaterExclusionVolume: ComponentType<OceanUnderwaterExclusionVolume>;

export interface OceanUnderwaterPortalOccluder {
    extentX: number;
    extentY: number;
    extentZ: number;
}
export declare const OceanUnderwaterPortalOccluder: ComponentType<OceanUnderwaterPortalOccluder>;

export interface OceanUnderwaterVolume {
    extentX: number;
    extentY: number;
    extentZ: number;
}
export declare const OceanUnderwaterVolume: ComponentType<OceanUnderwaterVolume>;

export interface OceanWaterBody {
    /** Half the body's width in meters along world X, measured from the entity origin; the water spans twice this. */
    extentX: number;
    /** Half the body's length in meters along world Z, measured from the entity origin; the water spans twice this. */
    extentZ: number;
    /** Draw ocean water only inside this body. The coarsest clip level covers all authored water; nearer levels refine the shoreline. */
    confineSurface: boolean;
    clipFeather: number;
    underwaterVolume: boolean;
    underwaterDepth: number;
    flow: boolean;
    flowX: number;
    flowZ: number;
    waveOverride: boolean;
    waveWeight: number;
    waveChop: number;
    waveFeather: number;
    useLocalSpectrum: boolean;
    localSpectrumAsset: AssetRef;
    localWaveCount: number;
    localWaveAmplitude: number;
    localWaveWavelength: number;
    localWaveDirectionDegrees: number;
    localWaveExtraAmplitude: number[];
    localWaveExtraWavelength: number[];
    localWaveExtraDirectionDegrees: number[];
    /** Ocean preset whose surface values (colour, optics, foam, detail textures) apply inside this water body. Empty keeps the ocean's own surface. */
    materialOverride: AssetRef;
    /** Where water-body materials overlap, higher priorities apply over lower ones. */
    materialPriority: number;
}
export declare const OceanWaterBody: ComponentType<OceanWaterBody>;

export interface OceanWaterInteraction {
    radius: number;
    strength: number;
    minSpeed: number;
    verticalStrength: number;
    minVerticalSpeed: number;
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
    radius: number;
    amplitude: number;
}
export declare const OceanWaveImpulse: ComponentType<OceanWaveImpulse>;

export interface OceanWaveMaskTextureSource {
    extentX: number;
    extentZ: number;
    waveMaskMap: AssetRef;
    weightScale: number;
    chopScale: number;
    weightBias: number;
    chopBias: number;
    coverage: number;
    feather: number;
}
export declare const OceanWaveMaskTextureSource: ComponentType<OceanWaveMaskTextureSource>;

export interface OceanWaveSpectrum {
    windSpeed: number;
    windDirectionDegrees: number;
    turbulence: number;
    multiplier: number;
    chop: number;
    gravityScale: number;
    loopPeriod: number;
    spectrumPower: number[];
    chopScales: number[];
    gravityScales: number[];
    octaveDisabled: boolean[];
    directionalSpread: number;
    amplitudeScale: number;
    maxWavelength: number;
    weight: number;
    maxHorizontalDisplacement: number;
    maxVerticalDisplacement: number;
    respectShallowWaterAttenuation: number;
}
export declare const OceanWaveSpectrum: ComponentType<OceanWaveSpectrum>;

export interface Parent {
    parent: Entity | null;
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
    count: number;
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
    liveCount: number;
    simulatedSteps: number;
    simulatedTime: number;
    droppedTime: number;
    simulationMs: number;
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
    /** Meshes each particle draws, first submesh of each; none draws a sprite */
    meshes: AssetRef[];
    /** View layers that draw the particles */
    renderLayerMask: number;
    /**
     * Distance from the camera in metres at which particles begin to thin out
     * Minimum: 0.
     */
    thinningStart: number;
    /**
     * Distance from the camera in metres at which every particle is hidden; 0 turns thinning off
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

export interface PolyhavenPlaceholder {
    slug: string;
    assetType: string;
    downloadId: number;
}
export declare const PolyhavenPlaceholder: ComponentType<PolyhavenPlaceholder> & NoAdd;

export interface PostProcessVolume {
    weight: number;
    priority: number;
    postProcessMask: number;
    isGlobal: boolean;
    shape: PostProcessVolumeShape;
    blendDistance: number;
    tonemap: TonemapMode;
    ditherMode: number;
    ictcpChromaCompression: number;
}
export declare const PostProcessVolume: ComponentType<PostProcessVolume>;

export interface ReflectionProbe {
    blendDistance: number;
    priority: number;
    boxProjection: boolean;
    originOffsetX: number;
    originOffsetY: number;
    originOffsetZ: number;
    intensity: number;
    exposureEV: number;
    rotationDegrees: number;
    iblLowerHemisphereDarkness: number;
    captureEnvironment: boolean;
    captureResolution: number;
    updateMode: ReflectionProbeUpdateMode;
    /** Minimum: 0. */
    realtimeUpdateInterval: number;
    maxDistance: number;
    cullMask: number;
}
export declare const ReflectionProbe: ComponentType<ReflectionProbe>;

export interface RenderLayer {
    mask: number;
}
export declare const RenderLayer: ComponentType<RenderLayer>;

export interface RuntimeOnlyEntity {
    active: boolean;
}
export declare const RuntimeOnlyEntity: ComponentType<RuntimeOnlyEntity> & NoAdd;

export interface SceneBlueprintInstance {
    sourcePath: string;
    sourceGuid: string;
}
export declare const SceneBlueprintInstance: ComponentType<SceneBlueprintInstance> & NoAdd;

export interface SceneEntityTag {
    value: string;
}
export declare const SceneEntityTag: ComponentType<SceneEntityTag>;

export interface SceneSubsceneInstance {
    sourcePath: string;
    sourceGuid: string;
    offsetX: number;
    offsetY: number;
    offsetZ: number;
    hasOffset: boolean;
}
export declare const SceneSubsceneInstance: ComponentType<SceneSubsceneInstance> & NoAdd;

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
    renderLayerMask: number;
    castShadows: boolean;
    receiveShadows: boolean;
}
export declare const SkinnedMeshRenderer: ComponentType<SkinnedMeshRenderer>;

export interface SkyEnvironment {
    mode: SkyMode;
    gradientSkyTopColor: [number, number, number];
    gradientSkyHorizonColor: [number, number, number];
    gradientSkyBottomColor: [number, number, number];
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
    ambientTintSky: [number, number, number];
    ambientTintEquator: [number, number, number];
    ambientTintGround: [number, number, number];
    groundBrightnessShapeMode: SkyScalarCurveShapeMode;
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
    moonPhase01: number;
    moonArcPosition: number;
    autoMoonArc: boolean;
    moonCycleDays: number;
    moonSize: number;
    moonSize2D: number;
    moonExposureEV: number;
    fallingStarsEnabled: boolean;
    fallingStarAmount: number;
    fallingStarFrequency: number;
    fallingStarSpeed: number;
    fallingStarLength: number;
    fallingStarThickness: number;
    fallingStarDotSize: number;
    fallingStarDotSize2D: number;
    starDensity: number;
    starBrightness: number;
    starSize: number;
    starDiamondShape: number;
    starCoreSize: number;
    starGlowFalloff: number;
    twinkleSpeed: number;
    twinkleIntensity: number;
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
    profile: SplineExtrudeProfile;
    width: number;
    edgeDrop: number;
    edgeInset: number;
    crownRise: number;
    shoulderWidth: number;
    shoulderDrop: number;
    widthScale: SplineExtrudeWidthScale;
    widthMode: SplineExtrudeWidthMode;
    maxHalfWidth: number;
    seaLevelFloor: number;
    endTaperMetres: number;
    conformMode: SplinePlacementConform;
    /** What the conform ray may land on. Scene takes the nearest surface of any kind, so a ribbon passing under a tree or a bridge is swept over its roof; TerrainOnly makes scenery transparent so the ribbon follows the ground beneath it. Under TerrainOnly the drawn drape line can still ride scene props while the generated geometry follows the terrain under them; the line does not read this setting yet. */
    conformTarget: SplineConformTarget;
    lateralOffset: number;
    verticalOffset: number;
    tilesPerMetreU: number;
    tilesPerMetreV: number;
    material: AssetRef;
    /** What this run does to the ground under it. Auto reads it off the cross-section: a path grades the terrain to its own heights, a road grades and OWNS its ground so other routes stop at its edge, and a filled water region leaves the terrain alone. Setting it explicitly provisions the terrain effects on this entity; the fields on those effects stay yours to tune afterwards. Setting it to None removes the effects THIS FIELD created (undoable, and reported in the log); components you added by hand are never touched or removed by it. Deleting a recipe-created Flatten or Ground Claim by hand does not stick - the run provisions it again while the authority still grades. */
    groundAuthority: SplineGroundAuthority;
    castShadows: boolean;
    receiveShadows: boolean;
}
export declare const SplineExtrude: ComponentType<SplineExtrude>;

export interface SplineFence {
    postPool: AssetRef[];
    spanPool: AssetRef[];
    gatePool: AssetRef[];
    crestPool: AssetRef[];
    capPool: AssetRef[];
    postPitch: number;
    crestPitch: number;
    conformMode: SplinePlacementConform;
    conformTarget: SplineConformTarget;
    slopeBlend: number;
    spanMaxStretch: number;
    plantMode: SplinePlantMode;
    spanGrade: SplineSpanGrade;
    seed: number;
    overrideMaterial: AssetRef;
}
export declare const SplineFence: ComponentType<SplineFence>;

export interface SplineFenceSpanPiece {
    run: number;
    ordinalInRun: number;
    poolSlot: number;
    isGate: boolean;
}
export declare const SplineFenceSpanPiece: ComponentType<SplineFenceSpanPiece> & NoAdd;

export interface SplineGroundProvisioned {
    flatten: boolean;
    claim: boolean;
    volume: boolean;
}
export declare const SplineGroundProvisioned: ComponentType<SplineGroundProvisioned>;

export interface SplinePlacement {
    straightPool: AssetRef[];
    curvePool: AssetRef[];
    scatterPool: AssetRef[];
    spacing: number;
    fit: SplinePlacementFit;
    conformMode: SplinePlacementConform;
    conformTarget: SplineConformTarget;
    /** Which plane of the tile meets the ground. Bounds Min lifts until the mesh's lowest vertex touches, so a slab authored around its own mid-plane stands its full thickness above the ground; Pivot Plane lands the mesh's local y=0 on the surface and lets anything below it bury. Kits disagree about where their ground is and the wrong choice is a visible error either way: the measured Synty footpath slabs are 0.27 m thick with their pivot 0.19 m above their lowest vertex, so Bounds Min stands the whole slab proud where Pivot Plane leaves under 0.10 m. */
    plantMode: SplinePlantMode;
    lateralOffset: number;
    slopeBlend: number;
    maxTiltDegrees: number;
    seed: number;
    spacingJitterMetres: number;
    yawJitterDegrees: number;
    lateralJitterMetres: number;
    dropoutChance: number;
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
     * Metres across the wall. The spline's width does not change it.
     * Range: 0.05 to 100.
     */
    thickness: number;
    /**
     * Metres from the ground to the top of the wall. On a slope with Grade set to Stepped, each stretch between two points stands at least this tall everywhere.
     * Range: 0.05 to 100.
     */
    height: number;
    /** How the wall meets a slope. Racked keeps the top parallel to the ground, as a hedge or a palisade does. Stepped keeps the top of each stretch between two points level, at Height above its highest ground, and steps up or down where two stretches meet, as coursed masonry does. */
    grade: SplineWallGrade;
    /** What the wall builds where its spline turns at a point: Mitre meets the two faces on one sharp edge, Round sweeps the outside in an arc. A turn sharper than 120 degrees is always built round. Adding the wall picks Mitre for a spline of straight segments and Round for a curved one. */
    corner: SplineWallCorner;
    /** The wall's surface. Empty keeps a flat grey. Texture coordinates are in metres, along each face and up from the wall's lowest point, so the stone size is the material's own tiling. */
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

export interface TerrainGrass {
    renderMode: TerrainGrassRenderMode;
    bladesPerSquareMeter: number;
    range: number;
    densityFalloff: number;
    placementSeed: number;
    clumpSize: number;
    clumpHeightVariance: number;
    clumpAlignment: number;
    clumpGather: number;
    bladeHeight: number;
    bladeWidth: number;
    maxWidthRatio: number;
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
    rootShade: number;
    rootFadeStart: number;
    rootFadeEnd: number;
    bladeNormalForm: number;
    bladeScatterGain: number;
    groundingStrength: number;
    translucency: number;
    textureGrass: boolean;
    textureCardsPerSquareMeter: number;
    textureSize: number;
    useSplatRootColor: boolean;
    rootColor: number;
    tipColor: number;
    backlightColor: number;
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

export interface TerrainPlanetRelief {
    /** Base surface displacement along the normal (metres). ~= R/40 reads well. */
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

export interface ValueCurve {
    enabled: boolean;
    playing: boolean;
    loop: boolean;
    pingPong: boolean;
    applyToTarget: boolean;
    target: ValueCurveTarget;
    shapeMode: ValueCurveShapeMode;
    useBuiltinEasing: boolean;
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
    layerMask: number;
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
