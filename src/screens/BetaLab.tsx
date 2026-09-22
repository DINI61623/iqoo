import React, { useState } from 'react';
import { 
  FlaskConical, 
  CheckCircle2, 
  ArrowRight, 
  Check, 
  Play, 
  HelpCircle,
  Sliders,
  MessageSquare,
  ShieldCheck,
  Zap,
  RotateCcw
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BetaExperiment } from '../types';
import './Screens.css';

export const BetaLab: React.FC = () => {
  const { 
    betaExperiments, 
    joinBetaExperiment, 
    submitBetaFeedback,
    selectedDevice
  } = useApp();

  const [activeExperiment, setActiveExperiment] = useState<BetaExperiment>(betaExperiments[0]);
  const [selectedSentiment, setSelectedSentiment] = useState<'Worked' | 'Partially' | 'Needs improvement' | null>(null);
  const [feedbackNote, setFeedbackNote] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [testSimulating, setTestSimulating] = useState(false);
  const [simulationCompleted, setSimulationCompleted] = useState(false);

  const handleJoin = (id: string) => {
    joinBetaExperiment(id);
  };

  const handleRunSimulation = () => {
    setTestSimulating(true);
    setSimulationCompleted(false);
    setTimeout(() => {
      setTestSimulating(false);
      setSimulationCompleted(true);
    }, 1800);
  };

  const handleSubmitVerification = () => {
    if (!selectedSentiment) return;
    submitBetaFeedback(activeExperiment.id, selectedSentiment, feedbackNote);
    setFeedbackSubmitted(true);
  };

  const handleResetVerification = () => {
    setFeedbackSubmitted(false);
    setSelectedSentiment(null);
    setFeedbackNote('');
    setSimulationCompleted(false);
  };

  return (
    <div className="desktop-screen-page beta-lab-page animate-fade-scale">
      {/* Header */}
      <div className="desktop-page-header">
        <div className="header-badge font-tech">
          <FlaskConical size={13} />
          <span>CLOSED-LOOP PRODUCT LAB</span>
        </div>
        <h1 className="text-page-title">iQOO BETA LAB</h1>
        <p className="text-body header-subtitle">"Help shape what's next. Turn Quester experience signals into tested firmware improvements."</p>
      </div>

      {/* Hero Closed-Loop Banner (Phase 11) */}
      <div className="beta-closed-loop-banner glass-card">
        <div className="loop-left">
          <span className="loop-tag font-tech">USER EXPERIENCE → PRODUCT EXPERIMENT</span>
          <h3 className="loop-heading">Verify firmware improvements before official OTA release.</h3>
          <p className="loop-desc">
            Quester feedback from <strong>Tell iQOO</strong> creates prototype tests. You test the sandbox profile on your {selectedDevice.name} and verify whether the experience genuinely improved.
          </p>
        </div>

        <div className="loop-steps-diagram">
          <div className="diag-step font-tech">EXPERIENCE</div>
          <span className="diag-arr">→</span>
          <div className="diag-step font-tech">TEST</div>
          <span className="diag-arr">→</span>
          <div className="diag-step font-tech">FEEDBACK</div>
          <span className="diag-arr">→</span>
          <div className="diag-step step-highlight font-tech">VERIFICATION</div>
        </div>
      </div>

      {/* Main 2-Column Layout */}
      <div className="beta-lab-grid">
        {/* Left Column: Experiments List */}
        <div className="beta-experiments-list-col">
          <span className="list-heading font-tech">ACTIVE PRODUCT EXPERIMENTS</span>
          
          <div className="experiments-cards-stack">
            {betaExperiments.map(exp => {
              const isSelected = activeExperiment.id === exp.id;
              return (
                <div
                  key={exp.id}
                  className={`feature-secondary beta-exp-card ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => {
                    setActiveExperiment(exp);
                    setFeedbackSubmitted(false);
                    setSelectedSentiment(null);
                    setFeedbackNote('');
                    setSimulationCompleted(false);
                  }}
                >
                  <div className="exp-card-header">
                    <span className="exp-badge font-tech">{exp.badge}</span>
                    <span className="exp-version font-tech">{exp.version}</span>
                  </div>

                  <h3 className="exp-card-title">{exp.title}</h3>
                  <p className="exp-card-sub">{exp.subtitle}</p>

                  <div className="exp-card-footer">
                    <span className="exp-participants font-tech">
                      {exp.participantsCount} / {exp.maxParticipants} Questers Enrolled
                    </span>
                    {exp.isJoined ? (
                      <span className="exp-joined-pill font-tech">
                        <Check size={12} />
                        <span>ENROLLED</span>
                      </span>
                    ) : (
                      <span className="exp-join-cta font-tech">JOIN TEST</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Experiment Detail & Test Bench */}
        <div className="beta-testbench-col">
          <div className="feature-primary testbench-card">
            {/* Header */}
            <div className="testbench-top">
              <div>
                <span className="testbench-cat font-tech">{activeExperiment.category}</span>
                <h2 className="testbench-title">{activeExperiment.title}</h2>
              </div>

              <button
                className={`clean-primary-btn join-exp-btn ${activeExperiment.isJoined ? 'is-enrolled' : ''}`}
                onClick={() => handleJoin(activeExperiment.id)}
              >
                {activeExperiment.isJoined ? (
                  <>
                    <Check size={15} />
                    <span>Enrolled in Test</span>
                  </>
                ) : (
                  <>
                    <FlaskConical size={15} />
                    <span>Join Beta</span>
                  </>
                )}
              </button>
            </div>

            <p className="testbench-desc">{activeExperiment.description}</p>

            {/* Structured Experiment Specs (Phase 11) */}
            <div className="experiment-specs-breakdown-grid">
              <div className="exp-spec-box">
                <span className="exp-spec-key font-tech">WHAT IS CHANGING?</span>
                <p className="exp-spec-val">{activeExperiment.whatIsChanging}</p>
              </div>

              <div className="exp-spec-box">
                <span className="exp-spec-key font-tech">WHY TESTED?</span>
                <p className="exp-spec-val">{activeExperiment.whyTested}</p>
              </div>

              <div className="exp-spec-box">
                <span className="exp-spec-key font-tech">WHO CAN TEST?</span>
                <p className="exp-spec-val">{activeExperiment.whoCanTest}</p>
              </div>

              <div className="exp-spec-box">
                <span className="exp-spec-key font-tech">TEST STATUS</span>
                <div className="exp-status-row">
                  <span className="status-tag-active font-tech">{activeExperiment.status}</span>
                  <span className="target-chip font-tech">{selectedDevice.name} Compatible</span>
                </div>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="testbench-highlights">
              <span className="highlights-label font-tech">EXPECTED EXPERIENCE GAINS:</span>
              <div className="highlights-grid">
                {activeExperiment.highlights.map((h, i) => (
                  <div key={i} className="highlight-item">
                    <CheckCircle2 size={15} className="highlight-icon" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Sandbox Simulation Test Bench */}
            <div className="prototype-simulator-box">
              <div className="sim-header">
                <span className="sim-title font-tech">INTERACTIVE SANDBOX SIMULATION</span>
                <span className="sim-dev font-tech">Hardware: {selectedDevice.name}</span>
              </div>

              <div className="sim-viewport">
                {testSimulating ? (
                  <div className="sim-running-state">
                    <div className="sim-spinner" />
                    <span className="font-tech">INJECTING EXPERIMENTAL DRIVER PROFILE...</span>
                    <span className="sim-sub font-tech">Simulating sustained governor load on {selectedDevice.chipset.split(' (')[0]}</span>
                  </div>
                ) : simulationCompleted ? (
                  <div className="sim-completed-state animate-slide-up">
                    <CheckCircle2 size={24} className="sim-success-icon" />
                    <div className="sim-completed-text">
                      <span className="sim-done-title font-tech">SIMULATION TEST RUN FINISHED</span>
                      <span className="sim-done-desc">Observed 144FPS stability with 2.3°C cooler surface thermal dissipation.</span>
                    </div>
                    <button 
                      className="clean-secondary-btn sim-re-btn"
                      onClick={handleRunSimulation}
                    >
                      <RotateCcw size={14} />
                      <span>Re-Run</span>
                    </button>
                  </div>
                ) : (
                  <div className="sim-idle-state">
                    <button 
                      className="clean-primary-btn run-sim-btn"
                      onClick={handleRunSimulation}
                    >
                      <Play size={16} />
                      <span>Run Sandbox Simulation</span>
                    </button>
                    <span className="sim-hint">Simulate real-time thermal & frame rate differences on your device</span>
                  </div>
                )}
              </div>
            </div>

            {/* Phase 11 & 16: Verify Improvement Questionnaire */}
            <div className="test-evaluation-form">
              <span className="eval-question font-tech">VERIFY IMPROVEMENT: HOW DID IT FEEL?</span>

              {!feedbackSubmitted ? (
                <div className="eval-form-body">
                  <div className="sentiment-selector-row">
                    <button
                      className={`sentiment-btn sent-worked ${selectedSentiment === 'Worked' ? 'is-active' : ''}`}
                      onClick={() => setSelectedSentiment('Worked')}
                    >
                      <CheckCircle2 size={16} />
                      <span className="font-tech">WORKED (IMPROVED)</span>
                    </button>

                    <button
                      className={`sentiment-btn sent-partial ${selectedSentiment === 'Partially' ? 'is-active' : ''}`}
                      onClick={() => setSelectedSentiment('Partially')}
                    >
                      <Sliders size={16} />
                      <span className="font-tech">PARTIALLY</span>
                    </button>

                    <button
                      className={`sentiment-btn sent-improve ${selectedSentiment === 'Needs improvement' ? 'is-active' : ''}`}
                      onClick={() => setSelectedSentiment('Needs improvement')}
                    >
                      <MessageSquare size={16} />
                      <span className="font-tech">NEEDS IMPROVEMENT</span>
                    </button>
                  </div>

                  <input
                    type="text"
                    className="eval-comment-input"
                    placeholder="Add brief observation (e.g. Phone felt noticeably cooler during 120 FPS match)..."
                    value={feedbackNote}
                    onChange={e => setFeedbackNote(e.target.value)}
                  />

                  <button
                    className="clean-primary-btn eval-submit-btn"
                    onClick={handleSubmitVerification}
                    disabled={!selectedSentiment}
                  >
                    <span>Verify Improvement</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              ) : (
                <div className="eval-success-banner animate-slide-up">
                  <CheckCircle2 size={20} className="eval-success-icon" />
                  <div className="eval-success-content">
                    <span className="eval-success-title font-tech">EXPERIENCE VERIFIED & DISPATCHED TO iQOO R&D</span>
                    <p className="eval-success-desc">
                      Your verification vote has updated the <strong>iQOO Pulse</strong> closed-loop pipeline for {activeExperiment.title}.
                    </p>
                  </div>
                  <button 
                    className="clean-secondary-btn edit-verif-btn"
                    onClick={handleResetVerification}
                  >
                    <span>Update Vote</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
