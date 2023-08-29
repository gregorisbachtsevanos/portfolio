import React, { FC } from 'react';
import Image from 'next/image';

import home from 'public/icons/home.png';
import info from 'public/icons/info.png';
import projects from 'public/icons/projects.png';
import mail from 'public/icons/mail.png';
import menu from 'public/icons/menu.png';
import close from 'public/icons/close.png';

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
    default:
      return;
  }
};

export default SvgIcon;
