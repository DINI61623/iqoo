import React, { useState } from 'react';
import { 
  BarChart3, 
  Activity, 
  Users, 
  FileText, 
  Lightbulb, 
  FlaskConical, 
  TrendingUp, 
  Sparkles, 
  ArrowRight,
  HelpCircle,
  Eye,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { DeviceFamily } from '../types';
import { PULSE_METRICS_DATA, DEVICE_FAMILY_METRICS } from '../data/mockPulse';
import './Screens.css';

export const PulseDashboard: React.FC = () => {
  const { 
    selectedFamilyFilter, 
    setSelectedFamilyFilter, 
    canonicalSignals,
    setCurrentTab
  } = useApp();

  const [selectedOriginOsCategory, setSelectedOriginOsCategory] = useState<string | null>(null);

  const familyMetrics = DEVICE_FAMILY_METRICS[selectedFamilyFilter] || DEVICE_FAMILY_METRICS.All;

  return (
    <div className="desktop-screen-page pulse-page animate-fade-scale">
      {/* Header */}
      <div className="desktop-page-header">
        <div className="header-badge font-tech badge-cyan">
          <Activity size={13} />
          <span>EXPERIENCE INTELLIGENCE CONSOLE</span>
        </div>
        <h1 className="text-page-title">iQOO PULSE</h1>
        <p className="text-body header-subtitle">"Understanding the Quester experience. Transforming aggregated user signals into firmware insights."</p>
      </div>

      {/* 1. DEVICE FAMILY VIEW & DEMO BANNER (Phase 12 & 13) */}
      <div className="pulse-family-control-strip glass-card">
        <div className="family-left">
          <span className="family-label font-tech">DEVICE FAMILY INTELLIGENCE:</span>
          <div className="family-pills-list">
            {(['All', 'Flagship', 'Neo', 'Z'] as (DeviceFamily | 'All')[]).map(fam => (
              <button
                key={fam}
                className={`family-pill-btn ${selectedFamilyFilter === fam ? 'is-active' : ''}`}
                onClick={() => setSelectedFamilyFilter(fam)}
              >
                <span className="font-tech">{fam === 'All' ? 'ALL DEVICES' : `${fam.toUpperCase()} SERIES`}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="family-right font-tech">
          <ShieldCheck size={13} className="family-shield-ico" />
          <span className="live-telemetry-tag">
            DEMONSTRATION INTELLIGENCE • {familyMetrics.totalDevicesActive.toLocaleString()} QUESTER SENSORS
          </span>
        </div>
      </div>

      {/* Device Family Context Bar */}
      <div className="family-profile-context-banner">
        <span className="family-context-tag font-tech">{familyMetrics.family.toUpperCase()} HARDWARE CONTEXT</span>
        <p className="family-context-text">{familyMetrics.familyProfileDesc}</p>
      </div>

      {/* 2. TOP-LEVEL METRICS (4 Key Signals) */}
      <div className="pulse-top-kpi-grid">
        <div className="kpi-card">
          <div className="kpi-icon-wrap icon-gold">
            <Users size={20} />
          </div>
          <div className="kpi-data">
            <span className="kpi-label font-tech">QUESTERS</span>
            <span className="kpi-number font-tech">{PULSE_METRICS_DATA.totalQuesters.toLocaleString()}</span>
            <span className="kpi-sub">Connected device profiles</span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon-wrap icon-blue">
            <FileText size={20} />
          </div>
          <div className="kpi-data">
            <span className="kpi-label font-tech">EXPERIENCES</span>
            <span className="kpi-number font-tech">{PULSE_METRICS_DATA.totalExperiences.toLocaleString()}</span>
            <span className="kpi-sub">Voice, text & screen signals</span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon-wrap icon-amber">
            <Lightbulb size={20} />
          </div>
          <div className="kpi-data">
            <span className="kpi-label font-tech">FEATURE REQUESTS</span>
            <span className="kpi-number font-tech">{PULSE_METRICS_DATA.featureRequestsCount.toLocaleString()}</span>
            <span className="kpi-sub">Structured community votes</span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon-wrap icon-emerald">
            <FlaskConical size={20} />
          </div>
          <div className="kpi-data">
            <span className="kpi-label font-tech">ACTIVE TESTS</span>
            <span className="kpi-number font-tech">{PULSE_METRICS_DATA.activeTestsCount}</span>
            <span className="kpi-sub">Beta Lab prototype builds</span>
          </div>
        </div>
      </div>

      {/* 3. EMERGING SIGNALS & FEATURED AI INSIGHT (Phase 12) */}
      <div className="pulse-insights-dual-grid">
        {/* Left: Emerging Experience Signals */}
        <div className="feature-secondary pulse-emerging-signals-card">
          <div className="signals-header">
            <div className="signals-title-group">
              <TrendingUp size={16} className="trend-icon" />
              <span className="signals-title font-tech">EMERGING EXPERIENCE SIGNALS</span>
            </div>
            <span className="signals-sub font-tech">LAST 7 DAYS</span>
          </div>

          <div className="signals-breakdown-list">
            <div className="signal-trend-row highlight-emerging">
              <div className="trend-name-wrap">
                <span className="trend-name">🎮 Gaming Thermal Experience</span>
                <span className="trend-sub">527 Questers • Common: Long sessions + high performance</span>
              </div>
              <span className="trend-percentage font-tech trend-up">
                +{PULSE_METRICS_DATA.emergingSignals.gaming}%
              </span>
            </div>

            <div className="signal-trend-row">
              <div className="trend-name-wrap">
                <span className="trend-name">🎨 UI Customization & AOD</span>
                <span className="trend-sub">2,430 Questers • Depth wallpaper & accessory widgets</span>
              </div>
              <span className="trend-percentage font-tech trend-up">
                +{PULSE_METRICS_DATA.emergingSignals.customization}%
              </span>
            </div>

            <div className="signal-trend-row">
              <div className="trend-name-wrap">
                <span className="trend-name">⚡ BlueOcean Battery Experience</span>
                <span className="trend-sub">1,290 Questers • Bypass charging during gaming</span>
              </div>
              <span className="trend-percentage font-tech trend-up">
                +{PULSE_METRICS_DATA.emergingSignals.battery}%
              </span>
            </div>

            <div className="signal-trend-row">
              <div className="trend-name-wrap">
                <span className="trend-name">📸 Camera & Imaging Processing</span>
                <span className="trend-sub">3,120 Questers • 50MP VCS low-light portraits</span>
              </div>
              <span className="trend-percentage font-tech trend-up">
                +{PULSE_METRICS_DATA.emergingSignals.camera}%
              </span>
            </div>
          </div>
        </div>

        {/* Right: Featured AI Insight Banner (Phase 12) */}
        <div className="feature-primary pulse-featured-ai-insight-card">
          <div className="insight-top-bar">
            <div className="ai-label-pill font-tech">
              <Sparkles size={14} />
              <span>AI-GENERATED DEMONSTRATION INSIGHT</span>
            </div>
            <span className="ai-confidence font-tech">{PULSE_METRICS_DATA.featuredAiInsight.confidence}</span>
          </div>

          <h3 className="ai-insight-title">{PULSE_METRICS_DATA.featuredAiInsight.title}</h3>
          <p className="ai-insight-summary">"{PULSE_METRICS_DATA.featuredAiInsight.summary}"</p>

          <div className="ai-insight-evidence-strip">
            <div className="evidence-item">
              <span className="ev-label font-tech">EVIDENCE SIGNALS</span>
              <span className="ev-val font-tech">{PULSE_METRICS_DATA.featuredAiInsight.evidenceSignalsCount.toLocaleString()} Questers</span>
            </div>

            <div className="ev-divider" />

            <div className="evidence-item">
              <span className="ev-label font-tech">DEVICE TARGET</span>
              <span className="ev-val font-tech">{PULSE_METRICS_DATA.featuredAiInsight.targetDevice.split(' &')[0]}</span>
            </div>

            <div className="ev-divider" />

            <div className="evidence-item">
              <span className="ev-label font-tech">TREND VELOCITY</span>
              <span className="ev-val font-tech val-gold">{PULSE_METRICS_DATA.featuredAiInsight.trend}</span>
            </div>
          </div>

          <div className="common-context-chips-row">
            <span className="ctx-lbl font-tech">COMMON CONTEXT:</span>
            {PULSE_METRICS_DATA.featuredAiInsight.commonContext.map(c => (
              <span key={c} className="ctx-chip font-tech">{c}</span>
            ))}
          </div>

          <div className="ai-disclaimer-box">
            <HelpCircle size={14} className="disclaimer-icon" />
            <span className="disclaimer-text">{PULSE_METRICS_DATA.featuredAiInsight.disclaimer}</span>
          </div>
        </div>
      </div>

      {/* 4. ORIGINOS 6 EXPERIENCE MATRIX (Phase 14) */}
      <section className="desktop-section originos-matrix-section">
        <div className="section-title-wrapper">
          <div className="section-header-block">
            <span className="section-eyebrow font-tech">SUBSYSTEM HEALTH & SATISFACTION</span>
            <h2 className="text-section-title">ORIGINOS 6 EXPERIENCE MATRIX</h2>
            <p className="section-subtext">Real-time health scores calculated from Quester satisfaction ratings and bug signal volume.</p>
          </div>
        </div>

        <div className="originos-matrix-grid">
          {PULSE_METRICS_DATA.originOsExperienceMatrix.map(item => (
            <div 
              key={item.category}
              className={`feature-secondary matrix-score-card ${selectedOriginOsCategory === item.category ? 'is-selected' : ''}`}
              onClick={() => setSelectedOriginOsCategory(item.category)}
            >
              <div className="matrix-card-top">
                <span className="matrix-cat font-tech">{item.category.toUpperCase()}</span>
                <span className="matrix-signals-count font-tech">{item.signalCount} SIGNALS</span>
              </div>

              <div className="matrix-score-row">
                <span className="matrix-score-num font-tech">{item.score}</span>
                <span className="matrix-score-denom font-tech">/100</span>
              </div>

              <div className="matrix-progress-bar">
                <div 
                  className={`progress-fill ${item.score > 90 ? 'fill-green' : item.score > 80 ? 'fill-blue' : 'fill-yellow'}`}
                  style={{ width: `${item.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CANONICAL R&D PIPELINE BOARD */}
      <section className="desktop-section canonical-board-section">
        <div className="section-title-wrapper">
          <div className="section-header-block">
            <span className="section-eyebrow font-tech">AGGREGATED R&D PIPELINE</span>
            <h2 className="text-section-title">ACTIVE PRODUCT SIGNALS BY STATUS</h2>
          </div>

          <button 
            className="clean-secondary-btn view-quester-btn"
            onClick={() => setCurrentTab('community')}
          >
            <Eye size={15} />
            <span>View Quester Voice Signals</span>
          </button>
        </div>

        <div className="pulse-canonical-table glass-card">
          <div className="table-header-row font-tech">
            <span className="col-title">EXPERIENCE SIGNAL</span>
            <span className="col-cat">CATEGORY</span>
            <span className="col-dev">FAMILY</span>
            <span className="col-support">QUESTER IMPACT</span>
            <span className="col-stage">CLOSED-LOOP STAGE</span>
          </div>

          <div className="table-body-rows">
            {canonicalSignals.map(sig => (
              <div key={sig.id} className="table-data-row" onClick={() => setCurrentTab('community')}>
                <div className="col-title">
                  <span className="row-title">{sig.title}</span>
                  <span className="row-summary">{sig.summary}</span>
                </div>
                <div className="col-cat">
                  <span className="row-badge font-tech">{sig.badge}</span>
                </div>
                <div className="col-dev font-tech">{sig.targetDeviceFamily}</div>
                <div className="col-support font-tech">
                  <span className="support-val">{sig.supportCount.toLocaleString()}</span>
                  <span className="support-lbl">Questers</span>
                </div>
                <div className="col-stage">
                  <span className="row-stage-pill font-tech">{sig.lifecycleStage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
