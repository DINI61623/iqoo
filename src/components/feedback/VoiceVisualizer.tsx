import React, { useState, useEffect } from 'react';
import { Mic, Square, Sparkles } from 'lucide-react';
import './VoiceVisualizer.css';

interface VoiceVisualizerProps {
  isRecording: boolean;
  onStartRecord: () => void;
  onStopRecord: () => void;
  audioDuration: number;
}

export const VoiceVisualizer: React.FC<VoiceVisualizerProps> = ({
  isRecording,
  onStartRecord,
  onStopRecord,
  audioDuration
}) => {
  const [waveHeights, setWaveHeights] = useState<number[]>([
    8, 14, 22, 34, 18, 28, 42, 30, 16, 24, 38, 20, 12, 8
  ]);

  // Dynamic waveform fluctuations during active recording
  useEffect(() => {
    if (!isRecording) return;
    const interval = setInterval(() => {
      setWaveHeights(
        Array.from({ length: 18 }, () => Math.floor(Math.random() * 38) + 6)
      );
    }, 120);
    return () => clearInterval(interval);
  }, [isRecording]);

  const formatSeconds = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const remaining = sec % 60;
    return `${mins}:${remaining < 10 ? '0' : ''}${remaining}`;
  };

  return (
    <div className={`voice-visualizer-container ${isRecording ? 'recording-active' : ''}`}>
      <div className="waveform-box">
        {isRecording ? (
          <div className="live-waveform-bars">
            {waveHeights.map((h, idx) => (
              <div
                key={idx}
                className="wave-bar"
                style={{
                  height: `${h}px`,
                  transition: 'height 0.12s ease'
                }}
              />
            ))}
          </div>
        ) : (
          <div className="waveform-idle-prompt">
            <Sparkles size={16} className="sparkle-hint" />
            <span>Tap the microphone to speak your experience</span>
          </div>
        )}
      </div>

      <div className="record-controls-row">
        <span className="record-timer font-tech">
          {isRecording ? (
            <>
              <span className="live-rec-dot" />
              {formatSeconds(audioDuration)}
            </>
          ) : (
            audioDuration > 0 ? `${formatSeconds(audioDuration)} recorded` : '00:00'
          )}
        </span>

        <button
          type="button"
          className={`big-mic-trigger ${isRecording ? 'is-recording-btn' : ''}`}
          onClick={isRecording ? onStopRecord : onStartRecord}
        >
          {isRecording ? (
            <Square size={22} className="stop-icon" />
          ) : (
            <Mic size={28} className="mic-icon" />
          )}
          {isRecording && <span className="mic-ripple-ring" />}
        </button>

        <span className="record-status-tag font-tech">
          {isRecording ? 'AI LISTENING' : 'TELL iQOO'}
        </span>
      </div>
    </div>
  );
};
