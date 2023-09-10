const config = {
  environment: process.env.NEXT_PUBLIC_ENV,
  dataAPI: process.env.NEXT_PUBLIC_DATA_API,
  contactAPI: process.env.NEXT_PUBLIC_CONTACT_API,
  nodemailerPassword: process.env.NEXT_PUBLIC_NODEMAILER_PASSWORD,
  nodemailerEmail: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
  mongoDB: process.env.NEXT_PUBLIC_MONGODB,
  auth: {
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
  },
};

export default config;
