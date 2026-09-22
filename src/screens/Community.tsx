import React, { useState } from 'react';
import { 
  Heart, 
  Lightbulb, 
  Flame, 
  FlaskConical, 
  ThumbsUp, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  Layers,
  Cpu
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CanonicalSignal, SignalCategory, LifecycleStage } from '../types';
import { LIFECYCLE_STAGES } from '../data/mockCommunity';
import './Screens.css';

export const Community: React.FC = () => {
  const { canonicalSignals, toggleSupportSignal, setCurrentTab } = useApp();
  const [activeCategory, setActiveCategory] = useState<SignalCategory | 'all'>('all');
  const [selectedSignal, setSelectedSignal] = useState<CanonicalSignal | null>(null);

  const categories: { id: SignalCategory | 'all'; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'ALL SIGNALS', icon: <Sparkles size={15} /> },
    { id: 'loved', label: '❤️ LOVED', icon: <Heart size={15} /> },
    { id: 'requested', label: '💡 REQUESTED', icon: <Lightbulb size={15} /> },
    { id: 'trending', label: '🔥 TRENDING', icon: <Flame size={15} /> },
    { id: 'testing', label: '🧪 TESTING', icon: <FlaskConical size={15} /> },
  ];

  const filteredSignals = activeCategory === 'all'
    ? canonicalSignals
    : canonicalSignals.filter(s => s.category === activeCategory);

  const getBadgeClass = (category: SignalCategory) => {
    switch (category) {
      case 'loved': return 'badge-loved';
      case 'requested': return 'badge-requested';
      case 'trending': return 'badge-trending';
      case 'testing': return 'badge-testing';
    }
  };

  const getStageIndex = (stage: LifecycleStage) => {
    return LIFECYCLE_STAGES.indexOf(stage);
  };

  return (
    <div className="desktop-screen-page community-page animate-fade-scale">
      {/* Header */}
      <div className="desktop-page-header">
        <div className="header-badge font-tech">
          <Sparkles size={13} />
          <span>AGGREGATED QUESTER INTELLIGENCE</span>
        </div>
        <h1 className="text-page-title">QUESTER VOICE</h1>
        <p className="text-body header-subtitle">"What are Questers discovering, loving, and requesting across the iQOO ecosystem?"</p>
      </div>

      {/* Category Filter Navigation Bar */}
      <div className="quester-voice-filter-bar">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`quester-filter-btn ${activeCategory === cat.id ? 'is-active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.icon}
            <span className="font-tech">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Canonical Signals Grid */}
      <div className="canonical-signals-grid">
        {filteredSignals.map(sig => {
          const currentStageIdx = getStageIndex(sig.lifecycleStage);
          return (
            <div 
              key={sig.id}
              className="feature-secondary canonical-signal-card"
              onClick={() => setSelectedSignal(sig)}
            >
              {/* Card Top Row */}
              <div className="sig-card-header">
                <div className="sig-badge-cluster">
                  <span className={`signal-category-pill font-tech ${getBadgeClass(sig.category)}`}>
                    {sig.badge}
                  </span>
                  <span className="sig-target-dev font-tech">{sig.targetDeviceFamily} Devices</span>
                </div>

                {sig.trendPercentage && (
                  <span className="sig-trend-pill font-tech">+{sig.trendPercentage}% THIS WEEK</span>
                )}
                {sig.positivePercentage && (
                  <span className="sig-pos-pill font-tech">{sig.positivePercentage}% POSITIVE</span>
                )}
                {sig.activeTestersCount && (
                  <span className="sig-test-pill font-tech">{sig.activeTestersCount} TESTERS</span>
                )}
              </div>

              {/* Title & Summary */}
              <div className="sig-card-body">
                <h3 className="sig-card-title">{sig.title}</h3>
                <p className="sig-card-summary">{sig.summary}</p>
              </div>

              {/* Lifecycle Progress Bar */}
              <div className="sig-lifecycle-mini-track">
                <div className="track-header">
                  <span className="track-label font-tech">CLOSED-LOOP PIPELINE</span>
                  <span className="track-current-stage font-tech">{sig.lifecycleStage}</span>
                </div>
                <div className="track-steps-bar">
                  {LIFECYCLE_STAGES.map((st, idx) => (
                    <div 
                      key={st}
                      className={`track-segment ${idx <= currentStageIdx ? 'is-completed' : ''} ${idx === currentStageIdx ? 'is-active-step' : ''}`}
                      title={st}
                    />
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="sig-card-footer">
                <button 
                  className={`sig-support-button ${sig.hasSupported ? 'is-supported' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSupportSignal(sig.id);
                  }}
                >
                  <ThumbsUp size={14} />
                  <span className="font-tech">{sig.hasSupported ? 'SUPPORTED' : 'SUPPORT (+1)'}</span>
                  <span className="sig-support-counter font-tech">{sig.supportCount}</span>
                </button>

                <div className="sig-details-link">
                  <span className="font-tech">VIEW 9-STEP EXPERIENCE TIMELINE</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 9-Step Experience Timeline Modal (Phase 8) */}
      {selectedSignal && (
        <div className="desktop-modal-backdrop" onClick={() => setSelectedSignal(null)}>
          <div className="desktop-modal-card signal-modal-large animate-slide-up" onClick={e => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="modal-top-bar">
              <div className="sig-badge-cluster">
                <span className={`signal-category-pill font-tech ${getBadgeClass(selectedSignal.category)}`}>
                  {selectedSignal.badge}
                </span>
                <span className="sig-target-dev font-tech">{selectedSignal.relatedSignalsCount} Questers Aggregated</span>
              </div>
              <button className="modal-close-btn" onClick={() => setSelectedSignal(null)}>
                <X size={20} />
              </button>
            </div>

            <h2 className="modal-heading">{selectedSignal.title}</h2>
            <p className="modal-body-text">{selectedSignal.detailText}</p>

            {/* 9-Step Closed-Loop Experience Timeline */}
            <div className="modal-lifecycle-full-section">
              <div className="full-lifecycle-header">
                <span className="lifecycle-title font-tech">CLOSED-LOOP EXPERIENCE TIMELINE</span>
                <span className="lifecycle-status-tag font-tech">CURRENT STAGE: {selectedSignal.lifecycleStage}</span>
              </div>

              <div className="lifecycle-stepper-full">
                {LIFECYCLE_STAGES.map((stage, idx) => {
                  const currentIdx = getStageIndex(selectedSignal.lifecycleStage);
                  const isDone = idx < currentIdx;
                  const isCurrent = idx === currentIdx;
                  return (
                    <div key={stage} className={`lifecycle-step-node ${isDone ? 'done' : ''} ${isCurrent ? 'current' : ''}`}>
                      <div className="node-circle font-tech">
                        {isDone ? <CheckCircle2 size={13} /> : idx + 1}
                      </div>
                      <span className="node-name font-tech">{stage}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Official iQOO R&D Engineer Notes */}
            {selectedSignal.engineerNotes && (
              <div className="rd-engineer-notes-box">
                <div className="rd-notes-header">
                  <div className="rd-author-info">
                    <span className="rd-author-name font-tech">{selectedSignal.engineerNotes.author}</span>
                    <span className="rd-author-role font-tech">{selectedSignal.engineerNotes.role}</span>
                  </div>
                  <span className="rd-firmware-tag font-tech">
                    TARGET: {selectedSignal.engineerNotes.targetFirmware}
                  </span>
                </div>
                <p className="rd-notes-body">"{selectedSignal.engineerNotes.note}"</p>
              </div>
            )}

            {/* Common Context Breakdown */}
            <div className="modal-contexts-row">
              <span className="contexts-title font-tech">COMMON EXPERIENCE CONTEXTS:</span>
              <div className="contexts-chips">
                {selectedSignal.commonContexts.map(c => (
                  <span key={c} className="context-chip font-tech">{c}</span>
                ))}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="modal-actions-row">
              <button 
                className={`clean-primary-btn modal-support-btn ${selectedSignal.hasSupported ? 'is-active' : ''}`}
                onClick={() => toggleSupportSignal(selectedSignal.id)}
              >
                <ThumbsUp size={16} />
                <span>{selectedSignal.hasSupported ? 'Supported by you' : 'Support this signal (+1)'}</span>
                <span className="modal-support-num">({selectedSignal.supportCount})</span>
              </button>

              {selectedSignal.category === 'testing' && (
                <button 
                  className="clean-secondary-btn"
                  onClick={() => {
                    setSelectedSignal(null);
                    setCurrentTab('beta_lab');
                  }}
                >
                  <FlaskConical size={16} />
                  <span>Join Beta Test</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
