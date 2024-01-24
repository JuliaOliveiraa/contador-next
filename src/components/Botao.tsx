
import React from 'react';
import '../styles/page.css';  

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'increment' | 'decrement';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type }) => {
  const buttonClass = type ? `button ${type}` : 'button';

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;


