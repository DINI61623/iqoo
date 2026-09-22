import React from 'react';
import { Smartphone, BatteryCharging, HardDrive, Thermometer, Zap, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Badge } from '../common/Badge';
import './DeviceStatsMeter.css';

export const DeviceStatsMeter: React.FC = () => {
  const { selectedDevice } = useApp();

  return (
    <div className="hero-device-showcase-card glass-card">
      <div className="device-showcase-top">
        <div className="showcase-info">
          <div className="showcase-status-badge-row">
            <span className="showcase-hero-tag font-tech">FLAGSHIP ECOSYSTEM</span>
            <Badge variant="emerald" size="sm" pulse>CONNECTED</Badge>
          </div>
          <h3 className="showcase-model-name">{selectedDevice.name}</h3>
          <span className="showcase-edition-name">{selectedDevice.edition}</span>
        </div>
        <div className="device-visual-badge">
          <Smartphone size={32} className="phone-hero-icon" />
        </div>
      </div>

      <div className="showcase-metrics-grid">
        {/* Battery */}
        <div className="showcase-pill">
          <div className="pill-top">
            <Zap size={14} className="icon-yellow" />
            <span className="pill-label font-tech">BATTERY</span>
          </div>
          <div className="pill-val-row">
            <span className="pill-num font-tech">{selectedDevice.batteryLevel}%</span>
            <span className="pill-sub">120W Flash</span>
          </div>
          <div className="pill-progress-track">
            <div className="pill-progress-fill fill-yellow" style={{ width: `${selectedDevice.batteryLevel}%` }} />
          </div>
        </div>

        {/* Storage */}
        <div className="showcase-pill">
          <div className="pill-top">
            <HardDrive size={14} className="icon-blue" />
            <span className="pill-label font-tech">UFS 4.1 STORAGE</span>
          </div>
          <div className="pill-val-row">
            <span className="pill-num font-tech">{selectedDevice.storageUsedPercent}%</span>
            <span className="pill-sub">512 GB</span>
          </div>
          <div className="pill-progress-track">
            <div className="pill-progress-fill fill-blue" style={{ width: `${selectedDevice.storageUsedPercent}%` }} />
          </div>
        </div>

        {/* Temperature */}
        <div className="showcase-pill">
          <div className="pill-top">
            <Thermometer size={14} className="icon-orange" />
            <span className="pill-label font-tech">VC LIQUID TEMP</span>
          </div>
          <div className="pill-val-row">
            <span className="pill-num font-tech">{selectedDevice.temperature}°C</span>
            <span className="pill-sub">6.0K VC</span>
          </div>
          <div className="pill-progress-track">
            <div className="pill-progress-fill fill-orange" style={{ width: `${(selectedDevice.temperature / 45) * 100}%` }} />
          </div>
        </div>

        {/* Display Refresh */}
        <div className="showcase-pill">
          <div className="pill-top">
            <ShieldCheck size={14} className="icon-emerald" />
            <span className="pill-label font-tech">2K 144Hz LTPO</span>
          </div>
          <div className="pill-val-row">
            <span className="pill-num font-tech">{selectedDevice.fpsCurrent} FPS</span>
            <span className="pill-sub">Q3 Dual-Chip</span>
          </div>
          <div className="pill-progress-track">
            <div className="pill-progress-fill fill-emerald" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  );
};
