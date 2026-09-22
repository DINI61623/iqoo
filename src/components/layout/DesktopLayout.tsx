import React, { useState } from 'react';
import { 
  Home, 
  Cpu, 
  Mic, 
  Users, 
  FlaskConical, 
  BarChart3, 
  User, 
  Settings as SettingsIcon,
  ChevronDown, 
  Check, 
  Zap, 
  Activity,
  Sparkles,
  X,
  ShieldCheck,
  RotateCcw,
  Sliders,
  Menu
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NavigationTab, DeviceProfile } from '../../types';
import './DesktopLayout.css';

interface DesktopLayoutProps {
  children: React.ReactNode;
}

export const DesktopLayout: React.FC<DesktopLayoutProps> = ({ children }) => {
  const { 
    currentTab, 
    setCurrentTab, 
    selectedDevice, 
    setSelectedDevice, 
    allDevices,
    toggleMonsterMode,
    isSettingsOpen,
    setIsSettingsOpen,
    appliedSetupActivity
  } = useApp();

  const [deviceDropdownOpen, setDeviceDropdownOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [questAutoDetect, setQuestAutoDetect] = useState(true);
  const [telemetryConsent, setTelemetryConsent] = useState(true);
  const [thermalGuard, setThermalGuard] = useState(true);

  // Preferred Navigation Structure (Phase 19)
  const navItems: { id: NavigationTab; label: string; sub: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'home', label: 'MY iQOO', sub: 'Device Command Center', icon: <Home size={19} strokeWidth={2.2} /> },
    { id: 'smart', label: 'QUEST', sub: 'Adaptive Device Setup', icon: <Cpu size={19} strokeWidth={2.2} /> },
    { id: 'voice', label: 'TELL iQOO', sub: 'Intelligent Feedback', icon: <Mic size={19} strokeWidth={2.2} />, badge: 'AI' },
    { id: 'community', label: 'QUESTER VOICE', sub: 'Aggregated Experiences', icon: <Users size={19} strokeWidth={2.2} /> },
    { id: 'beta_lab', label: 'BETA LAB', sub: 'Product Experiments', icon: <FlaskConical size={19} strokeWidth={2.2} />, badge: 'LAB' },
    { id: 'pulse', label: 'iQOO PULSE', sub: 'Product Intelligence', icon: <BarChart3 size={19} strokeWidth={2.2} /> },
  ];



  const handleSelectDevice = (dev: DeviceProfile) => {
    setSelectedDevice(dev);
    setDeviceDropdownOpen(false);
  };

  const handleNavClick = (tabId: NavigationTab) => {
    setCurrentTab(tabId);
    setMobileDrawerOpen(false);
  };

  return (
    <div className="desktop-app-layout">
      {/* MOBILE TOPBAR (Visible only on mobile/tablet < 1024px) */}
      <header className="mobile-topbar">
        <div className="mobile-topbar-left" onClick={() => handleNavClick('home')}>
          <div className="brand-logo-cluster mobile-brand">
            <span className="brand-iqoo font-display">iQOO</span>
            <span className="brand-one font-tech">ONE</span>
          </div>
        </div>

        {/* Center: iQOO 15 • Connected */}
        <div className="mobile-topbar-center">
          <div className="mobile-device-status-pill font-tech">
            <span className="device-status-dot" />
            <span className="device-status-label">{selectedDevice.name} • Connected</span>
          </div>
        </div>

        {/* Right: Profile & Menu Button */}
        <div className="mobile-topbar-right">
          <button 
            className="mobile-avatar-btn"
            onClick={() => handleNavClick('profile')}
            aria-label="Profile"
            title="Alex V. (Profile)"
          >
            <span>A</span>
          </button>

          <button 
            className="mobile-hamburger-btn"
            onClick={() => setMobileDrawerOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* MOBILE NAVIGATION DRAWER (Slide-over from left) */}
      {mobileDrawerOpen && (
        <div className="mobile-drawer-backdrop" onClick={() => setMobileDrawerOpen(false)}>
          <div className="mobile-drawer-sheet animate-slide-right" onClick={e => e.stopPropagation()}>
            <div className="drawer-header">
              <div className="brand-logo-cluster" onClick={() => handleNavClick('home')}>
                <span className="brand-iqoo font-display">iQOO</span>
                <span className="brand-one font-tech">ONE</span>
                <span className="brand-os-pill font-tech">OriginOS 6</span>
              </div>
              <button 
                className="drawer-close-btn"
                onClick={() => setMobileDrawerOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Quick Hardware Controls inside Drawer */}
            <div className="drawer-controls-box">
              <div className="drawer-controls-top">
                <div className="drawer-telemetry-tag font-tech">
                  <Activity size={12} className="tele-icon-top" />
                  <span>{selectedDevice.fpsCurrent} FPS</span>
                  <span className="tele-sep">•</span>
                  <span>{selectedDevice.temperature}°C</span>
                </div>

                <button 
                  className={`drawer-monster-btn ${selectedDevice.monsterModeActive ? 'is-active' : ''}`}
                  onClick={toggleMonsterMode}
                >
                  <Zap size={13} />
                  <span className="font-tech">MONSTER</span>
                </button>
              </div>

              {/* Connected Device Selector in Drawer */}
              <div className="drawer-device-selector">
                <button 
                  className="drawer-device-trigger"
                  onClick={() => setDeviceDropdownOpen(!deviceDropdownOpen)}
                >
                  <div className="drawer-device-info font-tech">
                    <span className="device-status-dot" />
                    <span>{selectedDevice.name}</span>
                    <span className="drawer-dev-family">{selectedDevice.family}</span>
                  </div>
                  <ChevronDown size={14} className={`chevron-arrow ${deviceDropdownOpen ? 'is-open' : ''}`} />
                </button>

                {deviceDropdownOpen && (
                  <div className="drawer-device-dropdown animate-slide-up">
                    {allDevices.map(dev => (
                      <button
                        key={dev.id}
                        className={`dropdown-item ${dev.id === selectedDevice.id ? 'is-active' : ''}`}
                        onClick={() => handleSelectDevice(dev)}
                      >
                        <div className="item-details">
                          <span className="item-name font-tech">{dev.name}</span>
                          <span className="item-specs">{dev.chipset.split('(')[0]}</span>
                        </div>
                        {dev.id === selectedDevice.id && <Check size={16} className="item-check-icon" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Navigation links (All 8 destinations) */}
            <nav className="drawer-nav">
              <div className="nav-group-label font-tech">NAVIGATION</div>
              {navItems.map(item => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    className={`sidebar-nav-item ${isActive ? 'is-active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    <div className="nav-item-icon">
                      {item.icon}
                    </div>
                    <div className="nav-item-text">
                      <span className="nav-item-label font-tech">{item.label}</span>
                      <span className="nav-item-sub">{item.sub}</span>
                    </div>
                    {item.badge && (
                      <span className={`nav-item-badge font-tech badge-${item.badge.toLowerCase()}`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}

              <div className="nav-group-label font-tech" style={{ marginTop: '10px' }}>SECONDARY CONTROLS</div>
              <button 
                className={`sidebar-sub-item ${currentTab === 'profile' ? 'is-active' : ''}`}
                onClick={() => handleNavClick('profile')}
              >
                <User size={18} />
                <span className="font-tech">Profile & Capabilities</span>
              </button>

              <button 
                className="sidebar-sub-item"
                onClick={() => {
                  setMobileDrawerOpen(false);
                  setIsSettingsOpen(true);
                }}
              >
                <SettingsIcon size={18} />
                <span className="font-tech">Console Settings</span>
              </button>
            </nav>

            <div className="drawer-footer">
              <div className="sidebar-active-quest-pill" onClick={() => handleNavClick('smart')}>
                <div className="quest-indicator-dot" />
                <div className="quest-text-block">
                  <span className="quest-sub font-tech">CURRENT QUEST</span>
                  <span className="quest-title font-tech">{appliedSetupActivity.toUpperCase()} READY</span>
                </div>
                <span className="quest-link font-tech">TUNE</span>
              </div>
              <span className="sidebar-version font-tech">iQOO ONE • DEMO PLATFORM v2.6</span>
            </div>
          </div>
        </div>
      )}
      {/* 1. LEFT SIDEBAR (236px) */}
      <aside className="desktop-sidebar">
        <div className="sidebar-top-section">
          {/* Brand Wordmark */}
          <div className="sidebar-brand-wrapper" onClick={() => setCurrentTab('home')}>
            <div className="brand-logo-cluster">
              <span className="brand-iqoo font-display">iQOO</span>
              <span className="brand-one font-tech">ONE</span>
            </div>
            <span className="brand-os-pill font-tech">OriginOS 6</span>
          </div>

          {/* Navigation Items */}
          <nav className="sidebar-nav">
            <div className="nav-group-label font-tech">PRODUCT CONSOLE</div>
            {navItems.map(item => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  className={`sidebar-nav-item ${isActive ? 'is-active' : ''}`}
                  onClick={() => setCurrentTab(item.id)}
                >
                  <div className="nav-item-icon">
                    {item.icon}
                  </div>
                  <div className="nav-item-text">
                    <span className="nav-item-label font-tech">{item.label}</span>
                    <span className="nav-item-sub">{item.sub}</span>
                  </div>
                  {item.badge && (
                    <span className={`nav-item-badge font-tech badge-${item.badge.toLowerCase()}`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Bottom Secondary Controls */}
        <div className="sidebar-bottom-info">
          {/* Active Quest Status */}
          <div className="sidebar-active-quest-pill" onClick={() => setCurrentTab('smart')}>
            <div className="quest-indicator-dot" />
            <div className="quest-text-block">
              <span className="quest-sub font-tech">CURRENT QUEST</span>
              <span className="quest-title font-tech">{appliedSetupActivity.toUpperCase()} READY</span>
            </div>
            <span className="quest-link font-tech">TUNE</span>
          </div>

          {/* Secondary Nav: Profile & Settings */}
          <div className="sidebar-secondary-nav">
            <button 
              className={`sidebar-sub-item ${currentTab === 'profile' ? 'is-active' : ''}`}
              onClick={() => setCurrentTab('profile')}
            >
              <User size={16} />
              <span className="font-tech">Profile & Capabilities</span>
            </button>

            <button 
              className="sidebar-sub-item"
              onClick={() => setIsSettingsOpen(true)}
            >
              <SettingsIcon size={16} />
              <span className="font-tech">Console Settings</span>
            </button>
          </div>

          <div className="sidebar-version-row">
            <span className="sidebar-version font-tech">iQOO ONE • DEMO PLATFORM v2.6</span>
          </div>
        </div>
      </aside>

      {/* 2. MAIN WORKSPACE */}
      <div className="desktop-main-wrapper">
        {/* Top Header Bar */}
        <header className="desktop-topbar">
          <div className="topbar-left-tag font-tech">
            <Sparkles size={14} className="topbar-tag-icon" />
            <span>YOUR QUEST. YOUR DEVICE. YOUR VOICE.</span>
          </div>

          <div className="topbar-right">
            {/* Calibrated Hardware Telemetry Readout */}
            <div className="topbar-telemetry-pill font-tech" title="Calibrated Hardware Profile">
              <Activity size={13} className="tele-icon-top" />
              <span>{selectedDevice.fpsCurrent} FPS</span>
              <span className="tele-sep">•</span>
              <span>{selectedDevice.temperature}°C</span>
              <span className="tele-sep">•</span>
              <span className="tele-device-tag">{selectedDevice.family}</span>
            </div>

            {/* Monster Mode Switch */}
            <button 
              className={`topbar-monster-toggle ${selectedDevice.monsterModeActive ? 'is-active' : ''}`}
              onClick={toggleMonsterMode}
              title="Toggle Monster Mode Peak Performance"
            >
              <Zap size={14} />
              <span className="font-tech">MONSTER</span>
            </button>

            {/* Connected Device Selector Pill */}
            <div className="topbar-device-container">
              <button 
                className="device-pill-trigger"
                onClick={() => setDeviceDropdownOpen(!deviceDropdownOpen)}
                title="Switch Connected iQOO Device"
              >
                <div className="device-pill-info">
                  <span className="device-name font-tech">{selectedDevice.name}</span>
                  <span className="device-status-dot" />
                  <span className="device-status-text font-tech">Connected</span>
                </div>
                <ChevronDown size={14} className={`chevron-arrow ${deviceDropdownOpen ? 'is-open' : ''}`} />
              </button>

              {deviceDropdownOpen && (
                <div className="desktop-device-dropdown animate-slide-up">
                  <div className="dropdown-header font-tech">iQOO DEVICE ECOSYSTEM</div>
                  <div className="dropdown-list">
                    {allDevices.map(dev => (
                      <button
                        key={dev.id}
                        className={`dropdown-item ${dev.id === selectedDevice.id ? 'is-active' : ''}`}
                        onClick={() => handleSelectDevice(dev)}
                      >
                        <div className="item-details">
                          <div className="item-name-row">
                            <span className="item-name font-tech">{dev.name}</span>
                            <span className="item-family-tag font-tech">{dev.family}</span>
                          </div>
                          <span className="item-specs">{dev.chipset.split('(')[0]}</span>
                        </div>
                        {dev.id === selectedDevice.id && <Check size={16} className="item-check-icon" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* User Avatar */}
            <div 
              className="topbar-user-avatar"
              onClick={() => setCurrentTab('profile')}
              title="Alex V. (Master Quester)"
            >
              <span>A</span>
            </div>
          </div>
        </header>

        {/* Center Content Scroll Area */}
        <main className="desktop-content-area">
          <div className="desktop-max-container">
            {children}
          </div>
        </main>
      </div>

      {/* Settings Modal */}
      {isSettingsOpen && (
        <div className="desktop-modal-backdrop" onClick={() => setIsSettingsOpen(false)}>
          <div className="desktop-modal-card animate-slide-up" onClick={e => e.stopPropagation()}>
            <div className="modal-top-bar">
              <div className="modal-badge font-tech">
                <SettingsIcon size={14} />
                <span>iQOO ONE CONSOLE SETTINGS</span>
              </div>
              <button className="modal-close-btn" onClick={() => setIsSettingsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <h2 className="modal-heading">Ecosystem & Privacy Preferences</h2>
            <p className="modal-body-text">
              Configure how iQOO ONE coordinates between your hardware, OriginOS 6 smart dispatch, and product telemetry.
            </p>

            <div className="settings-options-list">
              <div className="setting-row">
                <div className="setting-info">
                  <span className="setting-title font-tech">QUEST AUTO-DETECTION</span>
                  <span className="setting-desc">OriginOS Sensor Fusion automatically senses when you launch games, cameras, or reading apps.</span>
                </div>
                <button 
                  className={`switch-toggle-btn ${questAutoDetect ? 'is-on' : ''}`}
                  onClick={() => setQuestAutoDetect(!questAutoDetect)}
                >
                  <span className="switch-knob" />
                </button>
              </div>

              <div className="setting-row">
                <div className="setting-info">
                  <span className="setting-title font-tech">ANONYMOUS TELEMETRY CONSENT</span>
                  <span className="setting-desc">Contribute aggregated frame pacing and thermal timestamps to iQOO Pulse to improve firmware.</span>
                </div>
                <button 
                  className={`switch-toggle-btn ${telemetryConsent ? 'is-on' : ''}`}
                  onClick={() => setTelemetryConsent(!telemetryConsent)}
                >
                  <span className="switch-knob" />
                </button>
              </div>

              <div className="setting-row">
                <div className="setting-info">
                  <span className="setting-title font-tech">HARDWARE THERMAL SAFETY GUARD</span>
                  <span className="setting-desc">Automatically enables motherboard power bypass charging when battery &gt; 20% during sustained gaming.</span>
                </div>
                <button 
                  className={`switch-toggle-btn ${thermalGuard ? 'is-on' : ''}`}
                  onClick={() => setThermalGuard(!thermalGuard)}
                >
                  <span className="switch-knob" />
                </button>
              </div>
            </div>

            <div className="modal-actions-row">
              <button 
                className="clean-primary-btn"
                onClick={() => setIsSettingsOpen(false)}
              >
                <span>Save Preferences</span>
                <Check size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
