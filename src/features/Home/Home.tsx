'use client';
import React, { useEffect } from 'react';
import { routes } from '@/constants/routes';
import { lettersAnimation } from '@/utils/lettersAnimation';
import { home } from './constants';
import Image from 'next/image';
import { StyledHomeContainer } from './Home.styled';
import { Title2Xl, TitleXl } from '@/app/theme';
import useWindowSize from '@/hooks/useWindowSize';
import { mobileView } from '@/constants/data';
import { Menu } from '@/components/Menu';

const Home = () => {
  const { width } = useWindowSize();

  useEffect(() => lettersAnimation(), []);
  // TODO: Blur the button of the image for small devices
  return (
    <StyledHomeContainer id={routes.HOME}>
      <div className="home-container">
        {width <= mobileView && <Menu />}
        <div className="image-container">
          <Image src={home.IMAGE} alt="profile image" fill />
          {width <= mobileView && (
            <div className="image-reflection">
              <Image src={home.IMAGE} alt="profile image reflection" fill />
            </div>
          )}
        </div>
        <div className="text-container">
          <Title2Xl className="animate-title">{home.NAME}</Title2Xl>
          <TitleXl className="animate-text">{home.OCCUPATION}</TitleXl>
        </div>
      </div>
    </StyledHomeContainer>
  );
};

export default Home;
