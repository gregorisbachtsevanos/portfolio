import React from 'react';

import { routes } from '@/constants/routes';
import { about } from './constants';
import { StyledAboutContainer } from './About.styled';
import Image from 'next/image';
import { Text } from '@/app/theme';

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
          <div className="skills-container">
            <div className="cube">
              <div className="face front">
                <Image src={'https://placehold.co/600x400'} alt="node" width={70} height={70} />
              </div>
              <div className="face back">
                <Image src={'https://placehold.co/600x400'} alt="tools" width={70} height={70} />
              </div>
              <div className="face right">
                <Image src={'https://placehold.co/600x400'} alt="js" width={70} height={70} />
              </div>
              <div className="face left">
                <Image
                  src={'https://placehold.co/600x400'}
                  alt="bootstrap"
                  width={70}
                  height={70}
                />
              </div>
              <div className="face top">
                <Image src={'https://placehold.co/600x400'} alt="css" width={70} height={70} />
              </div>
              <div className="face bottom">
                <Image
                  src={'https://placehold.co/600x400'}
                  alt="sareactss"
                  width={70}
                  height={70}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledAboutContainer>
  );
};

export default About;
