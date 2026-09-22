import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'yellow' | 'monster' | 'cyan' | 'secondary' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  glow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'yellow',
  size = 'md',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  glow = false,
  className = '',
  disabled,
  ...props
}) => {
  return (
    <button
      className={`iqoo-btn iqoo-btn-${variant} iqoo-btn-${size} ${fullWidth ? 'iqoo-btn-full' : ''} ${glow ? 'iqoo-btn-glow' : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="iqoo-btn-icon-left">{icon}</span>}
      <span className="iqoo-btn-text">{children}</span>
      {icon && iconPosition === 'right' && <span className="iqoo-btn-icon-right">{icon}</span>}
    </button>
  );
};
