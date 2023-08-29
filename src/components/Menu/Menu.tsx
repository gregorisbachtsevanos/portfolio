import React, { useCallback, useState } from 'react';
import { StyledMenuContainer } from './Menu.styled';
import Image from 'next/image';
import SvgIcon from '../SvgIcon/SvgIcon';
import { ContactForm } from '../ContactForm';

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = useCallback(() => {
    setShowMenu((prev: any) => !prev);
  }, []);
  return (
    <StyledMenuContainer>
      <div className="menu-icons" onClick={toggleMenu}>
        <SvgIcon type="menu" />
      </div>

      {showMenu && (
        <div className="items-container">
          <div className="close-icon" onClick={toggleMenu}>
            <SvgIcon type="close" />
          </div>
          <div className="items">
            <ContactForm />
          </div>
        </div>
      )}
    </StyledMenuContainer>
  );
};
