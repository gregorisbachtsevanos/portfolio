type Project = {
  title: string;
  // content: string;
  link: string;
  images: string[];
};

export type UsersInfo = {
  firstName: string;
  lastName: string;
  occupation: string;
  image?: string;
  contact: {
    type: Map;
    of: String;
  };
  about: { info: String };
  // projects?: Project[];
};

export type EmailProps = {
  from: string;
  subject: string;
  html: string;
  replyTo: string;
  html: string;
};
