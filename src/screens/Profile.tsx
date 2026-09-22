import React, { useState } from 'react';
import { 
  User, 
  ShieldCheck, 
  Cpu, 
  Gamepad2, 
  Camera, 
  Monitor, 
  Battery, 
  Thermometer, 
  Sparkles, 
  Wifi, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Award,
  ChevronRight,
  RotateCcw
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Screens.css';

export const Profile: React.FC = () => {
  const { 
    selectedDevice, 
    feedbackSubmissions, 
    betaExperiments,
    setCurrentTab 
  } = useApp();

  const [activeCapTab, setActiveCapTab] = useState<'all' | 'gaming' | 'camera' | 'display' | 'cooling'>('all');

  const cap = selectedDevice.capabilities;

  return (
    <div className="desktop-screen-page profile-page animate-fade-scale">
      {/* Header */}
      <div className="desktop-page-header">
        <div className="header-badge font-tech">
          <Award size={13} />
          <span>QUESTER IDENTITY & HARDWARE PROFILE</span>
        </div>
        <h1 className="text-page-title">Profile & Device Model</h1>
        <p className="text-body header-subtitle">"Your verified device capabilities, telemetry status, and community contributions."</p>
      </div>

      {/* 1. QUESTER IDENTITY HERO CARD */}
      <div className="feature-primary quester-profile-banner">
        <div className="profile-banner-left">
          <div className="avatar-large font-tech">A</div>
          <div className="profile-meta">
            <div className="name-row">
              <h2 className="quester-name">Alex V.</h2>
              <span className="quester-tier-pill font-tech">MASTER QUESTER • LVL 4</span>
            </div>
            <p className="quester-id font-tech">QUESTER ID: IQ-9842-FLAGSHIP</p>
            <div className="quester-badges-strip">
              <span className="badge-item font-tech">🏆 Top 5% Signal Contributor</span>
              <span className="badge-item font-tech">🧪 Beta Lab Pioneer</span>
              <span className="badge-item font-tech">⚡ OriginOS 6 Verified</span>
            </div>
          </div>
        </div>

        <div className="profile-stats-strip">
          <div className="p-stat">
            <span className="p-num font-tech">28</span>
            <span className="p-lbl font-tech">VERIFIED SIGNALS</span>
          </div>
          <div className="p-divider" />
          <div className="p-stat">
            <span className="p-num font-tech">1,845</span>
            <span className="p-lbl font-tech">COMMUNITY UPVOTES</span>
          </div>
          <div className="p-divider" />
          <div className="p-stat">
            <span className="p-num font-tech">3</span>
            <span className="p-lbl font-tech">BETA LAB PASSES</span>
          </div>
        </div>
      </div>

      {/* 2. STRUCTURED INTERNAL DEVICE CAPABILITY MODEL */}
      <section className="desktop-section capability-model-section">
        <div className="section-title-wrapper">
          <div className="section-header-block">
            <span className="section-eyebrow font-tech">STRUCTURED CAPABILITY MODEL</span>
            <h2 className="text-section-title">{selectedDevice.name} HARDWARE CAPABILITIES</h2>
            <p className="section-subtext">Verified hardware subsystems and driver capability profiles.</p>
          </div>

          <div className="capability-filter-pills">
            {(['all', 'gaming', 'camera', 'display', 'cooling'] as const).map(tab => (
              <button
                key={tab}
                className={`cap-filter-btn ${activeCapTab === tab ? 'is-active' : ''}`}
                onClick={() => setActiveCapTab(tab)}
              >
                <span className="font-tech">{tab.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="capability-cards-grid">
          {/* Gaming Capabilities */}
          {(activeCapTab === 'all' || activeCapTab === 'gaming') && (
            <div className="feature-secondary cap-card">
              <div className="cap-card-top">
                <div className="cap-icon-box icon-yellow">
                  <Gamepad2 size={20} />
                </div>
                <span className="cap-family font-tech">GAMING ENGINE</span>
              </div>
              <h3 className="cap-title font-tech">{cap.gaming.supercomputingChip}</h3>
              <div className="cap-specs-list">
                <div className="cap-spec-row">
                  <span className="cap-key">Max Native Refresh:</span>
                  <span className="cap-val font-tech">{cap.gaming.maxFps} FPS</span>
                </div>
                <div className="cap-spec-row">
                  <span className="cap-key">Touch Sampling:</span>
                  <span className="cap-val font-tech">{cap.gaming.touchSamplingHz} Hz Instant</span>
                </div>
                <div className="cap-spec-row">
                  <span className="cap-key">Bypass Charging:</span>
                  <span className="cap-val font-tech">{cap.gaming.bypassCharging ? 'Supported (120W)' : 'N/A'}</span>
                </div>
                <div className="cap-spec-row">
                  <span className="cap-key">Ray-Tracing Engine:</span>
                  <span className="cap-val font-tech">{cap.gaming.rayTracingSupport ? 'Hardware Accelerated' : 'Software'}</span>
                </div>
              </div>
            </div>
          )}

          {/* Camera Capabilities */}
          {(activeCapTab === 'all' || activeCapTab === 'camera') && (
            <div className="feature-secondary cap-card">
              <div className="cap-card-top">
                <div className="cap-icon-box icon-blue">
                  <Camera size={20} />
                </div>
                <span className="cap-family font-tech">IMAGING & OPTICS</span>
              </div>
              <h3 className="cap-title font-tech">{cap.camera.mainSensor.split(' with')[0]}</h3>
              <div className="cap-specs-list">
                <div className="cap-spec-row">
                  <span className="cap-key">VCS Bionic Spectral:</span>
                  <span className="cap-val font-tech">{cap.camera.vcsSensor ? 'True Color Sensor' : 'Standard RGB'}</span>
                </div>
                <div className="cap-spec-row">
                  <span className="cap-key">Periscope Optics:</span>
                  <span className="cap-val font-tech">{cap.camera.periscopeZoom}</span>
                </div>
                <div className="cap-spec-row">
                  <span className="cap-key">Zero Shutter Lag:</span>
                  <span className="cap-val font-tech">{cap.camera.zeroShutterLag ? 'Enabled (0.0ms)' : 'N/A'}</span>
                </div>
                <div className="cap-spec-row">
                  <span className="cap-key">Studio Night Mode:</span>
                  <span className="cap-val font-tech">{cap.camera.studioNightMode ? 'Active V3' : 'Standard'}</span>
                </div>
              </div>
            </div>
          )}

          {/* Display Capabilities */}
          {(activeCapTab === 'all' || activeCapTab === 'display') && (
            <div className="feature-secondary cap-card">
              <div className="cap-card-top">
                <div className="cap-icon-box icon-cyan">
                  <Monitor size={20} />
                </div>
                <span className="cap-family font-tech">DISPLAY PANEL</span>
              </div>
              <h3 className="cap-title font-tech">{cap.display.panel}</h3>
              <div className="cap-specs-list">
                <div className="cap-spec-row">
                  <span className="cap-key">Resolution:</span>
                  <span className="cap-val font-tech">{cap.display.resolution}</span>
                </div>
                <div className="cap-spec-row">
                  <span className="cap-key">PWM Eyecare Dimming:</span>
                  <span className="cap-val font-tech">{cap.display.pwmDimmingHz} Hz High-Freq</span>
                </div>
                <div className="cap-spec-row">
                  <span className="cap-key">Peak Brightness:</span>
                  <span className="cap-val font-tech">{cap.display.peakNits} Nits</span>
                </div>
                <div className="cap-spec-row">
                  <span className="cap-key">Dynamic LTPO:</span>
                  <span className="cap-val font-tech">{cap.display.ltpoRange}</span>
                </div>
              </div>
            </div>
          )}

          {/* Cooling & Thermal Capabilities */}
          {(activeCapTab === 'all' || activeCapTab === 'cooling') && (
            <div className="feature-secondary cap-card">
              <div className="cap-card-top">
                <div className="cap-icon-box icon-amber">
                  <Thermometer size={20} />
                </div>
                <span className="cap-family font-tech">THERMAL SUBSYSTEM</span>
              </div>
              <h3 className="cap-title font-tech">{cap.cooling.vcType}</h3>
              <div className="cap-specs-list">
                <div className="cap-spec-row">
                  <span className="cap-key">VC Chamber Area:</span>
                  <span className="cap-val font-tech">{cap.cooling.vcAreaMm2} mm² 3D</span>
                </div>
                <div className="cap-spec-row">
                  <span className="cap-key">Battery Capacity:</span>
                  <span className="cap-val font-tech">{cap.battery.capacityMah} mAh BlueOcean</span>
                </div>
                <div className="cap-spec-row">
                  <span className="cap-key">FlashCharge Wattage:</span>
                  <span className="cap-val font-tech">{cap.battery.chargingWattage}W SuperCharge</span>
                </div>
                <div className="cap-spec-row">
                  <span className="cap-key">Silicon-Carbon Tech:</span>
                  <span className="cap-val font-tech">{cap.battery.siliconCarbonTech ? 'Verified Active' : 'N/A'}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. MY RECENT SUBMITTED SIGNALS */}
      <section className="desktop-section my-signals-section">
        <div className="section-title-wrapper">
          <div className="section-header-block">
            <span className="section-eyebrow font-tech">YOUR TELEMETRY DISPATCHES</span>
            <h2 className="text-section-title">MY SUBMITTED EXPERIENCES</h2>
          </div>
        </div>

        <div className="my-signals-list glass-card">
          {feedbackSubmissions.length > 0 ? (
            feedbackSubmissions.map(fb => (
              <div key={fb.id} className="my-signal-item">
                <div className="item-left">
                  <span className="my-sig-cat font-tech">{fb.structured.category}</span>
                  <h4 className="my-sig-title">"{fb.rawText}"</h4>
                  <span className="my-sig-meta font-tech">
                    {fb.timestamp} • {fb.structured.device} • {fb.structured.relatedCount} Questers clustered
                  </span>
                </div>
                <span className="my-sig-status font-tech">SYNTHESIZED IN PULSE</span>
              </div>
            ))
          ) : (
            <div className="empty-signals-box">
              <CheckCircle2 size={24} className="empty-ico" />
              <p className="empty-txt">
                You haven't submitted any voice experiences yet. Head over to <strong>Tell iQOO</strong> to share your natural device feedback!
              </p>
              <button 
                className="clean-primary-btn"
                onClick={() => setCurrentTab('voice')}
              >
                <span>Share First Experience</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
