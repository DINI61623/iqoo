import React from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  variant?: 'glass' | 'solid' | 'interactive' | 'monster' | 'gradient-border';
  className?: string;
  onClick?: () => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'glass',
  className = '',
  onClick,
  header,
  footer
}) => {
  return (
    <div 
      className={`iqoo-card iqoo-card-${variant} ${onClick ? 'iqoo-card-clickable' : ''} ${className}`}
      onClick={onClick}
    >
      {header && <div className="iqoo-card-header">{header}</div>}
      <div className="iqoo-card-content">{children}</div>
      {footer && <div className="iqoo-card-footer">{footer}</div>}
    </div>
  );
};
