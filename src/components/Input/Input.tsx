import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  label?: string;
}

export const Input: React.FC<InputProps> = ({ type, name, label, ...rest }) => {
  return (
    <div className="custom_input-container">
      <input type={type} name={name} autoComplete="off" {...rest} />
      {label && (
        <label htmlFor={name} className="label-container">
          <span className="content-container">{label}</span>
        </label>
      )}
    </div>
  );
};
