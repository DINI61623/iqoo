import React, { useState } from 'react';
import { Cpu, Mic, Users, ArrowRight, Zap } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button } from '../components/common/Button';
import './Screens.css';

export const Onboarding: React.FC = () => {
  const { setCurrentScreen } = useApp();
  const [step, setStep] = useState(0);

  const slides = [
    {
      id: 'device',
      icon: <Cpu size={36} className="slide-icon-tech" />,
      badge: 'DEVICE INTELLIGENCE',
      title: 'Monster Performance at Your Fingertips',
      desc: 'Real-time dual-chip monitoring, SuperComputing Q3 frame interpolation, adaptive VC cooling, and tailored hardware optimizations for your iQOO device.',
      accent: 'yellow'
    },
    {
      id: 'voice',
      icon: <Mic size={36} className="slide-icon-voice" />,
      badge: 'YOUR VOICE',
      title: 'Report Issues at the Speed of Speech',
      desc: 'Speak your experience naturally. iQOO AI structures your voice and hardware telemetry snapshots into actionable engineering tickets in seconds.',
      accent: 'blue'
    },
    {
      id: 'community',
      icon: <Users size={36} className="slide-icon-community" />,
      badge: 'QUESTER VOICE',
      title: 'Powering Direct iQOO OTA Upgrades',
      desc: 'Join fellow iQOO Questers. Support trending feature requests, validate signals with "+1 Support", and track firmware updates in real time.',
      accent: 'monster'
    }
  ];

  const currentSlide = slides[step];

  const handleNext = () => {
    if (step < slides.length - 1) {
      setStep(step + 1);
    } else {
      setCurrentScreen('device_detect');
    }
  };

  const handleSkip = () => {
    setCurrentScreen('device_detect');
  };

  return (
    <div className="screen-onboarding">
      <div className="onboarding-top-bar">
        <button className="skip-btn font-tech" onClick={handleSkip}>
          Skip
        </button>
      </div>

      <div className="onboarding-content-card animate-slide-up" key={currentSlide.id}>
        <div className={`slide-icon-circle accent-${currentSlide.accent}`}>
          {currentSlide.icon}
        </div>

        <div className="slide-badge-wrapper">
          <span className={`slide-badge font-tech badge-${currentSlide.accent}`}>
            {currentSlide.badge}
          </span>
        </div>

        <h2 className="slide-title">{currentSlide.title}</h2>
        <p className="slide-desc">{currentSlide.desc}</p>
      </div>

      <div className="onboarding-bottom-actions">
        {/* Step dots */}
        <div className="step-dots-row">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`step-dot ${idx === step ? 'is-active' : ''}`}
              onClick={() => setStep(idx)}
            />
          ))}
        </div>

        <Button
          variant={step === slides.length - 1 ? 'yellow' : 'monster'}
          size="lg"
          fullWidth
          onClick={handleNext}
          icon={step === slides.length - 1 ? <Zap size={18} /> : <ArrowRight size={18} />}
          iconPosition="right"
        >
          {step === slides.length - 1 ? 'Identify My iQOO Device' : 'Continue'}
        </Button>
      </div>
    </div>
  );
};
