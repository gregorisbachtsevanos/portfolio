type Project = {
  id: string;
  title: string;
  content: string;
  link: string;
  image: string[];
};

export type UsersInfo = {
  firstname: string;
  lastname: string;
  occupation: string;
  image: string;
  contact_intro: string;
  about_intro: string;
  projects: Project[];
};

export type EmailProps = {
  from: string;
  subject: string;
  html: string;
  replyTo: string;
  html: string;
};
