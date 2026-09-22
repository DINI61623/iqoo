import React, { useEffect } from 'react';
import { Zap, Cpu, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Screens.css';

export const Splash: React.FC = () => {
  const { setCurrentScreen } = useApp();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen('onboarding');
    }, 2800);
    return () => clearTimeout(timer);
  }, [setCurrentScreen]);

  return (
    <div className="screen-splash" onClick={() => setCurrentScreen('onboarding')}>
      <div className="splash-bg-aura" />

      <div className="splash-center-content animate-fade-scale">
        <div className="splash-logo-container">
          <div className="splash-logo-orb animate-pulse-yellow">
            <Zap size={44} className="splash-zap-icon" />
          </div>
          <div className="splash-ring-outer" />
        </div>

        <div className="splash-brand-title-group">
          <h1 className="splash-brand-name">
            <span className="splash-iqoo font-display">iQOO</span>
            <span className="splash-one font-tech">ONE</span>
          </h1>
          <p className="splash-tagline font-display">Your Quest. Your Device. Your Voice.</p>
        </div>

        <div className="splash-chip-badge">
          <Cpu size={14} className="chip-badge-icon" />
          <span className="font-tech">POWERED BY DUAL-CHIP INTELLIGENCE</span>
        </div>
      </div>

      <div className="splash-bottom-loader">
        <div className="loader-line-track">
          <div className="loader-line-fill" />
        </div>
        <span className="loader-text font-tech">INITIALIZING DEVICE TELEMETRY...</span>
      </div>
    </div>
  );
};
