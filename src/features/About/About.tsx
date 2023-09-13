import React from 'react';

import { routes } from '@/constants/routes';
import { about } from './constants';
import { StyledAboutContainer } from './About.styled';
import Image from 'next/image';
import { Text } from '@/app/theme';
import { Cube } from '@/components/Cube';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '@/store/state/userInfoSlice';

const About = () => {
  const { user }: any = useSelector(selectUserInfo);

  return (
    <StyledAboutContainer id={routes.ABOUT}>
      <div className="about-container">
        <div className="intro">
          <div className="intro-container">
            <Text>{user.about.info}</Text>
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
