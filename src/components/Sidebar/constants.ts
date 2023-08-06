import { routes } from '@/constants/routes';
import logo from '../../assets/GB-dark.svg';

export const sidebar = [
  { name: 'Home', target: routes.HOME },
  { name: 'Projects', target: routes.PROJECTS },
  { name: 'About', target: routes.ABOUT },
  { name: 'Contact', target: routes.CONTACT },
];

export const logoUrl = logo;
