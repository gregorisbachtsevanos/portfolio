import React, { useMemo, FC } from 'react';

import { StyledButtonContainer } from './Button.styled';

interface ButtonProps {
  role: string;
  value: string;
  type?: 'button' | 'submit' | 'reset';
  callback?: () => void;
  cancel?: string;
  submit?: string;
}

export const Button: FC<ButtonProps> = ({ role, value, type, callback, ...rest }) => {
  const action = useMemo(() => {
    switch (role) {
      case 'login':
        return <span>{value}</span>;
      case 'contact':
        return <img src={value} />;
      case 'text':
        return <span>{value}</span>;
      default:
        return <span>error</span>;
    }
  }, [role, value]);

  return (
    <StyledButtonContainer onClick={callback}>
      <button type={type ?? 'button'} {...rest}>
        {action}
      </button>
    </StyledButtonContainer>
  );
};
