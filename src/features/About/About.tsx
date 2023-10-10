import React from 'react';
import { useSelector } from 'react-redux';

import { Text } from '@/app/theme';
import { Cube } from '@/components/Cube';
import { routes } from '@/constants/routes';
import { selectUserInfo } from '@/store/state/userInfoSlice';

import { StyledAboutContainer } from './About.styled';

const About = () => {
  const user: any = useSelector(selectUserInfo);

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
