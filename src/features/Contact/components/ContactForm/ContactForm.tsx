import React, { useRef } from 'react';

// import { CONTACT } from "src/app/data/contact-data";
// import { EmailService } from "src/services/emailApi";
// import { Input } from "src/components/Input/";
// import { Button } from "src/components/Button/";
import send from 'src/assets/images/icons/send.png';
import { Input } from '@/components/Input';
import { useForm, Controller } from 'react-hook-form';
import { contact } from '../../constants';
import { StyledContactFormContainer } from './ContactForm.styled';

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
    // resolver: yupResolver(validationSchema),
  });

  const handleSubmitForm = () => {};

  return (
    <StyledContactFormContainer onSubmit={handleSubmit((data) => console.log(data))}>
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
            required
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
            required
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
            required
          />
        )}
      />

      <button>send</button>
      {/* <Button role="contact" value={send} /> */}
    </StyledContactFormContainer>
  );
};
