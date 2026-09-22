import React from 'react';
import { Home, Cpu, Mic, Users, User } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NavigationTab } from '../../types';
import './BottomNav.css';

export const BottomNav: React.FC = () => {
  const { currentTab, setCurrentTab } = useApp();

  const tabs: { id: NavigationTab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home size={20} strokeWidth={2.2} /> },
    { id: 'smart', label: 'Smart', icon: <Cpu size={20} strokeWidth={2.2} /> },
    { id: 'voice', label: 'Voice', icon: <Mic size={20} strokeWidth={2.2} /> },
    { id: 'community', label: 'Community', icon: <Users size={20} strokeWidth={2.2} /> },
    { id: 'profile', label: 'Profile', icon: <User size={20} strokeWidth={2.2} /> },
  ];

  return (
    <nav className="fixed-bottom-nav">
      <div className="nav-items-grid">
        {tabs.map(tab => {
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              className={`bottom-nav-item ${isActive ? 'is-active' : ''}`}
              onClick={() => setCurrentTab(tab.id)}
              aria-label={tab.label}
            >
              <div className="nav-icon-container">
                {tab.icon}
                {isActive && <span className="nav-active-dot" />}
              </div>
              <span className="nav-label-text">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
