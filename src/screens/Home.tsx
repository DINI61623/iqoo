import React from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  Gamepad2, 
  Camera, 
  Zap, 
  Battery, 
  HardDrive, 
  Thermometer, 
  Wifi, 
  Sparkles, 
  Heart, 
  Lightbulb, 
  Flame,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { DeviceVisualizer } from '../components/device/DeviceVisualizer';
import './Screens.css';

export const Home: React.FC = () => {
  const { 
    selectedDevice, 
    setCurrentTab, 
    openSmartWithActivity, 
    openTellIqoo, 
    openQuesterVoice,
    appliedSetupActivity
  } = useApp();

  return (
    <div className="desktop-screen-page home-page animate-fade-scale">
      {/* 1. TOP GREETING & CONNECTED STATUS BAR */}
      <div className="home-top-status-header">
        <div className="greeting-group">
          <span className="greeting-pill font-tech">COMMAND CENTER</span>
          <h2 className="greeting-text">Good morning, Alex</h2>
        </div>

        <div className="home-status-badges-group">
          {/* Active Quest Pill */}
          <div 
            className="home-quest-status-pill"
            onClick={() => setCurrentTab('smart')}
            title="Switch or customize your active quest"
          >
            <Compass size={14} className="quest-compass-icon" />
            <span className="font-tech">CURRENT QUEST: {appliedSetupActivity.toUpperCase()} (OPTIMIZED)</span>
            <span className="quest-pill-change font-tech">CHANGE</span>
          </div>

          {/* Connected Device Badge */}
          <div className="device-connection-badge">
            <div className="device-conn-dot" />
            <span className="device-conn-name font-tech">{selectedDevice.name}</span>
            <span className="device-conn-sep">•</span>
            <span className="device-conn-status font-tech">{selectedDevice.family}</span>
            <span className="device-conn-sep">•</span>
            <span className="device-conn-os font-tech">{selectedDevice.osVersion.split(' • ')[0]}</span>
          </div>
        </div>
      </div>

      {/* 2. HERO PRODUCT SHOWCASE SECTION */}
      <section className="feature-primary hero-banner-card">
        {/* Left: Product Value & Direct CTAs */}
        <div className="hero-banner-left">
          <div className="hero-eyebrow font-tech">
            <Sparkles size={14} className="hero-sparkle" />
            <span>INTELLIGENT DEVICE ECOSYSTEM</span>
          </div>

          <h1 className="text-hero hero-main-title">
            YOUR iQOO.<br />
            YOUR QUEST.
          </h1>

          <p className="hero-supporting-line">
            One intelligent experience built around how you use your device. Connect what you do with how your iQOO responds.
          </p>

          <div className="hero-actions-group">
            <button 
              className="clean-primary-btn hero-primary-btn"
              onClick={() => setCurrentTab('smart')}
            >
              <span>Optimize My Quest</span>
              <ArrowRight size={16} />
            </button>

            <button 
              className="hero-secondary-link-btn"
              onClick={openTellIqoo}
            >
              <MessageSquare size={16} />
              <span>Tell iQOO</span>
            </button>
          </div>
        </div>

        {/* Right: Premium iQOO Product Visualizer */}
        <div className="hero-visual-wrapper">
          <DeviceVisualizer />
        </div>
      </section>

      {/* 3. QUICK DEVICE SNAPSHOT (Single Elegant Status Strip - Clearly Labeled Demo Profile) */}
      <section className="device-snapshot-strip glass-card">
        <div className="snapshot-header-tag font-tech">
          <ShieldCheck size={13} className="snapshot-shield" />
          <span>DEMO HARDWARE PROFILE</span>
        </div>

        <div className="snapshot-item">
          <div className="snapshot-icon-wrap icon-emerald">
            <Battery size={20} />
          </div>
          <div className="snapshot-info">
            <span className="snapshot-label font-tech">BATTERY</span>
            <div className="snapshot-val-row">
              <span className="snapshot-value font-tech">{selectedDevice.batteryLevel}%</span>
              <span className="snapshot-sub">{selectedDevice.chargingSpeed.split(' +')[0]}</span>
            </div>
          </div>
        </div>

        <div className="snapshot-divider" />

        <div className="snapshot-item">
          <div className="snapshot-icon-wrap icon-blue">
            <HardDrive size={20} />
          </div>
          <div className="snapshot-info">
            <span className="snapshot-label font-tech">STORAGE</span>
            <div className="snapshot-val-row">
              <span className="snapshot-value font-tech">{selectedDevice.storageUsedPercent}%</span>
              <span className="snapshot-sub">{selectedDevice.storage.split(' ')[0]} UFS 4.1</span>
            </div>
          </div>
        </div>

        <div className="snapshot-divider" />

        <div className="snapshot-item">
          <div className="snapshot-icon-wrap icon-amber">
            <Thermometer size={20} />
          </div>
          <div className="snapshot-info">
            <span className="snapshot-label font-tech">THERMAL</span>
            <div className="snapshot-val-row">
              <span className="snapshot-value font-tech">{selectedDevice.thermalStatus}</span>
              <span className="snapshot-sub">{selectedDevice.temperature}°C 3D VC</span>
            </div>
          </div>
        </div>

        <div className="snapshot-divider" />

        <div className="snapshot-item">
          <div className="snapshot-icon-wrap icon-cyan">
            <Wifi size={20} />
          </div>
          <div className="snapshot-info">
            <span className="snapshot-label font-tech">NETWORK</span>
            <div className="snapshot-val-row">
              <span className="snapshot-value font-tech">GOOD</span>
              <span className="snapshot-sub">{selectedDevice.networkType} Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PERSONALIZED DISCOVERY (3 Large Visual Modules) */}
      <section className="desktop-section personalized-discovery-section">
        <div className="section-title-wrapper">
          <div className="section-header-block">
            <span className="section-eyebrow font-tech">PERSONALIZED DISCOVERY</span>
            <h2 className="text-section-title">MADE FOR YOUR QUEST</h2>
            <p className="section-subtext">Discover what your iQOO can do for the way you use it.</p>
          </div>
        </div>

        <div className="large-modules-grid">
          {/* Module 1: GAMING */}
          <div 
            className="feature-secondary large-feature-module module-gaming"
            onClick={() => openSmartWithActivity('gaming')}
          >
            <div className="module-top-row">
              <div className="module-badge font-tech badge-yellow">
                <Gamepad2 size={15} />
                <span>GAMING</span>
              </div>
              <span className="module-chip-badge font-tech">Q3 COPROCESSOR</span>
            </div>

            <div className="module-content">
              <h3 className="module-heading">Push performance when every frame matters.</h3>
              <p className="module-description">
                144FPS dual-chip frame interpolation, 2000Hz instant touch sampling, and motherboard power bypass to keep thermals under 35°C during tournament play.
              </p>
            </div>

            <div className="module-footer">
              <span className="module-cta-link font-tech">Optimize Gaming Quest</span>
              <ArrowRight size={15} className="module-arrow" />
            </div>
          </div>

          {/* Module 2: CAMERA / CREATING */}
          <div 
            className="feature-secondary large-feature-module module-camera"
            onClick={() => openSmartWithActivity('creating')}
          >
            <div className="module-top-row">
              <div className="module-badge font-tech badge-blue">
                <Camera size={15} />
                <span>CREATING</span>
              </div>
              <span className="module-chip-badge font-tech">50MP VCS TRUE-COLOR</span>
            </div>

            <div className="module-content">
              <h3 className="module-heading">Discover more from every shot.</h3>
              <p className="module-description">
                Pre-warmed VCS periscope sensor buffer with zero shutter lag, studio lighting relight algorithms, and P3 true color gamut preview calibration.
              </p>
            </div>

            <div className="module-footer">
              <span className="module-cta-link font-tech">Optimize Creating Quest</span>
              <ArrowRight size={15} className="module-arrow" />
            </div>
          </div>

          {/* Module 3: PERFORMANCE / EVERYDAY */}
          <div 
            className="feature-secondary large-feature-module module-performance"
            onClick={() => openSmartWithActivity('everyday')}
          >
            <div className="module-top-row">
              <div className="module-badge font-tech badge-emerald">
                <Zap size={15} />
                <span>EVERYDAY</span>
              </div>
              <span className="module-chip-badge font-tech">DYNAMIC LTPO</span>
            </div>

            <div className="module-content">
              <h3 className="module-heading">Make your device respond to your workflow.</h3>
              <p className="module-description">
                OriginOS 6 dynamic 1Hz–144Hz refresh scaling, intelligent app pre-loading in 16GB LPDDR5X RAM, and BlueOcean battery management.
              </p>
            </div>

            <div className="module-footer">
              <span className="module-cta-link font-tech">Optimize Everyday Quest</span>
              <ArrowRight size={15} className="module-arrow" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. AI MOMENT: iQOO INTELLIGENCE */}
      <section className="desktop-section ai-moment-section">
        <div className="feature-primary ai-moment-card">
          <div className="ai-moment-left">
            <div className="ai-moment-header">
              <div className="ai-brand-pill font-tech">
                <Sparkles size={14} />
                <span>iQOO INTELLIGENCE</span>
              </div>
              <span className="ai-badge-live font-tech">CONTEXT SYNTHESIZED</span>
            </div>

            <h3 className="ai-moment-title">Gaming Performance Setup</h3>
            <p className="ai-moment-desc">
              "Based on your current usage, we found a setup you may want to try. Prioritizes responsiveness while balancing heat and battery consumption."
            </p>

            {/* Structured Setup Matrix */}
            <div className="ai-recommendation-matrix">
              <div className="rec-matrix-item">
                <span className="matrix-key font-tech">PERFORMANCE</span>
                <span className="matrix-val font-tech val-gold">HIGH (4.32GHz)</span>
              </div>

              <div className="rec-matrix-item">
                <span className="matrix-key font-tech">TOUCH SAMPLING</span>
                <span className="matrix-val font-tech">OPTIMIZED (2000Hz)</span>
              </div>

              <div className="rec-matrix-item">
                <span className="matrix-key font-tech">NOTIFICATIONS</span>
                <span className="matrix-val font-tech">FOCUSED (DND)</span>
              </div>

              <div className="rec-matrix-item">
                <span className="matrix-key font-tech">BATTERY</span>
                <span className="matrix-val font-tech">BALANCED (BYPASS)</span>
              </div>
            </div>

            <div className="ai-moment-actions">
              <button 
                className="clean-primary-btn ai-cta-btn"
                onClick={() => openSmartWithActivity('gaming')}
              >
                <span>Optimize Setup</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="ai-moment-right">
            <div className="ai-chip-stage">
              <div className="ai-chip-ring" />
              <Cpu size={40} className="ai-chip-icon" />
              <span className="ai-chip-label font-tech">Q3 DISPATCH ACTIVE</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. QUESTER PULSE SUMMARY */}
      <section className="desktop-section quester-pulse-summary-section">
        <div className="pulse-summary-card glass-card" onClick={openQuesterVoice}>
          <div className="pulse-summary-header">
            <div className="pulse-header-left">
              <span className="pulse-tag font-tech">QUESTER PULSE</span>
              <h3 className="pulse-main-heading">WHAT QUESTERS ARE EXPERIENCING</h3>
            </div>
            
            <div className="pulse-header-cta">
              <span className="font-tech">VIEW QUESTER VOICE</span>
              <ArrowRight size={16} />
            </div>
          </div>

          <div className="pulse-signals-strip">
            <div className="pulse-signal-item">
              <div className="sig-icon-badge sig-loved">
                <Heart size={14} />
                <span className="font-tech">LOVED</span>
              </div>
              <div className="sig-content">
                <span className="sig-title">Multitasking smoothness</span>
                <span className="sig-stat font-tech">92% Positive Mentions</span>
              </div>
            </div>

            <div className="pulse-signal-divider" />

            <div className="pulse-signal-item">
              <div className="sig-icon-badge sig-requested">
                <Lightbulb size={14} />
                <span className="font-tech">REQUESTED</span>
              </div>
              <div className="sig-content">
                <span className="sig-title">Granular performance controls</span>
                <span className="sig-stat font-tech">2,430 Questers Supporting</span>
              </div>
            </div>

            <div className="pulse-signal-divider" />

            <div className="pulse-signal-item">
              <div className="sig-icon-badge sig-trending">
                <Flame size={14} />
                <span className="font-tech">TRENDING</span>
              </div>
              <div className="sig-content">
                <span className="sig-title">Gaming battery & thermals</span>
                <span className="sig-stat font-tech">+28% Signals This Week</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
