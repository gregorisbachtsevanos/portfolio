import React from 'react';

import { Social } from './components/Social';

import { routes } from '@/constants/routes';
import { contact } from './constants';
import { StyledContactContainer } from './contact.styled';
import { Text } from '@/app/theme';
import useWindowSize from '@/hooks/useWindowSize';
import { tabletView } from '@/constants/data';
import { ContactForm } from '@/components/ContactForm';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '@/store/state/userInfoSlice';

const Contact = () => {
  const { width } = useWindowSize();
  const { user }: any = useSelector(selectUserInfo);

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
    </StyledContactContainer>
  );
};

export default Contact;
