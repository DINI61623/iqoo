import React, { useState } from 'react';
import { 
  Gamepad2, 
  Camera, 
  Briefcase, 
  Globe, 
  BookOpen,
  Compass,
  Tv,
  Check, 
  Sliders, 
  Info, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle,
  X,
  Layers
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SmartActivityType } from '../types';
import { SMART_ACTIVITIES } from '../data/mockSmart';
import './Screens.css';

export const Smart: React.FC = () => {
  const { 
    selectedDevice, 
    activeSmartActivity, 
    setActiveSmartActivity,
    appliedSetupActivity,
    applySmartSetup 
  } = useApp();

  const [isCustomizing, setIsCustomizing] = useState(false);
  const [showHowToModal, setShowHowToModal] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const currentActivityData = SMART_ACTIVITIES[activeSmartActivity] || SMART_ACTIVITIES.gaming;
  const [customFps, setCustomFps] = useState(currentActivityData.customizableSettings.targetFps);
  const [customTouch, setCustomTouch] = useState(currentActivityData.customizableSettings.touchResponseRate);
  const [customBypass, setCustomBypass] = useState(currentActivityData.customizableSettings.bypassCharging);
  const [customThermalCeiling, setCustomThermalCeiling] = useState(currentActivityData.customizableSettings.thermalCeilingC);

  // 7 Possible Quests (Phase 6)
  const questsList: { id: SmartActivityType; label: string; icon: React.ReactNode; tag: string }[] = [
    { id: 'gaming', label: 'GAMING', icon: <Gamepad2 size={24} />, tag: 'Supercomputing Q3 • 144FPS' },
    { id: 'creating', label: 'CREATING', icon: <Camera size={24} />, tag: '50MP VCS • Studio RAW Buffer' },
    { id: 'work', label: 'WORKING', icon: <Briefcase size={24} />, tag: 'Focus Mode • 2160Hz Eyecare' },
    { id: 'studying', label: 'STUDYING', icon: <BookOpen size={24} />, tag: 'Paper Eyecare • Total DND' },
    { id: 'travelling', label: 'TRAVELLING', icon: <Compass size={24} />, tag: 'Transit Island • 5G GPS' },
    { id: 'watching', label: 'WATCHING', icon: <Tv size={24} />, tag: 'Cinema Boost • Panoramic Audio' },
    { id: 'everyday', label: 'EVERYDAY', icon: <Globe size={24} />, tag: 'Adaptive LTPO • BlueOcean' },
  ];

  const handleApply = () => {
    applySmartSetup(activeSmartActivity);
    setToastMessage(`Your iQOO 15 is now optimized for ${currentActivityData.title}!`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const isCurrentActive = appliedSetupActivity === activeSmartActivity;

  return (
    <div className="desktop-screen-page smart-page animate-fade-scale">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="smart-toast-notification animate-slide-up">
          <CheckCircle2 size={18} className="toast-icon" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Page Header */}
      <div className="desktop-page-header">
        <div className="header-badge font-tech">
          <Sparkles size={13} />
          <span>ORIGINOS 6 ADAPTIVE INTELLIGENCE</span>
        </div>
        <h1 className="text-page-title">MAKE YOUR iQOO WORK FOR YOU.</h1>
        <p className="text-body header-subtitle">What are you doing right now?</p>
      </div>

      {/* Quests Selector Strip */}
      <div className="quests-horizontal-selector-grid">
        {questsList.map(act => {
          const isSelected = activeSmartActivity === act.id;
          const isApplied = appliedSetupActivity === act.id;
          return (
            <button
              key={act.id}
              className={`activity-choice-card ${isSelected ? 'is-selected' : ''}`}
              onClick={() => {
                setActiveSmartActivity(act.id);
                setIsCustomizing(false);
              }}
            >
              <div className="activity-card-header">
                <div className={`activity-icon-wrap icon-${act.id}`}>
                  {act.icon}
                </div>
                {isApplied ? (
                  <span className="activity-status-pill pill-active font-tech">
                    <Check size={11} />
                    <span>ACTIVE</span>
                  </span>
                ) : isSelected ? (
                  <span className="activity-status-pill pill-selected font-tech">SELECTED</span>
                ) : null}
              </div>

              <div className="activity-card-info">
                <span className="activity-title font-tech">{act.label}</span>
                <span className="activity-tag">{act.tag}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Breakdown Container */}
      <div className="feature-primary smart-setup-breakdown-card">
        {/* Top Quest Ready Header */}
        <div className="breakdown-header-row">
          <div className="breakdown-title-group">
            <div className="breakdown-badge-row">
              <span className="breakdown-badge font-tech">{currentActivityData.badgeTag}</span>
              <span className="breakdown-device font-tech">{selectedDevice.name}</span>
            </div>
            <h2 className="breakdown-main-title">QUEST READY: {currentActivityData.title}</h2>
            <p className="breakdown-desc">{currentActivityData.description}</p>
          </div>

          {isCurrentActive ? (
            <div className="setup-active-badge-large font-tech">
              <CheckCircle2 size={16} />
              <span>QUEST ACTIVE ON DEVICE</span>
            </div>
          ) : (
            <button
              className="clean-primary-btn"
              onClick={handleApply}
            >
              <Check size={16} />
              <span>Optimize My Quest</span>
            </button>
          )}
        </div>

        {/* 5 Information Setup Tiles */}
        <div className="setup-specs-five-grid">
          <div className="spec-tile">
            <span className="spec-tile-label font-tech">PERFORMANCE</span>
            <span className="spec-tile-value font-tech">{currentActivityData.setup.performance}</span>
            <span className="spec-tile-sub">{currentActivityData.setup.performanceSub}</span>
          </div>

          <div className="spec-tile">
            <span className="spec-tile-label font-tech">TOUCH SAMPLING</span>
            <span className="spec-tile-value font-tech">{currentActivityData.setup.touch}</span>
            <span className="spec-tile-sub">{currentActivityData.setup.touchSub}</span>
          </div>

          <div className="spec-tile">
            <span className="spec-tile-label font-tech">NOTIFICATIONS</span>
            <span className="spec-tile-value font-tech">{currentActivityData.setup.notifications}</span>
            <span className="spec-tile-sub">{currentActivityData.setup.notificationsSub}</span>
          </div>

          <div className="spec-tile">
            <span className="spec-tile-label font-tech">BATTERY</span>
            <span className="spec-tile-value font-tech">{currentActivityData.setup.battery}</span>
            <span className="spec-tile-sub">{currentActivityData.setup.batterySub}</span>
          </div>

          <div className="spec-tile">
            <span className="spec-tile-label font-tech">THERMAL GOVERNOR</span>
            <span className="spec-tile-value font-tech">{currentActivityData.setup.thermal}</span>
            <span className="spec-tile-sub">{currentActivityData.setup.thermalSub}</span>
          </div>
        </div>

        {/* WHY? Section */}
        <div className="why-setup-banner">
          <div className="why-header">
            <Info size={16} className="why-icon" />
            <span className="why-tag font-tech">WHY THIS SETUP?</span>
          </div>
          <p className="why-text">{currentActivityData.whyExplanation}</p>
        </div>

        {/* OriginOS 6 Integration Module */}
        <div className="originos-integration-strip">
          <div className="originos-left">
            <Layers size={18} className="originos-icon" />
            <div>
              <span className="originos-title font-tech">{currentActivityData.originOsIntegration.featureName}</span>
              <span className="originos-sub">{currentActivityData.originOsIntegration.featureSummary}</span>
            </div>
          </div>
          <span className="originos-hook font-tech">{currentActivityData.originOsIntegration.sidebarHook}</span>
        </div>

        {/* Actions Bar */}
        <div className="setup-actions-footer">
          <div className="actions-left-group">
            <button
              className="clean-primary-btn setup-primary-action-btn"
              onClick={handleApply}
            >
              <Check size={16} />
              <span>{isCurrentActive ? 'Quest Optimized & Active' : 'Optimize My Quest'}</span>
            </button>

            <button
              className={`clean-secondary-btn ${isCustomizing ? 'is-active' : ''}`}
              onClick={() => setIsCustomizing(!isCustomizing)}
            >
              <Sliders size={16} />
              <span>{isCustomizing ? 'Hide Parameters' : 'Customize'}</span>
            </button>
          </div>

          <button
            className="show-how-link-btn"
            onClick={() => setShowHowToModal(true)}
          >
            <HelpCircle size={16} />
            <span className="font-tech">SHOW ME HOW</span>
          </button>
        </div>

        {/* Interactive Customizer Panel */}
        {isCustomizing && (
          <div className="interactive-customizer-drawer animate-slide-up">
            <div className="customizer-header">
              <span className="customizer-title font-tech">FINE-GRAINED PARAMETER TUNING</span>
              <span className="customizer-hint">Hardware parameters applied directly to OriginOS 6 kernel scheduler</span>
            </div>

            <div className="customizer-sliders-grid">
              <div className="slider-box">
                <div className="slider-label-row">
                  <span className="slider-name font-tech">TARGET REFRESH RATE</span>
                  <span className="slider-val font-tech">{customFps} FPS</span>
                </div>
                <input 
                  type="range" 
                  min={60} 
                  max={144} 
                  step={30}
                  value={customFps} 
                  onChange={e => setCustomFps(Number(e.target.value))}
                  className="custom-range"
                />
              </div>

              <div className="slider-box">
                <div className="slider-label-row">
                  <span className="slider-name font-tech">TOUCH SAMPLING FREQUENCY</span>
                  <span className="slider-val font-tech">{customTouch} Hz</span>
                </div>
                <input 
                  type="range" 
                  min={300} 
                  max={2000} 
                  step={100}
                  value={customTouch} 
                  onChange={e => setCustomTouch(Number(e.target.value))}
                  className="custom-range"
                />
              </div>

              <div className="slider-box">
                <div className="slider-label-row">
                  <span className="slider-name font-tech">MAX THERMAL CEILING</span>
                  <span className="slider-val font-tech">{customThermalCeiling}°C</span>
                </div>
                <input 
                  type="range" 
                  min={36} 
                  max={44} 
                  step={1}
                  value={customThermalCeiling} 
                  onChange={e => setCustomThermalCeiling(Number(e.target.value))}
                  className="custom-range"
                />
              </div>

              <div className="slider-box toggle-box">
                <div className="toggle-info">
                  <span className="slider-name font-tech">MOTHERBOARD POWER BYPASS</span>
                  <span className="slider-sub">Direct wall power to SoC during games</span>
                </div>
                <button 
                  className={`switch-toggle-btn ${customBypass ? 'is-on' : ''}`}
                  onClick={() => setCustomBypass(!customBypass)}
                >
                  <span className="switch-knob" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* SHOW ME HOW Step-by-Step Modal */}
      {showHowToModal && (
        <div className="desktop-modal-backdrop" onClick={() => setShowHowToModal(false)}>
          <div className="desktop-modal-card animate-slide-up" onClick={e => e.stopPropagation()}>
            <div className="modal-top-bar">
              <div className="modal-badge font-tech">
                <Sparkles size={14} />
                <span>ORIGINOS 6 STEP-BY-STEP GUIDE</span>
              </div>
              <button className="modal-close-btn" onClick={() => setShowHowToModal(false)}>
                <X size={20} />
              </button>
            </div>

            <h2 className="modal-heading">How to activate {currentActivityData.title} Setup manually</h2>
            <p className="modal-body-text">
              Follow these simple gestures inside OriginOS 6 on your {selectedDevice.name}:
            </p>

            <div className="how-to-steps-list">
              {currentActivityData.howToSteps.map(step => (
                <div key={step.stepNumber} className="step-card">
                  <div className="step-number-pill font-tech">{step.stepNumber}</div>
                  <div className="step-body">
                    <h4 className="step-title font-tech">{step.title}</h4>
                    <p className="step-instruction">{step.instruction}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="modal-actions-row">
              <button 
                className="clean-primary-btn"
                onClick={() => {
                  handleApply();
                  setShowHowToModal(false);
                }}
              >
                <span>Got it, Optimize My Quest</span>
                <Check size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
