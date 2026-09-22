import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  Square, 
  FileText, 
  Image as ImageIcon, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  RotateCcw, 
  Edit3, 
  Check, 
  Users, 
  Sliders, 
  Zap,
  Activity,
  Cpu,
  Layers,
  HelpCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { StructuredAiSignal } from '../types';
import './Screens.css';

export const Voice: React.FC = () => {
  const { selectedDevice, submitFeedback, setCurrentTab, openSmartWithActivity } = useApp();

  const [inputMode, setInputMode] = useState<'voice' | 'type' | 'show'>('voice');
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(1);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [voiceFallbackActive, setVoiceFallbackActive] = useState(false);

  const [userSaidText, setUserSaidText] = useState('');
  const [isEditingStructured, setIsEditingStructured] = useState(false);

  // Exact Flow C & D AI Understood Schema
  const [structuredData, setStructuredData] = useState<StructuredAiSignal>({
    category: 'Gaming & Thermals',
    experience: 'Thermal increase',
    quest: 'Gaming',
    context: 'Long gaming session',
    device: selectedDevice.name,
    trigger: 'Sustained performance',
    recentUpdate: 'OriginOS 6',
    confidence: 0.98,
    relatedCount: 486,
    aiInsight: 'This experience appears primarily during sustained high-performance gaming sessions.',
    similarContext: 'Long gaming sessions, High performance, Warm environment'
  });

  // Preset sample queries for interactive demoing
  const samplePrompts = [
    {
      label: 'Gaming Thermals',
      text: 'My phone gets warm after playing for an hour.',
      structured: {
        category: 'Gaming & Thermals',
        experience: 'Thermal increase',
        quest: 'Gaming',
        context: 'Long gaming session',
        device: selectedDevice.name,
        trigger: 'Sustained performance',
        recentUpdate: 'OriginOS 6',
        confidence: 0.98,
        relatedCount: 486,
        aiInsight: 'This experience appears primarily during sustained high-performance gaming sessions.',
        similarContext: 'Long gaming sessions, High performance, Warm environment'
      }
    },
    {
      label: 'Multitasking Fluidity',
      text: 'The smoothness during multitasking feels noticeably better with OriginOS 6.',
      structured: {
        category: 'UI & Multitasking',
        experience: 'Smoothness enhancement',
        quest: 'Working',
        context: 'Rapid app switching with atomic cards',
        device: selectedDevice.name,
        trigger: 'Dynamic RAM allocation',
        recentUpdate: 'OriginOS 6.0 Stable',
        confidence: 0.96,
        relatedCount: 3410,
        aiInsight: 'High customer satisfaction clustered around 16GB LPDDR5X memory scheduling and fluid gesture physics.',
        similarContext: 'Continuous multitasking • Atomic Windows'
      }
    },
    {
      label: 'Camera Specs',
      text: 'Portrait mode edge detection occasionally blurs the rim of my spectacles in night photos.',
      structured: {
        category: 'Camera & Imaging',
        experience: 'Edge segmentation artifact',
        quest: 'Creating',
        context: 'Low-light indoor portrait with glasses',
        device: selectedDevice.name,
        trigger: 'Neural depth map segmentation on thin frames',
        recentUpdate: 'OriginOS 6',
        confidence: 0.94,
        relatedCount: 142,
        aiInsight: 'Clustered around fine wireframe boundaries under high-contrast indoor sodium lighting.',
        similarContext: 'Low light • metallic spectacle frames'
      }
    }
  ];

  // Recording timer
  useEffect(() => {
    let timer: any;
    if (isRecording) {
      timer = setInterval(() => {
        setRecordingSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRecording]);

  const handleStartRecord = () => {
    setIsRecording(true);
    setHasAnalyzed(false);
    setIsAnalyzing(false);
    setRecordingSeconds(0);
    setVoiceFallbackActive(false);

    // Graceful microphone check & fallback handling
    try {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        recognition.onresult = (event: any) => {
          if (event.results && event.results[0] && event.results[0][0]) {
            setUserSaidText(event.results[0][0].transcript);
          }
        };
        recognition.onerror = () => {
          setVoiceFallbackActive(true);
        };
        recognition.start();
      } else {
        setVoiceFallbackActive(true);
      }
    } catch {
      setVoiceFallbackActive(true);
    }

    // High fidelity prototype simulation fallback
    setTimeout(() => {
      setUserSaidText("My phone gets warm after playing for an hour.");
      setVoiceFallbackActive(true);
    }, 1800);
  };

  const handleStopRecord = () => {
    setIsRecording(false);
    startAiAnalysis(userSaidText || "My phone gets warm after playing for an hour.");
  };

  const startAiAnalysis = (text: string) => {
    const raw = (text || userSaidText || "My phone gets warm after playing for an hour.").trim();
    setUserSaidText(raw);
    setIsAnalyzing(true);
    setAnalysisStep(1);

    const lower = raw.toLowerCase();
    if (lower.includes('warm') || lower.includes('heat') || lower.includes('hour') || lower.includes('bgmi') || lower.includes('play') || lower.includes('game') || lower.includes('thermal')) {
      setStructuredData({
        category: 'Gaming & Thermals',
        experience: 'Thermal increase',
        quest: 'Gaming',
        context: 'Long gaming session',
        device: selectedDevice.name,
        trigger: 'Sustained performance',
        recentUpdate: 'OriginOS 6',
        confidence: 0.98,
        relatedCount: 486,
        aiInsight: 'This experience appears primarily during sustained high-performance gaming sessions.',
        similarContext: 'Long gaming sessions, High performance, Warm environment'
      });
    } else if (lower.includes('smooth') || lower.includes('multitask') || lower.includes('app') || lower.includes('work')) {
      setStructuredData({
        category: 'UI & Multitasking',
        experience: 'Smoothness enhancement',
        quest: 'Working',
        context: 'Rapid app switching with atomic cards',
        device: selectedDevice.name,
        trigger: 'Dynamic RAM allocation',
        recentUpdate: 'OriginOS 6.0 Stable',
        confidence: 0.96,
        relatedCount: 3410,
        aiInsight: 'High customer satisfaction clustered around 16GB LPDDR5X memory scheduling and fluid gesture physics.',
        similarContext: 'Continuous multitasking • Atomic Windows'
      });
    } else if (lower.includes('camera') || lower.includes('photo') || lower.includes('portrait') || lower.includes('lens')) {
      setStructuredData({
        category: 'Camera & Imaging',
        experience: 'Edge segmentation artifact',
        quest: 'Creating',
        context: 'Low-light indoor portrait with glasses',
        device: selectedDevice.name,
        trigger: 'Neural depth map segmentation on thin frames',
        recentUpdate: 'OriginOS 6',
        confidence: 0.94,
        relatedCount: 142,
        aiInsight: 'Clustered around fine wireframe boundaries under high-contrast indoor sodium lighting.',
        similarContext: 'Low light • metallic spectacle frames'
      });
    } else {
      setStructuredData({
        category: 'Gaming & Thermals',
        experience: 'Thermal increase',
        quest: 'Gaming',
        context: 'Long gaming session',
        device: selectedDevice.name,
        trigger: 'Sustained performance',
        recentUpdate: 'OriginOS 6',
        confidence: 0.98,
        relatedCount: 486,
        aiInsight: 'This experience appears primarily during sustained high-performance gaming sessions.',
        similarContext: 'Long gaming sessions, High performance, Warm environment'
      });
    }

    setTimeout(() => setAnalysisStep(2), 500);
    setTimeout(() => setAnalysisStep(3), 1000);
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasAnalyzed(true);
    }, 1500);
  };

  const handleSelectSample = (sample: typeof samplePrompts[0]) => {
    setUserSaidText(sample.text);
    setStructuredData({
      ...sample.structured,
      device: selectedDevice.name
    });
    startAiAnalysis(sample.text);
  };

  const handleShareSubmit = () => {
    submitFeedback(
      userSaidText || "My phone gets warm after playing for an hour.",
      inputMode,
      structuredData,
      isEditingStructured
    );
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setHasAnalyzed(false);
    setIsAnalyzing(false);
    setUserSaidText('');
    setRecordingSeconds(0);
    setIsEditingStructured(false);
    setVoiceFallbackActive(false);
  };

  return (
    <div className="desktop-screen-page voice-page animate-fade-scale">
      {/* Header */}
      <div className="desktop-page-header">
        <div className="header-badge font-tech">
          <Sparkles size={13} />
          <span>NATURAL EXPERIENCE CAPTURE</span>
        </div>
        <h1 className="text-page-title">TELL iQOO</h1>
        <p className="text-body header-subtitle">"Don't fill forms. Just tell us what happened."</p>
      </div>

      {!isSubmitted ? (
        <div className="tell-iqoo-content-grid">
          {/* LEFT COLUMN: Input Methods & Mic Stage */}
          <div className="voice-input-column">
            {/* Input Method Switcher */}
            <div className="input-method-tabs">
              <button 
                className={`method-tab ${inputMode === 'voice' ? 'is-active' : ''}`}
                onClick={() => setInputMode('voice')}
              >
                <Mic size={16} />
                <span className="font-tech">🎙 SPEAK</span>
              </button>

              <button 
                className={`method-tab ${inputMode === 'type' ? 'is-active' : ''}`}
                onClick={() => {
                  setInputMode('type');
                  if (!userSaidText) {
                    setUserSaidText("My phone gets warm after playing for about an hour.");
                  }
                }}
              >
                <FileText size={16} />
                <span className="font-tech">⌨ TYPE</span>
              </button>

              <button 
                className={`method-tab ${inputMode === 'show' ? 'is-active' : ''}`}
                onClick={() => {
                  setInputMode('show');
                  if (!userSaidText) {
                    setUserSaidText("Attached Screenshot: Thermal HUD reaching 39°C during 120 FPS tournament play.");
                  }
                }}
              >
                <ImageIcon size={16} />
                <span className="font-tech">📷 SHOW</span>
              </button>
            </div>

            {/* Voice Recording / Input Surface */}
            <div className="feature-primary voice-hero-panel">
              {inputMode === 'voice' ? (
                isRecording ? (
                  <div className="mic-active-stage">
                    <div className="voice-waveform-canvas">
                      {[18, 36, 64, 88, 52, 70, 95, 60, 44, 80, 56, 32, 20].map((h, i) => (
                        <div 
                          key={i} 
                          className="wave-bar" 
                          style={{ height: `${Math.floor(h * (0.6 + Math.random() * 0.7))}px` }}
                        />
                      ))}
                    </div>

                    <span className="recording-time-display font-tech">
                      00:{recordingSeconds < 10 ? `0${recordingSeconds}` : recordingSeconds}
                    </span>

                    <button 
                      className="large-voice-btn recording-active"
                      onClick={handleStopRecord}
                      aria-label="Stop recording"
                    >
                      <Square size={28} className="stop-square-icon" />
                    </button>

                    <span className="recording-status-caption font-tech">RECORDING LIVE AUDIO • TAP TO STOP & ANALYZE</span>
                  </div>
                ) : (
                  <div className="mic-idle-stage">
                    <div className="mic-halo-glow" />
                    <button 
                      className="large-voice-btn"
                      onClick={handleStartRecord}
                      aria-label="Tap to speak"
                    >
                      <Mic size={44} className="mic-center-icon" />
                    </button>

                    <span className="mic-main-label font-tech">TAP TO SPEAK</span>
                    <span className="voice-sim-badge font-tech">🎙 VOICE SIMULATION READY • TAP TO SPEAK OR TYPE</span>
                    <p className="mic-subtext">
                      Speak naturally about what happened. Describe any lag, battery draw, thermal change, or feature idea.
                    </p>
                  </div>
                )
              ) : inputMode === 'type' ? (
                <div className="type-input-stage">
                  <span className="stage-heading font-tech">TYPE YOUR EXPERIENCE NATURALLY</span>
                  <textarea 
                    className="type-input-textarea"
                    placeholder="Example: My phone gets warm after playing for an hour..."
                    value={userSaidText}
                    onChange={(e) => setUserSaidText(e.target.value)}
                    rows={4}
                  />
                  <button 
                    className="clean-primary-btn analyze-btn"
                    onClick={() => startAiAnalysis(userSaidText)}
                    disabled={!userSaidText.trim()}
                  >
                    <Sparkles size={16} />
                    <span>Analyze Experience</span>
                  </button>
                </div>
              ) : (
                <div className="show-input-stage">
                  <span className="stage-heading font-tech">ATTACH SCREENSHOT OR LOG</span>
                  <div 
                    className="upload-dropzone"
                    onClick={() => startAiAnalysis(userSaidText || "Attached Screenshot: Thermal HUD reaching 39°C during 120 FPS play.")}
                  >
                    <ImageIcon size={32} className="dropzone-icon" />
                    <span className="dropzone-title">Click to attach screenshot or telemetry snapshot</span>
                    <span className="dropzone-sub">AI will parse visual artifacts and extract hardware context</span>
                  </div>
                </div>
              )}

              {/* Sample Voice Prompts for instant testing */}
              <div className="sample-prompts-bar">
                <span className="samples-label font-tech">TRY SAMPLE SCENARIOS:</span>
                <div className="samples-chips-list">
                  {samplePrompts.map(sample => (
                    <button
                      key={sample.label}
                      className="sample-prompt-chip"
                      onClick={() => handleSelectSample(sample)}
                    >
                      <span className="chip-lbl font-tech">{sample.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: AI Analysis & Experience Understood */}
          <div className="voice-analysis-column">
            {isAnalyzing ? (
              /* Phase 17: Polished AI Analyzing State */
              <div className="feature-secondary ai-analyzing-card animate-slide-up">
                <div className="analyzing-spinner-wrap">
                  <div className="ai-core-pulse-ring" />
                  <Sparkles size={28} className="ai-core-sparkle" />
                </div>

                <div className="analyzing-text-block">
                  <span className="analyzing-pill font-tech">AI REASONING IN PROGRESS</span>
                  <h3 className="analyzing-heading">Understanding your experience...</h3>
                  <p className="analyzing-sub">Extracting hardware state, quest context, and querying Quester clusters...</p>
                </div>

                <div className="analyzing-steps-track">
                  <div className={`analysis-substep ${analysisStep >= 1 ? 'is-complete' : ''}`}>
                    <CheckCircle2 size={15} />
                    <span>1. Speech transcription & timestamp correlation</span>
                  </div>
                  <div className={`analysis-substep ${analysisStep >= 2 ? 'is-complete' : ''}`}>
                    <CheckCircle2 size={15} />
                    <span>2. Subsystem classification (Thermals & Sustained Performance)</span>
                  </div>
                  <div className={`analysis-substep ${analysisStep >= 3 ? 'is-complete' : ''}`}>
                    <CheckCircle2 size={15} />
                    <span>3. Clustering with 486 related Quester signals</span>
                  </div>
                </div>
              </div>
            ) : hasAnalyzed ? (
              /* Phase 7: Experience Understood Card */
              <div className="feature-secondary ai-analysis-card animate-slide-up">
                {/* Header */}
                <div className="analysis-header">
                  <div className="ai-synthesis-tag font-tech">
                    <Sparkles size={14} />
                    <span>EXPERIENCE UNDERSTOOD</span>
                  </div>
                  <span className="confidence-pill font-tech">
                    {(structuredData.confidence * 100).toFixed(0)}% CONFIDENCE
                  </span>
                </div>

                {/* Raw Input Transcription */}
                <div className="raw-input-quote-box">
                  <span className="quote-label font-tech">USER SAID:</span>
                  <p className="quote-text">"{userSaidText}"</p>
                </div>

                {/* Structured Signal Rows (Editable) */}
                <div className="structured-schema-container">
                  <div className="schema-header">
                    <span className="schema-title font-tech">STRUCTURED EXPERIENCE SCHEMA</span>
                    <button 
                      className="edit-signal-btn"
                      onClick={() => setIsEditingStructured(!isEditingStructured)}
                    >
                      {isEditingStructured ? (
                        <>
                          <Check size={14} />
                          <span className="font-tech">DONE EDITING</span>
                        </>
                      ) : (
                        <>
                          <Edit3 size={14} />
                          <span className="font-tech">EDIT FIELDS</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="schema-table">
                    <div className="schema-row">
                      <span className="schema-key font-tech">DEVICE</span>
                      <span className="schema-val font-tech">{structuredData.device}</span>
                    </div>

                    <div className="schema-row">
                      <span className="schema-key font-tech">QUEST</span>
                      {isEditingStructured ? (
                        <input 
                          type="text" 
                          className="schema-input font-tech"
                          value={structuredData.quest}
                          onChange={e => setStructuredData({ ...structuredData, quest: e.target.value })}
                        />
                      ) : (
                        <span className="schema-val font-tech val-highlight">{structuredData.quest}</span>
                      )}
                    </div>

                    <div className="schema-row">
                      <span className="schema-key font-tech">CONTEXT</span>
                      {isEditingStructured ? (
                        <input 
                          type="text" 
                          className="schema-input"
                          value={structuredData.context}
                          onChange={e => setStructuredData({ ...structuredData, context: e.target.value })}
                        />
                      ) : (
                        <span className="schema-val">{structuredData.context}</span>
                      )}
                    </div>

                    <div className="schema-row">
                      <span className="schema-key font-tech">EXPERIENCE</span>
                      {isEditingStructured ? (
                        <input 
                          type="text" 
                          className="schema-input"
                          value={structuredData.experience}
                          onChange={e => setStructuredData({ ...structuredData, experience: e.target.value })}
                        />
                      ) : (
                        <span className="schema-val">{structuredData.experience}</span>
                      )}
                    </div>

                    <div className="schema-row">
                      <span className="schema-key font-tech">TRIGGER</span>
                      {isEditingStructured ? (
                        <input 
                          type="text" 
                          className="schema-input"
                          value={structuredData.trigger}
                          onChange={e => setStructuredData({ ...structuredData, trigger: e.target.value })}
                        />
                      ) : (
                        <span className="schema-val">{structuredData.trigger}</span>
                      )}
                    </div>

                    <div className="schema-row">
                      <span className="schema-key font-tech">RECENT UPDATE</span>
                      <span className="schema-val">{structuredData.recentUpdate}</span>
                    </div>
                  </div>
                </div>

                {/* Similar Experiences Block (Phase 7) */}
                <div className="similar-experiences-block">
                  <div className="similar-top-row">
                    <div className="similar-count-badge font-tech">
                      <Users size={15} />
                      <span>{structuredData.relatedCount} QUESTERS</span>
                    </div>
                    <span className="similar-title font-tech">SIMILAR EXPERIENCES IDENTIFIED</span>
                  </div>
                  <p className="similar-common-context">
                    <strong>Common context:</strong> {structuredData.similarContext}
                  </p>
                </div>

                {/* AI Insight (Phase 7) */}
                <div className="ai-insight-box">
                  <div className="ai-insight-top">
                    <Sparkles size={14} className="ai-sparkle-gold" />
                    <span className="font-tech">AI INSIGHT</span>
                  </div>
                  <p className="ai-insight-text">"{structuredData.aiInsight}"</p>
                </div>

                {/* Meaningful Actions (Phase 7 & 16) */}
                <div className="tell-iqoo-actions-row">
                  <button 
                    className="clean-primary-btn"
                    onClick={() => openSmartWithActivity('gaming')}
                    title="Switch to Gaming Quest with power bypass active"
                  >
                    <Zap size={16} />
                    <span>Optimize My Setup</span>
                  </button>

                  <button 
                    className="clean-secondary-btn"
                    onClick={() => setCurrentTab('community')}
                  >
                    <Users size={16} />
                    <span>View Similar Experiences</span>
                  </button>

                  <button 
                    className="clean-secondary-btn share-btn-highlight"
                    onClick={handleShareSubmit}
                  >
                    <Send size={16} />
                    <span>Share Experience</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="ai-waiting-placeholder glass-card">
                <Sparkles size={32} className="waiting-icon" />
                <h3 className="waiting-title">AI Experience Classifier Ready</h3>
                <p className="waiting-desc">
                  Speak, type or upload an image on the left. The AI extracts hardware context, identifies related Quester patterns, and recommends instant optimizations.
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Confirmation State */
        <div className="feature-primary submission-success-card animate-slide-up">
          <div className="success-icon-wrap">
            <CheckCircle2 size={48} className="success-icon" />
          </div>

          <span className="success-tag font-tech">EXPERIENCE SHARED WITH iQOO R&D</span>
          <h2 className="success-heading">Signal Connected to Product Intelligence</h2>
          <p className="success-body">
            Your experience has been synthesized into the <strong>{structuredData.category}</strong> cluster alongside {structuredData.relatedCount} Questers and queued for firmware evaluation in <strong>iQOO Pulse</strong>.
          </p>

          <div className="success-actions-row">
            <button 
              className="clean-primary-btn"
              onClick={() => setCurrentTab('community')}
            >
              <span>View in Quester Voice</span>
              <ArrowRight size={16} />
            </button>

            <button 
              className="clean-secondary-btn"
              onClick={handleReset}
            >
              <RotateCcw size={16} />
              <span>Share Another Experience</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
