import React, { FC } from 'react';
import { GrProjects, GrStatusInfo, GrContact, GrHomeRounded } from 'react-icons/gr';

interface SvgIconProps {
  type: string;
}

const SvgIcon: FC<SvgIconProps> = ({ type }) => {
  console.log(type);
  // TODO: in some icons the color can not change, find the right icons
  const style = { color: 'red', fontSize: '1.5em' };
  switch (type) {
    case 'Home':
      return <GrHomeRounded style={style} />;
    case 'Projects':
      return <GrProjects style={style} />;
    case 'About':
      return <GrStatusInfo />;
    case 'Contact':
      return <GrContact />;

    default:
      return;
  }
};

export default SvgIcon;
