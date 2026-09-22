import { CanonicalSignal, LifecycleStage } from '../types';

export const CANONICAL_SIGNALS: CanonicalSignal[] = [
  {
    id: 'sig-multitask-smoothness',
    category: 'loved',
    badge: 'LOVED',
    title: 'Smoothness during multitasking feels noticeably better',
    summary: 'Questers report remarkable app-switching fluidity with OriginOS 6 Dynamic Scheduling and zero frame drop.',
    detailText: 'Telemetry signals across iQOO 15 and Neo series Questers indicate a 92% satisfaction score for background app retention and instantaneous atomic card expansion without stutter.',
    supportCount: 3410,
    hasSupported: true,
    discussionCount: 218,
    positivePercentage: 92,
    lifecycleStage: 'QUESTER VERIFICATION',
    targetDeviceFamily: 'Flagship',
    relatedSignalsCount: 3410,
    commonContexts: ['OriginOS 6 Multi-window', '16GB LPDDR5X RAM', 'Atomic Island', '144Hz LTPO'],
    engineerNotes: {
      author: 'Wei Zhang',
      role: 'OriginOS System Performance Architect',
      date: 'Yesterday',
      note: 'Verified across 18,000+ app switching benchmark cycles. Memory compression and priority scheduling are confirmed stable.',
      targetFirmware: 'Shipped in OriginOS 6.0 Stable'
    }
  },
  {
    id: 'sig-granular-perf-controls',
    category: 'requested',
    badge: 'REQUESTED',
    title: 'Questers want more granular performance controls',
    summary: 'Demand for independent per-game CPU/GPU clock frequency caps and custom thermal threshold sliders.',
    detailText: 'Power-user Questers requested an advanced tuning panel in Game Space to allow manual governor locking, customized thermal throttling curves, and forced 144Hz refresh rate locking for tournament titles.',
    supportCount: 2430,
    hasSupported: false,
    discussionCount: 342,
    trendPercentage: 34,
    lifecycleStage: 'BETA TEST',
    targetDeviceFamily: 'All',
    relatedSignalsCount: 2430,
    commonContexts: ['Game Space 4.0', 'Custom Clock Governors', 'Thermal Ceiling 42°C', 'Developer Mode'],
    engineerNotes: {
      author: 'Kiran Rao',
      role: 'iQOO Thermal & Performance Lead',
      date: '2 days ago',
      note: 'Beta implementation #BETA-PERF-06 is currently live in Beta Lab for Questers testing customizable thermal governors.',
      targetFirmware: 'OriginOS 6.2.0 OTA Beta 2'
    }
  },
  {
    id: 'sig-gaming-battery-exp',
    category: 'trending',
    badge: 'TRENDING',
    title: 'Battery experience during long gaming sessions',
    summary: 'Signal volume +28% this week regarding sustained power draw during 90FPS and 120FPS gaming sessions.',
    detailText: '486 Questers reported elevated battery consumption during continuous competitive gaming sessions exceeding 45 minutes, with common interest in motherboard bypass charging automation.',
    supportCount: 1845,
    hasSupported: true,
    discussionCount: 264,
    trendPercentage: 28,
    lifecycleStage: 'INVESTIGATION',
    targetDeviceFamily: 'Flagship',
    relatedSignalsCount: 1845,
    commonContexts: ['Long Gaming Sessions (45+ min)', 'BGMI 120FPS Mode', 'Motherboard Bypass Charging', 'Battery Temp > 38°C'],
    engineerNotes: {
      author: 'Anil Mehta',
      role: 'Power Subsystem Engineer',
      date: 'Today',
      note: 'Investigating thermal governor decay curves. Deploying bypass auto-trigger fix so power bypass activates seamlessly without manual toggling.',
      targetFirmware: 'Firmware Patch KG-842'
    }
  },
  {
    id: 'sig-new-thermal-exp',
    category: 'testing',
    badge: 'TESTING',
    title: 'New thermal-management experience',
    summary: 'Active prototype testing adaptive 3D Vapor Chamber vapor dissipation algorithm with Q3 coprocessor offloading.',
    detailText: 'Currently undergoing closed-loop verification with 342 Questers in Beta Lab. Early logs show a 2.4°C temperature drop during peak GPU ray-tracing loads.',
    supportCount: 970,
    hasSupported: false,
    discussionCount: 112,
    activeTestersCount: 342,
    lifecycleStage: 'BETA TEST',
    targetDeviceFamily: 'All',
    relatedSignalsCount: 970,
    commonContexts: ['3D Dual-VC Cooling', 'Supercomputing Q3', 'Ambient 32°C', 'Beta Lab Test #02'],
    engineerNotes: {
      author: 'Dr. Lin Chen',
      role: 'Hardware Thermal Architecture Lead',
      date: '3 days ago',
      note: 'Feedback rating: 88% Worked, 10% Partially, 2% Needs Improvement. Preparing final release candidate.',
      targetFirmware: 'Beta Lab Build #TH-02'
    }
  }
];

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  'EXPERIENCE SHARED',
  'AI UNDERSTOOD',
  'SIMILAR EXPERIENCES',
  'COMMUNITY SIGNAL',
  'iQOO ACKNOWLEDGED',
  'INVESTIGATION',
  'BETA TEST',
  'IMPROVEMENT',
  'QUESTER VERIFICATION'
];
