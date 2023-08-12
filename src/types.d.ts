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
  name: string;
  email: string;
  content: string;
};
