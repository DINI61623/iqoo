import React from 'react';
import { Zap, Flame, Cpu, Activity, Thermometer } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import './MonsterToggleCard.css';

export const MonsterToggleCard: React.FC = () => {
  const { selectedDevice, toggleMonsterMode } = useApp();
  const isMonster = selectedDevice.monsterModeActive;

  return (
    <div className={`monster-hud-card ${isMonster ? 'is-monster-active' : 'is-balance-mode'}`}>
      <div className="monster-hud-header">
        <div className="monster-badge-group">
          <div className="monster-icon-wrap">
            {isMonster ? <Flame size={20} className="flame-icon" /> : <Cpu size={20} />}
          </div>
          <div>
            <span className="monster-mode-label font-tech">PERFORMANCE GOVERNOR</span>
            <h3 className="monster-mode-status">
              {isMonster ? 'MONSTER TURBO ACTIVE' : 'BALANCE EFFICIENCY'}
            </h3>
          </div>
        </div>

        <button
          className={`monster-switch-trigger ${isMonster ? 'is-active' : ''}`}
          onClick={toggleMonsterMode}
          aria-label="Toggle Monster Mode"
        >
          <Zap size={16} className="switch-zap" />
          <span className="switch-text font-tech">{isMonster ? 'TURBO ON' : 'ACTIVATE'}</span>
        </button>
      </div>

      <div className="monster-metrics-grid">
        <div className="metric-cell">
          <span className="metric-label font-tech">CPU CLOCK</span>
          <span className={`metric-val ${isMonster ? 'val-red' : 'val-yellow'}`}>
            {isMonster ? '4.32 GHz' : '3.2 GHz'}
          </span>
        </div>
        <div className="metric-cell">
          <span className="metric-label font-tech">144Hz DISPLAY</span>
          <span className="metric-val val-blue">{selectedDevice.fpsCurrent} FPS</span>
        </div>
        <div className="metric-cell">
          <span className="metric-label font-tech">COPROCESSOR</span>
          <span className="metric-val val-dark">{selectedDevice.supercomputingChip.split(' ')[0]} Q3</span>
        </div>
        <div className="metric-cell">
          <span className="metric-label font-tech">CHAMBER TEMP</span>
          <span className={`metric-val ${selectedDevice.temperature > 37 ? 'val-orange' : 'val-green'}`}>
            {selectedDevice.temperature}°C
          </span>
        </div>
      </div>
    </div>
  );
};
