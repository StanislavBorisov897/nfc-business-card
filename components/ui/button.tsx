import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, className, disabled = false }) => {
  return (
    <button onClick={onClick} className={`button ${className}`} disabled={disabled}>
      {children}
    </button>
  );
};