import React from 'react';
import Scroll from 'react-scroll';

import { logoUrl, sidebar } from './constants';
import { StyledSidebarContainer } from './Sidebar.styled';
import { Title } from '@/app/theme';
import Image from 'next/image';
import Link from 'next/link';
import useSmoothScroll from '@/hooks/useSmoothScroll';
const SmoothLink = Scroll.Link;

export const Sidebar = () => {
  const handleScroll = useSmoothScroll();

  return (
    <StyledSidebarContainer>
      <div className="items">
        {sidebar.map((item) => (
          <Title className="link" key={item.name}>
            <Link href={`#${item.target}`} onClick={handleScroll}>
              {item.name}
            </Link>
          </Title>
        ))}
      </div>
    </StyledSidebarContainer>
  );
};
