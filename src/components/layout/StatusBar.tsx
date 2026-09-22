import React, { useState, useEffect } from 'react';
import { Wifi, Battery, BatteryCharging, Zap } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import './StatusBar.css';

export const StatusBar: React.FC = () => {
  const { selectedDevice } = useApp();
  const [time, setTime] = useState('09:41');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="iqoo-status-bar">
      <div className="status-bar-left">
        <span className="status-time">{time}</span>
        {selectedDevice.monsterModeActive && (
          <span className="monster-pill-mini">
            <Zap size={10} className="monster-mini-icon" />
            <span>MONSTER</span>
          </span>
        )}
      </div>

      <div className="camera-cutout">
        <div className="lens-reflection" />
      </div>

      <div className="status-bar-right">
        <span className="network-5g">5G</span>
        <div className="signal-bars">
          <div className="bar bar-1 active" />
          <div className="bar bar-2 active" />
          <div className="bar bar-3 active" />
          <div className="bar bar-4 active" />
        </div>
        <Wifi size={13} className="wifi-icon" />
        <div className="battery-group">
          <span className="battery-percent">{selectedDevice.batteryLevel}%</span>
          {selectedDevice.isCharging ? (
            <BatteryCharging size={15} className="battery-icon charging" />
          ) : (
            <Battery size={15} className="battery-icon" />
          )}
        </div>
      </div>
    </div>
  );
};
