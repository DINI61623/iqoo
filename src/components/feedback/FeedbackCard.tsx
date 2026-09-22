import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { FeedbackItem } from '../../types';
import { Badge } from '../common/Badge';
import './FeedbackCard.css';

interface FeedbackCardProps {
  item: FeedbackItem;
}

export const FeedbackCard: React.FC<FeedbackCardProps> = ({ item }) => {
  const getStatusBadge = (status: FeedbackItem['status']) => {
    switch (status) {
      case 'under_review':
        return <Badge variant="subtle" size="sm">Under Review</Badge>;
      case 'ai_clustered':
        return <Badge variant="cyan" size="sm" pulse>AI Clustered</Badge>;
      case 'validated':
        return <Badge variant="yellow" size="sm">Validated by 300+ Questers</Badge>;
      case 'patch_in_testing':
        return <Badge variant="emerald" size="sm">Patch in OTA Beta</Badge>;
      case 'resolved':
        return <Badge variant="emerald" size="sm">Resolved</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="iqoo-feedback-card glass-card">
      <div className="fb-card-top">
        <div className="fb-meta-left">
          <Badge variant="yellow" size="sm">
            {item.category}
          </Badge>
          <span className="fb-time">{item.timestamp}</span>
        </div>
        {getStatusBadge(item.status)}
      </div>

      <h4 className="fb-title">{item.title}</h4>
      <p className="fb-raw-quote">"{item.rawText}"</p>

      {/* AI Structured Diagnostic Box */}
      <div className="ai-structured-box">
        <div className="ai-box-header">
          <Sparkles size={13} className="ai-sparkle-icon" />
          <span className="ai-header-title font-tech">AI TELEMETRY STRUCTURING</span>
          <span className="ai-confidence font-tech">
            {Math.round(item.aiExtractedInsights.confidenceScore * 100)}% CONFIDENCE
          </span>
        </div>

        <div className="ai-diagnostic-row">
          <span className="ai-diag-label">Subsystem:</span>
          <span className="ai-diag-value font-tech">{item.aiExtractedInsights.affectedSubsystem}</span>
        </div>

        <div className="ai-diagnostic-row">
          <span className="ai-diag-label">Hypothesis:</span>
          <span className="ai-diag-value">{item.aiExtractedInsights.rootCauseHypothesis}</span>
        </div>

        {item.aiExtractedInsights.recommendedAction && (
          <div className="ai-action-suggestion">
            <ArrowRight size={13} className="action-arrow" />
            <span>{item.aiExtractedInsights.recommendedAction}</span>
          </div>
        )}
      </div>

      {item.telemetrySnapshot && (
        <div className="fb-telemetry-strip">
          <span className="telemetry-item font-tech">
            Snapshot: {item.telemetrySnapshot.fps} FPS
          </span>
          <span className="telemetry-separator">•</span>
          <span className="telemetry-item font-tech">
            {item.telemetrySnapshot.temp}°C VC Temp
          </span>
          <span className="telemetry-separator">•</span>
          <span className="telemetry-item font-tech">
            {item.telemetrySnapshot.monsterMode ? 'Monster Active' : 'Balance'}
          </span>
        </div>
      )}
    </div>
  );
};
