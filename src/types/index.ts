export type NavigationTab = 
  | 'home' 
  | 'smart' 
  | 'voice' 
  | 'community' 
  | 'beta_lab' 
  | 'pulse' 
  | 'profile';

export type AppScreen = 
  | 'splash' 
  | 'onboarding' 
  | 'device_detect' 
  | 'user_interests' 
  | 'main' 
  | 'pulse_dashboard';

export type ViewportMode = 'desktop' | 'mobile_frame' | 'fullscreen_mobile' | 'pulse_dashboard';

export type DeviceFamily = 'Flagship' | 'Neo' | 'Z';

export interface DeviceCapabilities {
  gaming: {
    maxFps: number;
    touchSamplingHz: number;
    supercomputingChip: string;
    bypassCharging: boolean;
    rayTracingSupport: boolean;
  };
  camera: {
    mainSensor: string;
    vcsSensor: boolean;
    periscopeZoom: string;
    zeroShutterLag: boolean;
    studioNightMode: boolean;
  };
  display: {
    panel: string;
    resolution: string;
    pwmDimmingHz: number;
    peakNits: number;
    ltpoRange: string;
  };
  battery: {
    capacityMah: number;
    chargingWattage: number;
    siliconCarbonTech: boolean;
  };
  cooling: {
    vcAreaMm2: number;
    vcType: string;
  };
  ai: {
    npuPlatform: string;
    originOsAiVersion: string;
    onDeviceVisionModel: boolean;
  };
  connectivity: {
    wifiStandard: string;
    fiveGSub6: boolean;
    bluetoothVersion: string;
  };
}

export interface DeviceProfile {
  id: string;
  name: string;
  family: DeviceFamily;
  codename: string;
  edition: string;
  chipset: string;
  supercomputingChip: string;
  ram: string;
  storage: string;
  batteryCap: string;
  chargingSpeed: string;
  display: string;
  refreshRate: number;
  osVersion: string;
  buildNumber: string;
  // Demonstration Hardware Profile
  temperature: number; // Celsius
  fpsCurrent: number;
  fpsMax: number;
  monsterModeActive: boolean;
  batteryLevel: number;
  isCharging: boolean;
  ramUsedPercent: number;
  storageUsedPercent: number;
  networkType: '5G Ultra' | 'Wi-Fi 7' | 'Wi-Fi 6E';
  thermalStatus: 'NORMAL' | 'WARM' | 'OPTIMAL';
  capabilities: DeviceCapabilities;
}

export type SmartActivityType = 
  | 'gaming' 
  | 'creating' 
  | 'work' 
  | 'studying' 
  | 'travelling' 
  | 'watching' 
  | 'everyday';

export interface SmartSetupConfig {
  performance: string;
  performanceSub: string;
  touch: string;
  touchSub: string;
  notifications: string;
  notificationsSub: string;
  battery: string;
  batterySub: string;
  thermal: string;
  thermalSub: string;
}

export interface SmartActivity {
  id: SmartActivityType;
  title: string;
  iconName: string;
  badgeTag: string;
  tagline: string;
  description: string;
  setup: SmartSetupConfig;
  whyExplanation: string;
  originOsIntegration: {
    featureName: string;
    featureSummary: string;
    sidebarHook: string;
  };
  customizableSettings: {
    targetFps: number;
    touchResponseRate: number;
    bypassCharging: boolean;
    highFrequencyPwm: boolean;
    thermalCeilingC: number;
  };
  howToSteps: {
    stepNumber: number;
    title: string;
    instruction: string;
  }[];
}

// 9-Step Closed-Loop Experience Timeline
export type LifecycleStage = 
  | 'EXPERIENCE SHARED' 
  | 'AI UNDERSTOOD' 
  | 'SIMILAR EXPERIENCES' 
  | 'COMMUNITY SIGNAL' 
  | 'iQOO ACKNOWLEDGED' 
  | 'INVESTIGATION' 
  | 'BETA TEST' 
  | 'IMPROVEMENT' 
  | 'QUESTER VERIFICATION';

export type SignalCategory = 'loved' | 'requested' | 'trending' | 'testing';

