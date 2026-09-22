import { SmartActivity } from '../types';

export const SMART_ACTIVITIES: Record<string, SmartActivity> = {
  gaming: {
    id: 'gaming',
    title: 'GAMING',
    iconName: 'Gamepad2',
    badgeTag: 'COMPETITIVE ESPORTS',
    tagline: 'Your Gaming Setup',
    description: 'Push performance when every frame matters with Supercomputing Chip Q3 dual-chip dispatch.',
    setup: {
      performance: 'HIGH',
      performanceSub: 'Snapdragon 8 Elite Max Governor (4.32GHz)',
      touch: 'OPTIMIZED',
      touchSub: '2000Hz Instant Touch & Anti-Mistouch Mesh',
      notifications: 'FOCUSED',
      notificationsSub: 'Critical Calls Heads-Up Only & Priority DND',
      battery: 'BALANCED',
      batterySub: 'Direct Motherboard Power Bypass Active',
      thermal: 'MONITORED',
      thermalSub: '3D Dual-VC Dynamic Core Cooling'
    },
    whyExplanation: 'Optimized for sustained performance during long gaming sessions while reducing thermal throttling and preventing interruptions.',
    originOsIntegration: {
      featureName: 'OriginOS 6 Game Space 4.0',
      featureSummary: 'Dual-Engine V-Sync frame stabilizer & Ray-tracing coprocessor dispatch enabled.',
      sidebarHook: 'Swipe from top-left notch for Real-time FPS & GPU Frequency HUD'
    },
    customizableSettings: {
      targetFps: 144,
      touchResponseRate: 2000,
      bypassCharging: true,
      highFrequencyPwm: true,
      thermalCeilingC: 41
    },
    howToSteps: [
      {
        stepNumber: 1,
        title: 'Activate Monster Mode in Quick Settings',
        instruction: 'Swipe down the OriginOS 6 Control Center and tap the Yellow Monster Mode tile to enable peak clock governors.'
      },
      {
        stepNumber: 2,
        title: 'Launch Game Space via Sidebar',
        instruction: 'Inside any game, swipe inward from the upper-left bezel corner to open Game Space overlay.'
      },
      {
        stepNumber: 3,
        title: 'Toggle Q3 Super Frame Rate',
        instruction: 'Under Display Acceleration, turn on "144FPS Frame Interpolation" and select "Low Latency Priority".'
      }
    ]
  },
  creating: {
    id: 'creating',
    title: 'CREATING',
    iconName: 'Camera',
    badgeTag: 'STUDIO & NIGHT VCS',
    tagline: 'Your Creating Setup',
    description: 'Capture and edit with pre-warmed VCS True Color pipelines, zero shutter lag, and P3 display calibration.',
    setup: {
      performance: 'DYNAMIC',
      performanceSub: 'Real-Time Neural Engine Burst Buffer',
      touch: 'CALIBRATED',
      touchSub: 'Fine-Grained Shutter & Slider Response',
      notifications: 'SILENT',
      notificationsSub: 'Zero-Distraction Viewfinder Mode',
      battery: 'BALANCED',
      batterySub: 'Pre-Warmed Sensor Standby Loop',
      thermal: 'OPTIMIZED',
      thermalSub: 'ISP & Periscope Thermal Throttling Guard'
    },
    whyExplanation: 'Allocates high-throughput memory buffers to the VCS camera pipeline to eliminate shutter lag and renders 100% P3 wide color gamut preview.',
    originOsIntegration: {
      featureName: 'OriginOS 6 Studio VCS Engine',
      featureSummary: 'Zero shutter lag raw burst capture with real-time AI portrait edge separation.',
      sidebarHook: 'Double-click Volume Down from screen-off to instant capture in 0.3s'
    },
    customizableSettings: {
      targetFps: 60,
      touchResponseRate: 360,
      bypassCharging: false,
      highFrequencyPwm: true,
      thermalCeilingC: 43
    },
    howToSteps: [
      {
        stepNumber: 1,
        title: 'Enable VCS Studio Portrait Mode',
        instruction: 'Open Camera app, swipe to Portrait tab, and select "VCS True Color" for optical skin-tone calibration.'
      },
      {
        stepNumber: 2,
        title: 'Turn on Zero Shutter Lag Snapshot',
        instruction: 'Tap top AI toggle and ensure "Motion Snapshot V3" is active for zero blur on fast subjects.'
      },
      {
        stepNumber: 3,
        title: 'Use OriginOS Pro Display Color Mode',
        instruction: 'Go to Settings → Display → Screen Color and select "P3 Professional Studio Gamma".'
      }
    ]
  },
  work: {
    id: 'work',
    title: 'WORKING',
    iconName: 'Briefcase',
    badgeTag: 'FOCUS & PRODUCTIVITY',
    tagline: 'Your Work Setup',
    description: 'Make your device respond to your workflow with 2160Hz eyecare dimming and smart priority sync.',
    setup: {
      performance: 'EFFICIENT',
      performanceSub: 'Smooth OriginOS 6 Dynamic Scheduling',
      touch: 'SMOOTH',
      touchSub: 'Natural Gesture Curve Interpolation',
      notifications: 'PRIORITY ONLY',
      notificationsSub: 'VIP Contacts, Work Email & Calendar Alerts',
      battery: 'EXTENDED ECO',
      batterySub: 'Intelligent Background Sync Throttling',
      thermal: 'COOL',
      thermalSub: 'Sub-32°C Low Power State'
    },
    whyExplanation: 'Reduces visual fatigue with 2160Hz anti-flicker PWM while suppressing non-work notifications and conserving battery.',
    originOsIntegration: {
      featureName: 'OriginOS 6 Smart Sidebar & Multi-Window',
      featureSummary: 'Instant split-screen doc translation & atomic memo note integration.',
      sidebarHook: 'Swipe inward and hold from right edge to open Smart Sidebar apps'
    },
    customizableSettings: {
      targetFps: 90,
      touchResponseRate: 300,
      bypassCharging: false,
      highFrequencyPwm: true,
      thermalCeilingC: 38
    },
    howToSteps: [
      {
        stepNumber: 1,
        title: 'Configure OriginOS Focus Mode',
        instruction: 'Go to Settings → Digital Wellbeing & Focus → Select "Work Profile" with whitelist notifications.'
      },
      {
        stepNumber: 2,
        title: 'Enable 2160Hz High-Frequency Eyecare',
        instruction: 'Go to Display Settings → Eyecare Protection → Toggle on "Circadian Anti-Flicker".'
      },
      {
        stepNumber: 3,
        title: 'Set up Atomic Floating Windows',
        instruction: 'In Multi-tasking, drag any app card upward to pin it as a floating atomic widget.'
      }
    ]
  },
  studying: {
    id: 'studying',
    title: 'STUDYING',
    iconName: 'BookOpen',
    badgeTag: 'DEEP STUDY & READING',
    tagline: 'Your Study Setup',
    description: 'Maximize focus with e-paper monochromatic eyecare reading mode and strict notification barriers.',
    setup: {
      performance: 'ENERGY SAVING',
      performanceSub: 'Quiet CPU Governor & Cool Thermals',
      touch: 'PRECISION',
      touchSub: 'Stylus & Finger Micro-Annotation Accuracy',
      notifications: 'TOTAL DND',
      notificationsSub: 'Emergency Breakthrough Calls Only',
      battery: 'ALL-DAY READ',
      batterySub: 'Paper Display Simulation (15+ Hours)',
      thermal: 'AMBIENT',
      thermalSub: 'Ultra-Cool Passive Dissipation'
    },
    whyExplanation: 'Simulates paper-like contrast for document annotation while silencing all non-essential app wakeups for deep study focus.',
    originOsIntegration: {
      featureName: 'OriginOS 6 Paper Eyecare Engine',
      featureSummary: 'Circadian color temperature shift with paper grain texture overlay.',
      sidebarHook: 'Swipe Smart Sidebar for instant Voice-to-Text Atomic Note'
    },
    customizableSettings: {
      targetFps: 60,
      touchResponseRate: 300,
      bypassCharging: false,
      highFrequencyPwm: true,
      thermalCeilingC: 36
    },
    howToSteps: [
      {
        stepNumber: 1,
        title: 'Enable Paper Reading Mode',
        instruction: 'Swipe down Control Center and tap "Paper Eyecare" for black-and-white or sepia reading mode.'
      },
      {
        stepNumber: 2,
        title: 'Activate Study DND Timer',
        instruction: 'Tap the Focus tile and set a 50-minute Pomodoro block to block all non-essential alerts.'
      },
      {
        stepNumber: 3,
        title: 'Use Smart Split Reader',
        instruction: 'Open textbook PDF on left and Atomic Notes memo on right using split-screen gesture.'
      }
    ]
  },
  travelling: {
    id: 'travelling',
    title: 'TRAVELLING',
    iconName: 'Compass',
    badgeTag: 'TRANSIT & MOBILITY',
    tagline: 'Your Travel Setup',
    description: 'Seamless network handoffs between cell towers, GPS antenna amplification, and maximum battery endurance.',
    setup: {
      performance: 'ADAPTIVE GPS',
      performanceSub: 'Dual-Band L1+L5 Navigation Boost',
      touch: 'HIGH OUTDOOR',
      touchSub: 'Wet Hand & Sunlight Glove Touch Detection',
      notifications: 'TRAVEL TRANSIT',
      notificationsSub: 'Flight, Train, Boarding Pass & Ride Status',
      battery: 'EXTENDED TRIP',
      batterySub: 'Smart Background App Freeze & Power Bank Mode',
      thermal: 'SUNLIGHT READY',
      thermalSub: 'Outdoor Thermal Throttle Protection'
    },
    whyExplanation: 'Prioritizes dual-frequency satellite lock and high-brightness outdoor sunlight readability while conserving battery for transit.',
    originOsIntegration: {
      featureName: 'OriginOS 6 Atomic Travel Island',
      featureSummary: 'Live dynamic lock screen banner with flight gate, train platform, and taxi license plate.',
      sidebarHook: 'Always-On Display shows offline boarding pass QR code'
    },
    customizableSettings: {
      targetFps: 90,
      touchResponseRate: 360,
      bypassCharging: false,
      highFrequencyPwm: true,
      thermalCeilingC: 40
    },
    howToSteps: [
      {
        stepNumber: 1,
        title: 'Turn on Atomic Travel Service',
        instruction: 'Open Settings → Jovi Smart Services → Toggle "Smart Travel" for auto flight detection.'
      },
      {
        stepNumber: 2,
        title: 'Enable Sunlight High-Brightness Mode',
        instruction: 'Under Display Settings, toggle "Extra Brightness Boost" for 4500 nits outdoor visibility.'
      },
      {
        stepNumber: 3,
        title: 'Activate Dual 5G Auto-Switch',
        instruction: 'Go to Mobile Network → Dual SIM Acceleration to prevent signal drops in subway tunnels.'
      }
    ]
  },
  watching: {
    id: 'watching',
    title: 'WATCHING',
    iconName: 'Tv',
    badgeTag: 'CINEMA & STREAMING',
    tagline: 'Your Cinema Setup',
    description: 'Transform mobile viewing with HDR Super Dynamic Resolution and panoramic stereo sound staging.',
    setup: {
      performance: 'SDR TO HDR',
      performanceSub: 'Q3 Visual Coprocessor Enhancement Engine',
      touch: 'MISTOUCH GUARD',
      touchSub: 'Edge Palm Rejection for Landscape Grip',
      notifications: 'HEADS-UP OFF',
      notificationsSub: 'Subtle Side Light Glow Only',
      battery: 'OPTIMIZED STREAM',
      batterySub: 'AV1 Hardware Decoder Energy Saving',
      thermal: 'BALANCED',
      thermalSub: 'Even Surface Heat Dissipation'
    },
    whyExplanation: 'Uses the Q3 chip to upscale SDR content to HDR in real time while optimizing stereo audio staging for movies.',
    originOsIntegration: {
      featureName: 'OriginOS 6 Vision Boost Cinema',
      featureSummary: 'Dynamic contrast curve enhancement with directional stereo sound expansion.',
      sidebarHook: 'Swipe inward during full screen video to adjust cinema brightness curve'
    },
    customizableSettings: {
      targetFps: 60,
      touchResponseRate: 300,
      bypassCharging: false,
      highFrequencyPwm: true,
      thermalCeilingC: 38
    },
    howToSteps: [
      {
        stepNumber: 1,
        title: 'Turn on Visual Display Enhancement',
        instruction: 'Go to Display Settings → Visual Enhancement → Select "Super Resolution SDR-to-HDR".'
      },
      {
        stepNumber: 2,
        title: 'Activate Panoramic Audio',
        instruction: 'Under Sound Settings → Sound Quality & Effects → Choose "Panoramic Cinema Sound".'
      },
      {
        stepNumber: 3,
        title: 'Lock Orientation in Full Screen',
        instruction: 'Tap the padlock icon on the video toolbar to lock landscape playback.'
      }
    ]
  },
  everyday: {
    id: 'everyday',
    title: 'EVERYDAY',
    iconName: 'Globe',
    badgeTag: 'ALL-DAY FLUIDITY',
    tagline: 'Your Everyday Setup',
    description: 'Harmonious balance of silky OriginOS 6 144Hz LTPO smoothness and BlueOcean battery endurance.',
    setup: {
      performance: 'ADAPTIVE LTPO',
      performanceSub: 'Seamless 1Hz–144Hz Refresh Scaling',
      touch: 'NATURAL',
      touchSub: 'OriginOS Smooth Gesture Dynamics',
      notifications: 'ALL ACTIVE',
      notificationsSub: 'Standard Filtered Alert Stream',
      battery: 'SMART ALL-DAY',
      batterySub: 'BlueOcean AI Battery Management',
      thermal: 'BALANCED',
      thermalSub: 'Adaptive Ambient Thermal Scaling'
    },
    whyExplanation: 'Dynamically adapts refresh rate between 1Hz and 144Hz for maximum power efficiency while maintaining OriginOS fluidity.',
    originOsIntegration: {
      featureName: 'OriginOS 6 Smoothness Engine',
      featureSummary: 'Zero-delay app launching with real-time dynamic blur and fluid motion interpolation.',
      sidebarHook: 'Smart suggestions card appears automatically on OriginOS Lock Screen'
    },
    customizableSettings: {
      targetFps: 120,
      touchResponseRate: 300,
      bypassCharging: false,
      highFrequencyPwm: false,
      thermalCeilingC: 39
    },
    howToSteps: [
      {
        stepNumber: 1,
        title: 'Verify Dynamic LTPO Mode',
        instruction: 'Go to Settings → Display & Brightness → Screen Refresh Rate → Select "Smart Switch (1Hz–144Hz)".'
      },
      {
        stepNumber: 2,
        title: 'Activate Smart Sleep Battery Protection',
        instruction: 'Under Battery Settings, turn on "Optimized Night Charging" to preserve silicon-carbon battery health.'
      },
      {
        stepNumber: 3,
        title: 'Configure OriginOS Atomic Island',
        instruction: 'Enable top-notch status indicators for active food delivery, music playback, and taxi alerts.'
      }
    ]
  }
};
