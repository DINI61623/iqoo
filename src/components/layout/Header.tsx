import React, { useState } from 'react';
import { ChevronDown, BarChart3, RotateCcw, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { DeviceProfile } from '../../types';
import './Header.css';

export const Header: React.FC = () => {
  const { 
    selectedDevice, 
    setSelectedDevice, 
    allDevices, 
    openPulseDashboard, 
    resetDemoFlow 
  } = useApp();

  const [deviceDropdownOpen, setDeviceDropdownOpen] = useState(false);

  const handleSelectDevice = (dev: DeviceProfile) => {
    setSelectedDevice(dev);
    setDeviceDropdownOpen(false);
  };

  return (
    <header className="app-header">
      <div className="header-identity">
        <span className="header-greeting">Good morning, Spoorthy</span>
        
        <div className="header-device-row">
          <div className="device-dropdown-container">
            <button
              className="device-selector-btn"
              onClick={() => setDeviceDropdownOpen(!deviceDropdownOpen)}
              title="Select Device Profile"
            >
              <span className="device-title">{selectedDevice.name}</span>
              <ChevronDown size={14} className={`chevron-icon ${deviceDropdownOpen ? 'open' : ''}`} />
            </button>

            {deviceDropdownOpen && (
              <div className="device-dropdown-popover animate-slide-up">
                <div className="popover-header">
                  <span className="popover-title">DEVICE PROFILES</span>
                </div>
                <div className="popover-list">
                  {allDevices.map(dev => (
                    <button
                      key={dev.id}
                      className={`popover-item ${dev.id === selectedDevice.id ? 'is-active' : ''}`}
                      onClick={() => handleSelectDevice(dev)}
                    >
                      <div className="popover-item-text">
                        <span className="item-name">{dev.name}</span>
                        <span className="item-chip">{dev.chipset.split('(')[0]}</span>
                      </div>
                      {dev.id === selectedDevice.id && <Check size={16} className="item-check" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <span className="status-separator">•</span>

          <div className="connection-badge">
            <span className="connection-dot" />
            <span className="connection-text">Connected</span>
          </div>
        </div>
      </div>

      <div className="header-actions-right">
        {/* Pulse Dashboard Link */}
        <button
          className="header-action-btn"
          onClick={openPulseDashboard}
          title="iQOO PULSE Dashboard"
          aria-label="Open iQOO Pulse"
        >
          <BarChart3 size={18} />
        </button>

        {/* Reset / Restart */}
        <button
          className="header-action-btn"
          onClick={resetDemoFlow}
          title="Restart Onboarding"
          aria-label="Restart Experience"
        >
          <RotateCcw size={16} />
        </button>
      </div>
    </header>
  );
};
