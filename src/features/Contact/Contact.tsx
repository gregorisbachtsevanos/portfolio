import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { Text } from '@/app/theme';
import { ContactForm } from '@/components/ContactForm';
import { sidebar } from '@/components/Sidebar/constants';
import SvgIcon from '@/components/SvgIcon/SvgIcon';
import { tabletView } from '@/constants/data';
import { routes } from '@/constants/routes';
import useSmoothScroll from '@/hooks/useSmoothScroll';
import useWindowSize from '@/hooks/useWindowSize';
import { selectUserInfo } from '@/store/state/userInfoSlice';

import { Social } from './components/Social';
import { StyledContactContainer } from './contact.styled';

const Contact = () => {
  const { width } = useWindowSize();
  const user: any = useSelector(selectUserInfo);
  const handleScroll = useSmoothScroll();

  return (
    <StyledContactContainer id={routes.CONTACT}>
      <div className="contact-container">
        <div className="stay_in_touch-container">
          <div className="intro-container">
            <Text>{user.contact.intro}</Text>
          </div>
          {width > tabletView && (
            <div className="social-container">
              <Social github={user.contact.github} linkedin={user.contact.linkedin} />
            </div>
          )}
        </div>
        <div className="contact-form-container">
          <ContactForm />
        </div>
      </div>
      <div className="arrow-container">
        <Link href={`#${sidebar[0].target}`} className="icon" onClick={handleScroll}>
          <div className="main">
            <SvgIcon type="up" />
          </div>
          <div className="second">
            <SvgIcon type="up" />
          </div>
        </Link>
      </div>
    </StyledContactContainer>
  );
};

export default Contact;
