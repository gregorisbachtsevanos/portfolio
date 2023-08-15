import useWindowSize from '@/hooks/useWindowSize';
import React, { FC, useMemo, ReactNode } from 'react';
import { styled } from 'styled-components';

interface PageLayoutProps {
  children: ReactNode;
  noScroll?: boolean;
}

const StyledPageContainer = styled.div``;

const PreloaderLayout: FC<PageLayoutProps> = ({ noScroll, children }) => {
  const windowSize = useWindowSize();

  const style = useMemo(() => [noScroll && 'no-scroll'].filter(Boolean).join(' '), [, noScroll]);

  return <StyledPageContainer className={style}>{children}</StyledPageContainer>;
};

export default PreloaderLayout;
