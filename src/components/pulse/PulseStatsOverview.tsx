import React from 'react';
import { Users, BarChart3, Clock, Sparkles } from 'lucide-react';
import { PULSE_METRICS } from '../../data/mockPulse';
import './Pulse.css';

export const PulseStatsOverview: React.FC = () => {
  return (
    <div className="pulse-overview-grid">
      <div className="pulse-kpi-card glass-card">
        <div className="kpi-icon-wrap icon-cyan">
          <Users size={16} />
        </div>
        <div className="kpi-info">
          <span className="kpi-label font-tech">AGGREGATED VOICE SIGNALS</span>
          <h3 className="kpi-val font-tech">{PULSE_METRICS.totalVoiceReports.toLocaleString()}</h3>
          <span className="kpi-sub font-tech">+842 added today</span>
        </div>
      </div>

      <div className="pulse-kpi-card glass-card">
        <div className="kpi-icon-wrap icon-yellow">
          <Sparkles size={16} />
        </div>
        <div className="kpi-info">
          <span className="kpi-label font-tech">AI ISSUE CLUSTERS</span>
          <h3 className="kpi-val font-tech">{PULSE_METRICS.aiClustersActive} ACTIVE</h3>
          <span className="kpi-sub font-tech">4 queued for OTA</span>
        </div>
      </div>

      <div className="pulse-kpi-card glass-card">
        <div className="kpi-icon-wrap icon-monster">
          <BarChart3 size={16} />
        </div>
        <div className="kpi-info">
          <span className="kpi-label font-tech">SENTIMENT INDEX</span>
          <h3 className="kpi-val font-tech">{PULSE_METRICS.averageSentimentIndex}/100</h3>
          <span className="kpi-sub font-tech">62% Positive • 14% Friction</span>
        </div>
      </div>

      <div className="pulse-kpi-card glass-card">
        <div className="kpi-icon-wrap icon-emerald">
          <Clock size={16} />
        </div>
        <div className="kpi-info">
          <span className="kpi-label font-tech">SIGNAL TO FIX VELOCITY</span>
          <h3 className="kpi-val font-tech">{PULSE_METRICS.signalToPatchTimeAvgDays} DAYS</h3>
          <span className="kpi-sub font-tech">Industry avg: 18 days</span>
        </div>
      </div>
    </div>
  );
};