export interface CanonicalSignal {
  id: string;
  category: SignalCategory;
  badge: 'LOVED' | 'REQUESTED' | 'TRENDING' | 'TESTING';
  title: string;
  summary: string;
  detailText: string;
  supportCount: number;
  hasSupported: boolean;
  discussionCount: number;
  trendPercentage?: number;
  positivePercentage?: number;
  activeTestersCount?: number;
  lifecycleStage: LifecycleStage;
  targetDeviceFamily: 'All' | 'Flagship' | 'Neo' | 'Z';
  relatedSignalsCount: number;
  commonContexts: string[];
  engineerNotes?: {
    author: string;
    role: string;
    date: string;
    note: string;
    targetFirmware: string;
  };
}

export interface StructuredAiSignal {
  category: string;
  experience: string;
  quest: string;
  context: string;
  device: string;
  trigger: string;
  recentUpdate: string;
  confidence: number;
  relatedCount: number;
  aiInsight: string;
  similarContext: string;
}

export interface FeedbackSubmission {
  id: string;
  timestamp: string;
  inputMode: 'voice' | 'type' | 'show';
  rawText: string;
  audioDurationSeconds?: number;
  structured: StructuredAiSignal;
  userEdited: boolean;
  status: 'clustered_into_pulse';
}

export interface BetaExperiment {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  version: string;
  badge: string;
  description: string;
  whatIsChanging: string;
  whyTested: string;
  whoCanTest: string;
  highlights: string[];
  targetDevices: string[];
  participantsCount: number;
  maxParticipants: number;
  isJoined: boolean;
  status: 'Testing' | 'Verification Open' | 'Completed';
  userFeedbackGiven?: {
    sentiment: 'Worked' | 'Partially' | 'Needs improvement';
    feedbackNote: string;
    timestamp: string;
  };
}

export interface PulseMetrics {
  totalQuesters: number;
  totalExperiences: number;
  featureRequestsCount: number;
  activeTestsCount: number;
  emergingSignals: {
    gaming: number;
    battery: number;
    camera: number;
    customization: number;
  };
  featuredAiInsight: {
    title: string;
    summary: string;
    evidenceSignalsCount: number;
    targetDevice: string;
    trend: 'Increasing' | 'Steady' | 'Rapidly Emerging';
    confidence: string;
    disclaimer: string;
    commonContext: string[];
  };
  originOsExperienceMatrix: {
    category: 'Smoothness' | 'Customization' | 'AI & Productivity' | 'Multitasking' | 'Battery Life' | 'Gaming Performance';
    score: number;
    signalCount: number;
    trend: 'up' | 'down' | 'steady';
  }[];
}

// Backwards compatibility types for legacy modules
export interface CommunityIssue {
  id: string;
  title: string;
  description: string;
  category: string;
  deviceModels: string[];
  osVersion: string;
  reportedDate: string;
  upvotes: number;
  hasUserUpvoted: boolean;
  commentsCount: number;
  status: string;
  isHot: boolean;
  aiClusterSummary: string;
  tags: string[];
}

export interface FeedbackItem {
  id: string;
  timestamp: string;
  type: string;
  title: string;
  rawText: string;
  audioDurationSeconds?: number;
  category: string;
  sentiment: string;
  urgency: string;
  deviceModel: string;
  osVersion: string;
  status: string;
  upvotes: number;
  hasUserUpvoted?: boolean;
  aiExtractedInsights: {
    rootCauseHypothesis: string;
    affectedSubsystem: string;
    confidenceScore: number;
    recommendedAction: string;
  };
  telemetrySnapshot?: {
    fps: number;
    temp: number;
    monsterMode: boolean;
    appInForeground: string;
  };
}

export interface UserInterest {
  id: string;
  label: string;
  icon: string;
  category: string;
  description: string;
}

export interface PulseCluster {
  id: string;
  title: string;
  category: string;
  severity: 'Critical' | 'Moderate' | 'Low';
  affectedDevices: string[];
  reportCount: number;
  sentimentScore: number;
  firstDetected: string;
  trendingDirection: 'up' | 'down' | 'steady';
  aiRootCause: string;
  recommendedAction: string;
  status: string;
}
