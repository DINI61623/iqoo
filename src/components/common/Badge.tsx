import React from 'react';
import './Badge.css';

interface BadgeProps {
  variant?: 'yellow' | 'monster' | 'cyan' | 'emerald' | 'subtle' | 'outline';
  size?: 'sm' | 'md';
  pulse?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'subtle',
  size = 'md',
  pulse = false,
  icon,
  children
}) => {
  return (
    <span className={`iqoo-badge iqoo-badge-${variant} iqoo-badge-${size}`}>
      {pulse && <span className="iqoo-badge-dot-pulse" />}
      {icon && <span className="iqoo-badge-icon">{icon}</span>}
      <span className="iqoo-badge-text">{children}</span>
    </span>
  );
};
