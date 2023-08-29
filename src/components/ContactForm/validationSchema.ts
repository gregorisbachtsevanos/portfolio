import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup.string().required('*Please enter your name.'),
  email: yup
    .string()
    .email('*Please enter a valid email address')
    .required('*Please enter your email address'),
  content: yup.string().required('*Please enter your content'),
});
