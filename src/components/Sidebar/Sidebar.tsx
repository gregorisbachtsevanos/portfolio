import React, { useMemo } from 'react';
import Scroll from 'react-scroll';

import { logoUrl, sidebar } from './constants';
import { StyledSidebarContainer } from './Sidebar.styled';
import { Title } from '@/app/theme';
import Image from 'next/image';
import Link from 'next/link';
import useSmoothScroll from '@/hooks/useSmoothScroll';
import SvgIcon from '../SvgIcon/SvgIcon';
import useWindowSize from '@/hooks/useWindowSize';
import { tabletView } from '@/constants/data';
const SmoothLink = Scroll.Link;

export const Sidebar = () => {
  const handleScroll = useSmoothScroll();
  const { width } = useWindowSize();
  const isTablet = useMemo(() => width <= tabletView, [width]);
  return (
    <StyledSidebarContainer>
      <div className="items">
        {sidebar.map((item) => (
          <Title className={`link ${isTablet && 'icons'}`} key={item.name}>
            <Link href={`#${item.target}`} onClick={handleScroll}>
              {!isTablet ? item.name : <SvgIcon type={item.name} />}
            </Link>
          </Title>
        ))}
      </div>
    </StyledSidebarContainer>
  );
};
