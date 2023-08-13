import React, { useCallback, useRef } from 'react';

// import { CONTACT } from "src/app/data/contact-data";
// import { EmailService } from "src/services/emailApi";
// import { Input } from "src/components/Input/";
// import { Button } from "src/components/Button/";
import send from 'src/assets/images/icons/send.png';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '@/components/Input';
import { useForm, Controller } from 'react-hook-form';
import { contact } from '../../constants';
import { StyledContactFormContainer } from './ContactForm.styled';
import { validationSchema } from './validationSchema';
import { usePostEmailMutation } from '@/store/services/contactApi';

type FormValues = {
  name: string;
  email: string;
  content: string;
};

export const ContactForm = () => {
  const name = useRef();
  const email = useRef();
  const content = useRef();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      content: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });

  const handleSubmitForm = () => {};
  const [postEmail, { isSuccess }] = usePostEmailMutation();

  const handleEmail = useCallback(
    async (data: any) => {
      console.log(data);
      await postEmail({
        subject: data.name,
        html: data.content,
        email: data.email,
      });
    },
    [postEmail]
  );
  return (
    <StyledContactFormContainer onSubmit={handleSubmit(handleEmail)}>
      <Controller
        control={control}
        name="name"
        render={({ field: { value, onChange } }) => (
          <Input
            type="text"
            name="name"
            label={contact.NAME_LABEL}
            value={value}
            onChange={onChange}
            error={errors.name?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange } }) => (
          <Input
            type="email"
            name="email"
            label={contact.EMAIL_LABEL}
            value={value}
            onChange={onChange}
            error={errors.email?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="content"
        render={({ field: { value, onChange } }) => (
          <Input
            type="content"
            name="content"
            label={contact.TEXT_LABEL}
            value={value}
            onChange={onChange}
            error={errors.content?.message}
          />
        )}
      />

      <button>send</button>
      {/* <Button role="contact" value={send} /> */}
    </StyledContactFormContainer>
  );
};
