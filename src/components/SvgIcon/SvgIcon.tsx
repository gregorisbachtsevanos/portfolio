import React, { FC } from 'react';
import home from 'public/icons/home.png';
import info from 'public/icons/info.png';
import projects from 'public/icons/projects.png';
import mail from 'public/icons/mail.png';
import Image from 'next/image';

interface SvgIconProps {
  type: string;
}

const SvgIcon: FC<SvgIconProps> = ({ type }) => {
  console.log(type);
  // TODO: in some icons the color can not change, find the right icons
  switch (type) {
    case 'Home':
      return <Image src={home} alt="home" width={25} height={25} />;
    case 'Projects':
      return <Image src={projects} alt="home" width={25} height={25} />;
    case 'About':
      return <Image src={info} alt="home" width={25} height={25} />;
    case 'Contact':
      return <Image src={mail} alt="home" width={25} height={25} />;

    default:
      return;
  }
};

export default SvgIcon;
