import React, { FC, ReactNode, useMemo } from 'react';
import { styled } from 'styled-components';

interface PreloaderLayoutProps {
  children: ReactNode;
  withAnimation?: boolean;
  noScroll?: boolean;
}

const StyledPreloaderContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.black[4]};

  &.renderOutPreloader {
    animation: test 2s ease forwards 0s;
  }

  &.no-scroll {
    overflow: hidden;
  }

  @keyframes test {
    from {
      top: 0;
    }
    to {
      top: -100vh;
    }
  }
`;

const PreloaderLayout: FC<PreloaderLayoutProps> = ({ withAnimation, noScroll, children }) => {
  const style = useMemo(
    () =>
      [withAnimation && 'preloader-container', noScroll && 'no-scroll'].filter(Boolean).join(' '),
    [withAnimation, noScroll]
  );

  return <StyledPreloaderContainer className={style}>{children}</StyledPreloaderContainer>;
};

export default PreloaderLayout;
