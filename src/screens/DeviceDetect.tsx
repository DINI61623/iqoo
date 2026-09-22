import React, { useState, useEffect } from 'react';
import { Smartphone, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { DeviceProfile } from '../types';
import './Screens.css';

export const DeviceDetect: React.FC = () => {
  const { selectedDevice, setSelectedDevice, allDevices, setCurrentScreen } = useApp();
  const [isScanning, setIsScanning] = useState(true);
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsScanning(false);
          return 100;
        }
        return prev + 25;
      });
    }, 250);
    return () => clearInterval(timer);
  }, []);

  const handleSelectDifferentDevice = (dev: DeviceProfile) => {
    setSelectedDevice(dev);
  };

  return (
    <div className="screen-device-detect">
      <div className="detect-header">
        <span className="detect-tag font-tech">STEP 1 OF 2 • HARDWARE DISCOVERY</span>
        <h2 className="detect-title">Device Identification</h2>
        <p className="detect-subtitle">
          Mapping hardware capabilities, SuperComputing coprocessor, and display architecture.
        </p>
      </div>

      {isScanning ? (
        <div className="scanning-container animate-fade-scale">
          <div className="scanner-radar-orb">
            <div className="scanner-sweep animate-radar" />
            <Smartphone size={48} className="scanner-phone-icon" />
            <div className="scanner-laser animate-slide-up" />
          </div>

          <div className="scan-progress-box">
            <span className="scan-status-text font-tech">
              ANALYZING HARDWARE COPROCESSOR... {scanProgress}%
            </span>
            <div className="scan-track">
              <div className="scan-fill" style={{ width: `${scanProgress}%` }} />
            </div>
          </div>
        </div>
      ) : (
        <div className="detected-result-container animate-slide-up">
          {/* Main Detected Device Card */}
          <div className="detected-main-card glass-card">
            <div className="detected-top-row">
              <div className="detected-badge-pair">
                <Badge variant="emerald" size="sm" pulse>
                  <ShieldCheck size={12} />
                  <span>IDENTIFIED</span>
                </Badge>
                <span className="detected-model-code font-tech">{selectedDevice.codename}</span>
              </div>
              <span className="detected-os font-tech">{selectedDevice.osVersion.split('/')[0]}</span>
            </div>

            <h3 className="detected-device-name">{selectedDevice.name}</h3>
            <span className="detected-edition font-tech">{selectedDevice.edition}</span>

            {/* Spec Matrix */}
            <div className="spec-matrix-grid">
              <div className="matrix-cell">
                <span className="matrix-label font-tech">FLAGSHIP CHIPSET</span>
                <span className="matrix-value font-tech">{selectedDevice.chipset.split('(')[0]}</span>
              </div>
              <div className="matrix-cell">
                <span className="matrix-label font-tech">DISPLAY ENGINE</span>
                <span className="matrix-value font-tech val-blue">{selectedDevice.supercomputingChip}</span>
              </div>
              <div className="matrix-cell">
                <span className="matrix-label font-tech">RAM / STORAGE</span>
                <span className="matrix-value font-tech">{selectedDevice.ram.split(' ')[0]} • {selectedDevice.storage}</span>
              </div>
              <div className="matrix-cell">
                <span className="matrix-label font-tech">BATTERY & FLASH</span>
                <span className="matrix-value font-tech val-green">{selectedDevice.batteryCap.split(' ')[0]} mAh ({selectedDevice.chargingSpeed.split(' ')[0]})</span>
              </div>
            </div>
          </div>

          {/* Device Profile Switcher for Testing */}
          <div className="device-switcher-section">
            <div className="switcher-header">
              <span className="switcher-label font-tech">SWITCH TEST PROFILE:</span>
            </div>
            <div className="device-chip-options">
              {allDevices.map(dev => (
                <button
                  key={dev.id}
                  className={`device-pill-btn ${dev.id === selectedDevice.id ? 'is-selected' : ''}`}
                  onClick={() => handleSelectDifferentDevice(dev)}
                >
                  <span className="pill-name font-tech">{dev.name}</span>
                  {dev.id === selectedDevice.id && <CheckCircle2 size={13} className="check-yellow" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="detect-bottom-action">
        <Button
          variant="yellow"
          size="lg"
          fullWidth
          disabled={isScanning}
          onClick={() => setCurrentScreen('user_interests')}
          icon={<ArrowRight size={18} />}
          iconPosition="right"
        >
          Confirm & Personalize Quest
        </Button>
      </div>
    </div>
  );
};
