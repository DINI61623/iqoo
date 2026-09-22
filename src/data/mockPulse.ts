import { PulseMetrics, DeviceFamily } from '../types';

export const PULSE_METRICS_DATA: PulseMetrics = {
  totalQuesters: 12480,
  totalExperiences: 18942,
  featureRequestsCount: 4230,
  activeTestsCount: 18,
  emergingSignals: {
    gaming: 28,
    battery: 16,
    camera: 11,
    customization: 34
  },
  featuredAiInsight: {
    title: 'Gaming Thermal Experience Pattern Detected',
    summary: 'The experience is concentrated around sustained high-performance gaming sessions exceeding 45 minutes, with common context across tournament FPS titles and warm ambient environments.',
    evidenceSignalsCount: 527,
    targetDevice: 'iQOO 15 Flagship & Neo Series (OriginOS 6)',
    trend: 'Rapidly Emerging',
    confidence: '98.4% AI Confidence',
    disclaimer: 'Demonstration Experience Intelligence synthesized from natural voice feedback, telemetry logs, and community signals. Not a verified hardware defect.',
    commonContext: ['Long sessions (45+ min)', 'High performance 120FPS', 'Warm ambient environment (> 30°C)', 'Continuous GPU load']
  },
  originOsExperienceMatrix: [
    { category: 'Gaming Performance', score: 98, signalCount: 5410, trend: 'up' },
    { category: 'Smoothness', score: 96, signalCount: 4290, trend: 'up' },
    { category: 'Multitasking', score: 91, signalCount: 2180, trend: 'steady' },
    { category: 'AI & Productivity', score: 88, signalCount: 1940, trend: 'up' },
    { category: 'Battery Life', score: 84, signalCount: 3120, trend: 'steady' },
    { category: 'Customization', score: 78, signalCount: 2430, trend: 'up' }
  ]
};

export interface PulseFamilyBreakdown {
  family: DeviceFamily | 'All';
  totalDevicesActive: number;
  topSignalCategory: string;
  sentimentRating: number;
  activeHotIssues: number;
  familyProfileDesc: string;
}

export const DEVICE_FAMILY_METRICS: Record<string, PulseFamilyBreakdown> = {
  All: {
    family: 'All',
    totalDevicesActive: 12480,
    topSignalCategory: 'Gaming Thermal & Sustained Battery',
    sentimentRating: 89,
    activeHotIssues: 4,
    familyProfileDesc: 'Aggregated experience across all connected iQOO smartphone families running OriginOS 6.'
  },
  Flagship: {
    family: 'Flagship',
    totalDevicesActive: 7820,
    topSignalCategory: 'Supercomputing Q3 Dual-Engine & 144FPS Stability',
    sentimentRating: 92,
    activeHotIssues: 2,
    familyProfileDesc: 'Concentrated around Snapdragon 8 Elite, 3D IceCore VC cooling, and 2K 144Hz LTPO display tuning.'
  },
  Neo: {
    family: 'Neo',
    totalDevicesActive: 3410,
    topSignalCategory: 'Dimensity 9400 & Motherboard Bypass Charging',
    sentimentRating: 87,
    activeHotIssues: 1,
    familyProfileDesc: 'Focused on esports performance endurance, flat screen 144Hz touch response, and rapid charging thermals.'
  },
  Z: {
    family: 'Z',
    totalDevicesActive: 1250,
    topSignalCategory: 'BlueOcean Battery Life & Daily All-Day Smoothness',
    sentimentRating: 86,
    activeHotIssues: 1,
    familyProfileDesc: 'Prioritizing battery endurance, 6000mAh cycle longevity, and smooth everyday multitasking.'
  }
};

// Aliases for legacy compatibility
export const PULSE_METRICS = {
  totalVoiceReports: 14280,
  activeIssuesTracked: 46,
  aiClustersActive: 12,
  averageSentimentIndex: 78.4,
  signalToPatchTimeAvgDays: 4.8,
  topReportedCategory: 'Gaming & FPS (44%)',
  topDeviceSignal: 'iQOO 15 Flagship (52%)',
  sentimentBreakdown: {
    positive: 62,
    neutral: 24,
    negative: 14
  }
};

export const PULSE_CLUSTERS = [];
