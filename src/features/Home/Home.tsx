import React, { useEffect } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import { Title2Xl, TitleXl } from '@/app/theme';
import { selectUserInfo } from '@/store/state/userInfoSlice';
import { lettersAnimation } from '@/utils/lettersAnimation';

import useWindowSize from '@/hooks/useWindowSize';

import { home } from './constants';
import { mobileView } from '@/constants/data';
import { routes } from '@/constants/routes';

import { StyledHomeContainer } from './Home.styled';

const Home = () => {
  const { width } = useWindowSize();
  const user: any = useSelector(selectUserInfo);

  useEffect(() => lettersAnimation(), []);
  // TODO: Blur the button of the image for small devices
  return (
    <StyledHomeContainer id={routes.HOME}>
      <div className="home-container">
        <div className="image-container">
          <Image src={home.IMAGE} alt="profile image" fill />
          {width <= mobileView && (
            <div className="image-reflection">
              <Image src={home.IMAGE} alt="profile image reflection" fill priority />
            </div>
          )}
        </div>
        <div className="text-container">
          <Title2Xl className="animate-title">{`${user.firstName} ${user.lastName}`}</Title2Xl>
          <TitleXl className="animate-text">{user.occupation}</TitleXl>
        </div>
      </div>
    </StyledHomeContainer>
  );
};

export default Home;
