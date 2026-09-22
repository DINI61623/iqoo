import { UserInterest } from '../types';

export const USER_INTERESTS: UserInterest[] = [
  {
    id: 'competitive-gaming',
    label: 'Competitive eSports & FPS',
    icon: 'Gamepad2',
    category: 'Gaming',
    description: 'Targeting solid 120/144 FPS in BGMI, COD:M, Free Fire MAX, and Apex with low touch latency.',
  },
  {
    id: 'frame-interpolation',
    label: 'Q-Chip Super-Resolution & MEMC',
    icon: 'Sparkles',
    category: 'Graphics',
    description: 'AI hardware frame upscaling to 144FPS with dual-chip rendering.',
  },
  {
    id: 'night-photography',
    label: 'Street & Night Photography',
    icon: 'Camera',
    category: 'Imaging',
    description: 'Ultra-sensing VCS True Color cameras, Astro mode, and Snapshot tracking.',
  },
  {
    id: 'monster-tuning',
    label: 'Thermal & Monster Performance',
    icon: 'Flame',
    category: 'Performance',
    description: 'Bypass charging, 6.0K VC cooling chamber management, and aggressive CPU governor.',
  },
  {
    id: 'battery-endurance',
    label: 'All-Day Battery & 120W FlashCharge',
    icon: 'Zap',
    category: 'Power',
    description: 'Intelligent overnight charging, standby drain reduction, and battery health protection.',
  },
  {
    id: 'spatial-audio',
    label: 'Immersive Haptics & Spatial Audio',
    icon: 'Volume2',
    category: 'Sensory',
    description: 'Dual 4D linear vibration motors and directional sound staging for gaming.',
  },
  {
    id: 'funtouch-customization',
    label: 'Origin/Funtouch Customization',
    icon: 'Sliders',
    category: 'UI/UX',
    description: 'Dynamic light effects, always-on display widgets, and smooth micro-animations.',
  },
  {
    id: 'beta-testing',
    label: 'Beta OTA Testing & Feedback',
    icon: 'MessageSquareShare',
    category: 'Community',
    description: 'Direct pipeline to iQOO engineering to test early kernel builds and feature drops.',
  }
];
