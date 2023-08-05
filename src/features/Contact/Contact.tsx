import React from 'react';

import { ContactForm } from './components/ContactForm';
import { Intro } from './components/Intro';
import { Social } from './components/Social';

import { routes } from '@/constants/routes';
import { contact } from './constants';
import { StyledContactContainer } from './contact.styled';

const Contact = () => {
  return (
    <StyledContactContainer id={routes.CONTACT}>
      <div className="contact-container">
        <div className={`text-container`}>
          <div className="intro-container">
            <p>{contact.INTRODUCTION}</p>
          </div>
        </div>
        <div className="contact-form-container">
          <ContactForm />
          <div className="social-container">{/* <Social /> */}</div>
        </div>
      </div>
    </StyledContactContainer>
  );
};

export default Contact;
