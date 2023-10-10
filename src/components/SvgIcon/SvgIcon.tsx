import React, { FC } from 'react';
import Image from 'next/image';
import close from 'public/icons/close.png';
import home from 'public/icons/home.png';
import info from 'public/icons/info.png';
import mail from 'public/icons/mail.png';
import menu from 'public/icons/menu.png';
import projects from 'public/icons/projects.png';
import up from 'public/icons/up.png';
interface SvgIconProps {
  type: string;
}

const SvgIcon: FC<SvgIconProps> = ({ type }) => {
  switch (type.toLowerCase()) {
    case 'home':
      return <Image src={home} alt="home" width={25} height={25} />;
    case 'projects':
      return <Image src={projects} alt="home" width={25} height={25} />;
    case 'about':
      return <Image src={info} alt="home" width={25} height={25} />;
    case 'contact':
      return <Image src={mail} alt="home" width={25} height={25} />;
    case 'menu':
      return <Image src={menu} alt="home" width={25} height={25} />;
    case 'close':
      return <Image src={close} alt="home" width={17} height={17} />;
    case 'up':
      return <Image src={up} alt="pu" width={35} height={40} />;
    default:
      return;
  }
};

export default SvgIcon;
