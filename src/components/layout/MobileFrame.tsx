import React from 'react';
import { Smartphone, Maximize2, BarChart3, RefreshCw, Cpu, Layers } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import './MobileFrame.css';

interface MobileFrameProps {
  children: React.ReactNode;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({ children }) => {
  const { 
    viewportMode, 
    setViewportMode, 
    selectedDevice, 
    resetDemoFlow,
    openPulseDashboard,
    currentScreen
  } = useApp();

  const isFrameMode = viewportMode === 'mobile_frame';

  return (
    <div className={`iqoo-app-container ${isFrameMode ? 'mode-frame' : 'mode-fullscreen'}`}>
      {/* Top Demo Toolbar Switcher */}
      <div className="demo-control-bar glass-panel">
        <div className="bar-brand">
          <span className="dot-live" />
          <span className="bar-title font-tech">iQOO ONE ECOSYSTEM</span>
          <span className="bar-badge">v1.0-PROTOTYPE</span>
        </div>

        <div className="bar-view-toggles">
          <button
            className={`toggle-btn ${viewportMode === 'mobile_frame' ? 'is-active' : ''}`}
            onClick={() => setViewportMode('mobile_frame')}
            title="Mobile Phone Viewport (390 x 844)"
          >
            <Smartphone size={14} />
            <span>Phone Frame</span>
          </button>

          <button
            className={`toggle-btn ${viewportMode === 'fullscreen_mobile' ? 'is-active' : ''}`}
            onClick={() => setViewportMode('fullscreen_mobile')}
            title="Expanded Fullscreen Mobile View"
          >
            <Maximize2 size={14} />
            <span>Fullscreen</span>
          </button>

          <button
            className={`toggle-btn pulse-glow-tab ${viewportMode === 'pulse_dashboard' ? 'is-active' : ''}`}
            onClick={openPulseDashboard}
            title="iQOO PULSE Product Intelligence Dashboard"
          >
            <BarChart3 size={14} />
            <span>iQOO PULSE (Dashboard)</span>
          </button>
        </div>

        <div className="bar-device-info">
          <Cpu size={14} className="chip-icon" />
          <span className="device-tag">{selectedDevice.name} • {selectedDevice.supercomputingChip.split(' ')[0]}</span>
          <button className="icon-tool-btn" onClick={resetDemoFlow} title="Restart Experience">
            <RefreshCw size={13} />
          </button>
        </div>
      </div>

      {/* Main Workspace Frame */}
      <div className="phone-wrapper-center">
        {isFrameMode ? (
          <div className="phone-hardware-chassis">
            {/* Ambient edge aura glow for Monster Mode or Yellow */}
            <div className={`phone-aura-glow ${selectedDevice.monsterModeActive ? 'monster-aura' : ''}`} />

            {/* Hardware Side Buttons */}
            <div className="hardware-button hw-volume-up" />
            <div className="hardware-button hw-volume-down" />
            <div className="hardware-button hw-power" />

            {/* Screen Glass Area */}
            <div className="phone-screen-viewport">
              {children}
              {/* Home indicator pill */}
              <div className="android-gesture-pill" />
            </div>
          </div>
        ) : (
          <div className="fullscreen-mobile-viewport">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
