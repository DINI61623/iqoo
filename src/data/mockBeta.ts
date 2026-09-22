import { BetaExperiment } from '../types';

export const BETA_EXPERIMENTS: BetaExperiment[] = [
  {
    id: 'beta-thermal-exp',
    title: 'Thermal Experience Test (KG-842)',
    subtitle: 'A new experience designed to improve sustained gaming sessions.',
    category: 'Thermals & Sustained Performance',
    version: 'Beta Build v6.2.0-TH2',
    badge: 'ACTIVE TEST',
    description: 'Direct response to 486 Quester thermal signals. This prototype tests a smoothed 12-step thermal governor decay slope with automated motherboard power bypass during long gaming matches.',
    whatIsChanging: 'Replaces abrupt 3-step frequency step-down with a continuous 12-step curve, preventing sudden frame drops when VC temp crosses 40°C.',
    whyTested: 'Questers reported micro-stutters during extended BGMI matches. This test evaluates whether the new governor maintains 144FPS frame pacing with cooler surface temperatures.',
    whoCanTest: 'Enrolled Questers using iQOO 15, iQOO 15R, or Neo 10 Pro with OriginOS 6.',
    highlights: [
      '12-step continuous GPU clock interpolation',
      'Automatic motherboard bypass charging when plugged in > 20% battery',
      'Reduces peak surface temperature by 2.4°C',
      'Prevents frame pacing jitter in competitive titles'
    ],
    targetDevices: ['iQOO 15', 'iQOO 15R', 'iQOO Neo 10 Pro'],
    participantsCount: 342,
    maxParticipants: 500,
    isJoined: true,
    status: 'Testing',
    userFeedbackGiven: undefined
  },
  {
    id: 'beta-lock-screen',
    title: 'Granular Performance & Lock Screen Controls',
    subtitle: 'Per-game clock caps and depth-effect wallpaper customization.',
    category: 'OriginOS 6 UI & Game Space',
    version: 'Beta Build v6.2.0-EA1',
    badge: 'EXPERIMENT',
    description: 'Tests granular CPU/GPU frequency sliders inside Game Space along with depth-blended typography on the OriginOS 6 lock screen with less than 0.4%/hour battery overhead.',
    whatIsChanging: 'Adds an "Advanced Governor" submenu to Game Space and unlocks custom font layering behind portrait wallpaper subjects.',
    whyTested: 'Requested by 2,430 Questers who wanted tournament-level governor tuning without third-party root tools.',
    whoCanTest: 'Questers on all iQOO Flagship and Neo series devices.',
    highlights: [
      'Independent GPU governor clock ceiling sliders',
      'Layered Clock Typography behind portrait subjects',
      'Live Bluetooth Earphone & Smartwatch power rings',
      'Ultra-low power Always-On Display (1Hz LTPO refresh)'
    ],
    targetDevices: ['iQOO 15', 'iQOO 15R', 'iQOO Neo 10 Pro'],
    participantsCount: 418,
    maxParticipants: 600,
    isJoined: false,
    status: 'Testing',
    userFeedbackGiven: undefined
  },
  {
    id: 'beta-vcs-portrait-v2',
    title: 'AI VCS Night Portrait Studio 2.0',
    subtitle: 'Zero-artifact fine hair boundary separation under warm fluorescent night lights.',
    category: 'Imaging & Neural ISP',
    version: 'Beta Build v2.1.0-CAM',
    badge: 'VERIFICATION READY',
    description: 'Test next-generation neural portrait segmentation designed specifically for complex spectacles and fine hair in dim indoor lighting environments.',
    whatIsChanging: 'Fine-tunes the bionic spectral sensor neural weights for boundary classification around glasses and fine textures.',
    whyTested: 'Address 142 Quester voice signals regarding edge blur clipping wireframe spectacles in low light.',
    whoCanTest: 'iQOO 15 Flagship and Neo 10 Pro camera testers.',
    highlights: [
      'Zero shutter lag instant RAW bionic spectral capture',
      'True-Color skin tone preservation under sodium-vapor streetlights',
      'Periscope optical bokeh depth mapping preview',
      'Studio lighting relight simulation in gallery post-edit'
    ],
    targetDevices: ['iQOO 15', 'iQOO Neo 10 Pro'],
    participantsCount: 289,
    maxParticipants: 400,
    isJoined: false,
    status: 'Verification Open',
    userFeedbackGiven: undefined
  }
];
