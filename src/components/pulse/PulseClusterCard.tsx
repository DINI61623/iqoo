import React from 'react';
import { AlertCircle, TrendingUp, TrendingDown, Minus, CheckCircle, Cpu, ArrowRight } from 'lucide-react';
import { PulseCluster } from '../../types';
import { Badge } from '../common/Badge';
import './Pulse.css';

interface PulseClusterCardProps {
  cluster: PulseCluster;
}

export const PulseClusterCard: React.FC<PulseClusterCardProps> = ({ cluster }) => {
  const getSeverityBadge = (sev: PulseCluster['severity']) => {
    switch (sev) {
      case 'Critical':
        return <Badge variant="monster" size="sm" pulse>CRITICAL ({cluster.reportCount} signals)</Badge>;
      case 'Moderate':
        return <Badge variant="yellow" size="sm">MODERATE ({cluster.reportCount} signals)</Badge>;
      case 'Low':
      default:
        return <Badge variant="subtle" size="sm">LOW ({cluster.reportCount} signals)</Badge>;
    }
  };

  const renderTrend = () => {
    if (cluster.trendingDirection === 'up') {
      return (
        <span className="cluster-trend trend-up font-tech">
          <TrendingUp size={12} /> +24% THIS WEEK
        </span>
      );
    }
    if (cluster.trendingDirection === 'down') {
      return (
        <span className="cluster-trend trend-down font-tech">
          <TrendingDown size={12} /> -15% DECAY
        </span>
      );
    }
    return (
      <span className="cluster-trend trend-steady font-tech">
        <Minus size={12} /> STEADY
      </span>
    );
  };

  return (
    <div className={`pulse-cluster-card glass-card severity-${cluster.severity.toLowerCase()}`}>
      <div className="cluster-header">
        <div className="cluster-top-left">
          <span className="cluster-category font-tech">{cluster.category}</span>
          {getSeverityBadge(cluster.severity)}
        </div>
        {renderTrend()}
      </div>

      <h4 className="cluster-title">{cluster.title}</h4>

      <div className="cluster-devices-row">
        <span className="devices-label font-tech">AFFECTED MODELS:</span>
        <span className="devices-names">{cluster.affectedDevices.join(', ')}</span>
      </div>

      <div className="cluster-analysis-box">
        <div className="analysis-row">
          <span className="analysis-label">AI Root Cause:</span>
          <span className="analysis-val">{cluster.aiRootCause}</span>
        </div>
        <div className="analysis-row action-row">
          <span className="analysis-label">Action Plan:</span>
          <span className="analysis-val action-text">{cluster.recommendedAction}</span>
        </div>
      </div>

      <div className="cluster-footer">
        <span className="cluster-status-pill font-tech">
          STATUS: {cluster.status}
        </span>
        <span className="cluster-detected-time font-tech">
          DETECTED: {cluster.firstDetected}
        </span>
      </div>
    </div>
  );
};
