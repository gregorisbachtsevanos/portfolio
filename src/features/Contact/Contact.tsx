import React from 'react';

import { ContactForm } from './components/ContactForm';
import { Social } from './components/Social';

import { routes } from '@/constants/routes';
import { contact } from './constants';
import { StyledContactContainer } from './contact.styled';
import { Text } from '@/app/theme';
import useWindowSize from '@/hooks/useWindowSize';
import { tabletView } from '@/constants/data';

const Contact = () => {
  const { width } = useWindowSize();

  return (
    <StyledContactContainer id={routes.CONTACT}>
      <div className="contact-container">
        <div className="stay_in_touch-container">
          <div className="intro-container">
            <Text>{contact.INTRODUCTION}</Text>
          </div>
          {width > tabletView && (
            <div className="social-container">
              <Social />
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
