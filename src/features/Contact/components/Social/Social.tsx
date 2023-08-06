import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import React, { useMemo } from 'react';
import { StyledSocialContainer } from './Social.styled';
import { contact } from '../../constants';

export const Social = () => {
  return (
    <StyledSocialContainer>
      <a href={contact.linkedin} target="_blank" rel="noreferrer">
        <AiFillLinkedin style={{ color: '#1c1c1c' }} />
      </a>
      <a href={contact.github} target="_blank" rel="noreferrer">
        <AiFillGithub style={{ color: '#1c1c1c' }} />
      </a>
    </StyledSocialContainer>
  );
};
