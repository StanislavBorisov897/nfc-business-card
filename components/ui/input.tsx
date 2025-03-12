import React, { ChangeEvent } from 'react';

interface InputProps {
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({ placeholder, name, value, onChange, type = "text", disabled = false }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="w-full p-2 border border-gray-300 rounded"
    />
  );
};