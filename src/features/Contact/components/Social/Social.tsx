import React, { FC, useMemo } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { StyledSocialContainer } from './Social.styled';

interface SocialProps {
  github: string;
  linkedin: string;
}

export const Social: FC<SocialProps> = ({ github, linkedin }) => {
  return (
    <StyledSocialContainer>
      <a href={linkedin} target="_blank" rel="noreferrer">
        <AiFillLinkedin style={{ color: '#1c1c1c' }} />
      </a>
      <a href={github} target="_blank" rel="noreferrer">
        <AiFillGithub style={{ color: '#1c1c1c' }} />
      </a>
    </StyledSocialContainer>
  );
};
