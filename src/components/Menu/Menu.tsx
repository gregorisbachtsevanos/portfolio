import React from 'react';
import { StyledMenuContainer } from './Menu.styled';
import Image from 'next/image';
import SvgIcon from '../SvgIcon/SvgIcon';

export const Menu = () => {
  return (
    <StyledMenuContainer>
      <SvgIcon type="menu" />
    </StyledMenuContainer>
  );
};
