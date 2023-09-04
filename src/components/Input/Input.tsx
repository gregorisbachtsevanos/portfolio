import React, { InputHTMLAttributes } from 'react';
import { StyledInputContainer } from './Input.styled';
import { Caption } from '@/app/theme';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  label: string | Boolean;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ type, name, label, error, ...rest }) => {
  return (
    <StyledInputContainer>
      <div className="field-container">
        <input type={type} name={name} autoComplete="off" {...rest} />
        <label htmlFor={name} className="label-container">
          <span className="content-container">{label as String}</span>
        </label>
      </div>
      {error && <Caption className="error">{error}</Caption>}
    </StyledInputContainer>
  );
};
