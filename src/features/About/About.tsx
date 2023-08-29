import React from 'react';

import { routes } from '@/constants/routes';
import { about } from './constants';
import { StyledAboutContainer } from './About.styled';
import Image from 'next/image';
import { Text } from '@/app/theme';
import { Cube } from '@/components/Cube';

const About = () => {
  return (
    <StyledAboutContainer id={routes.ABOUT}>
      <div className="about-container">
        <div className="intro">
          <div className="intro-container">
            <Text>{about.INTRODUCTION}</Text>
          </div>
        </div>
        <div className="skills">
          <Cube />
        </div>
      </div>
    </StyledAboutContainer>
  );
};

export default About;
