const config = {
  environment: process.env.NEXT_PUBLIC_CUSTOM_ENV,
  dataAPI: process.env.NEXT_PUBLIC_DATA_API,
  auth: {
    clientId: 'sharing.client',
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
  },
};

export default config;
