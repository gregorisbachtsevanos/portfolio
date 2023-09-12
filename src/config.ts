export const config = {
  environment: process.env.NEXT_PUBLIC_ENV,
  dataAPI: process.env.NEXT_PUBLIC_DATA_API,
  contactAPI: process.env.NEXT_PUBLIC_CONTACT_API,
  mongoDB: process.env.NEXT_PUBLIC_MONGODB,
  nodemailer: {
    password: process.env.NEXT_PUBLIC_NODEMAILER_PASSWORD,
    email: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
  },
  auth: {
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
  },
  cors: {
    method: process.env.ALLOWED_METHODS,
    origin: process.env.ALLOWED_ORIGIN,
    allowedHeaders: process.env.ALLOWED_HEADERS,
    exposedHeaders: process.env.EXPOSED_HEADERS,
    maxAge: process.env.MAX_AGE,
    credentials: process.env.CREDENTIALS,
    domain: process.env.DOMAIN_URL,
  },
};
