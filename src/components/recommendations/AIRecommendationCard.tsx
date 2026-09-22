import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Zap, Flame } from 'lucide-react';
import { Button } from '../common/Button';
import './AIRecommendationCard.css';

interface AIRecommendationCardProps {
  title: string;
  message: string;
  actionLabel: string;
  icon?: string;
  type?: string;
  onApply?: () => void;
}

export const AIRecommendationCard: React.FC<AIRecommendationCardProps> = ({
  title,
  message,
  actionLabel,
  type = 'performance',
  onApply
}) => {
  const [applied, setApplied] = useState(false);

  const handleAction = () => {
    setApplied(true);
    if (onApply) onApply();
    setTimeout(() => {
      setApplied(false);
    }, 4000);
  };

  const renderIcon = () => {
    switch (type) {
      case 'display':
        return <Sparkles size={16} className="rec-icon icon-blue" />;
      case 'battery':
        return <Zap size={16} className="rec-icon icon-yellow" />;
      case 'performance':
      default:
        return <Flame size={16} className="rec-icon icon-monster" />;
    }
  };

  return (
    <div className={`ai-recommendation-card glass-card rec-type-${type}`}>
      <div className="rec-card-header">
        <div className="rec-icon-box">
          {renderIcon()}
        </div>
        <div className="rec-title-group">
          <span className="rec-badge-tag font-tech">iQOO INTELLIGENCE PROACTIVE SUGGESTION</span>
          <h4 className="rec-title">{title}</h4>
        </div>
      </div>

      <p className="rec-message">{message}</p>

      <div className="rec-card-action">
        <Button
          variant={applied ? 'secondary' : (type === 'performance' ? 'yellow' : 'cyan')}
          size="sm"
          fullWidth
          disabled={applied}
          onClick={handleAction}
          icon={applied ? <CheckCircle2 size={14} /> : <ArrowRight size={14} />}
          iconPosition="right"
        >
          {applied ? 'Optimization Active' : actionLabel}
        </Button>
      </div>
    </div>
  );
};
