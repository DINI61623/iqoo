import React from 'react';
import './Toggle.css';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  variant?: 'yellow' | 'monster' | 'cyan';
  size?: 'sm' | 'md';
}

export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  disabled = false,
  variant = 'yellow',
  size = 'md'
}) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      className={`iqoo-toggle iqoo-toggle-${variant} iqoo-toggle-${size} ${checked ? 'is-checked' : ''}`}
      onClick={() => !disabled && onChange(!checked)}
    >
      <span className="iqoo-toggle-thumb" />
    </button>
  );
};
