import React, { useState } from 'react';
import { Cpu, Zap, Activity, ShieldCheck, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import './DeviceVisualizer.css';

export const DeviceVisualizer: React.FC = () => {
  const { selectedDevice, toggleMonsterMode } = useApp();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`device-visualizer-root ${isHovered ? 'is-interacting' : ''} ${selectedDevice.monsterModeActive ? 'monster-engaged' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Ambient Lighting Aura */}
      <div className="device-ambient-glow" />

      {/* 3D Floating Phone Stage */}
      <div className="phone-3d-stage">
        {/* Flagship Body Chassis */}
        <div className="phone-chassis">
          {/* Outer Titanium Bezel */}
          <div className="phone-outer-frame">
            {/* Glossy Reflection Highlight */}
            <div className="frame-specular-glare" />

            {/* Phone Screen Display (OriginOS 6) */}
            <div className="phone-screen-display">
              {/* OriginOS 6 Top Island Status */}
              <div className="phone-island-bar">
                <span className="island-time font-tech">09:41</span>
                <div className="island-punch-hole">
                  <div className="camera-lens-dot" />
                </div>
                <div className="island-badges">
                  <span className="island-net font-tech">{selectedDevice.networkType}</span>
                  <div className="island-battery-pill">
                    <span className="font-tech">{selectedDevice.batteryLevel}%</span>
                  </div>
                </div>
              </div>

              {/* OriginOS 6 Live Interactive Surface */}
              <div className="screen-content-canvas">
                {/* Wallpaper Geometric Wave */}
                <div className="screen-bg-mesh" />

                {/* Hero OriginOS Dual-Core Engine Widget */}
                <div className="phone-core-widget">
                  <div className="widget-top-row">
                    <div className="chip-brand-tag">
                      <Cpu size={14} className="chip-ico" />
                      <span className="font-tech">DUAL-CHIP ENGINE</span>
                    </div>
                    <span className={`engine-status-pill font-tech ${selectedDevice.monsterModeActive ? 'monster-on' : ''}`}>
                      {selectedDevice.monsterModeActive ? 'MONSTER ACTIVE' : 'OPTIMAL'}
                    </span>
                  </div>

                  <div className="widget-chip-title">
                    <span className="chip-main font-tech">SUPERCOMPUTING Q3</span>
                    <span className="chip-soc font-sans">Snapdragon® 8 Elite Gen 4</span>
                  </div>

                  {/* Dynamic Telemetry HUD */}
                  <div className="widget-telemetry-strip">
                    <div className="tele-item">
                      <span className="tele-lbl font-tech">FRAME RATE</span>
                      <div className="tele-val-row">
                        <Activity size={12} className="tele-icon" />
                        <span className="tele-val font-tech">{selectedDevice.fpsCurrent} FPS</span>
                      </div>
                    </div>

                    <div className="tele-divider" />

                    <div className="tele-item">
                      <span className="tele-lbl font-tech">3D VC TEMP</span>
                      <span className={`tele-val font-tech ${selectedDevice.temperature > 37 ? 'temp-warn' : ''}`}>
                        {selectedDevice.temperature}°C
                      </span>
                    </div>
                  </div>
                </div>

                {/* OriginOS 6 Dock / Quick Monster Switch */}
                <div className="phone-quick-dock">
                  <button 
                    className={`phone-monster-btn ${selectedDevice.monsterModeActive ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMonsterMode();
                    }}
                    title="Toggle Monster Mode"
                  >
                    <Zap size={14} />
                    <span className="font-tech">
                      {selectedDevice.monsterModeActive ? 'MONSTER ON (144Hz)' : 'TAP FOR MONSTER'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Camera Ring Halo Effect (Iconic iQOO Halo Light) */}
          <div className="chassis-halo-light" />
        </div>

        {/* Floating Spec Tags */}
        <div className="floating-spec-badge badge-top-right animate-slide-up">
          <Sparkles size={13} className="spec-icon" />
          <div>
            <span className="spec-title font-tech">2K 144Hz LTPO</span>
            <span className="spec-desc">BOE Q10 Ultra Eyecare</span>
          </div>
        </div>

        <div className="floating-spec-badge badge-bottom-left animate-slide-up">
          <ShieldCheck size={13} className="spec-icon" />
          <div>
            <span className="spec-title font-tech">7000mm² 3D VC</span>
            <span className="spec-desc">IceCore Dynamic Vapor Chamber</span>
          </div>
        </div>
      </div>
    </div>
  );
};
