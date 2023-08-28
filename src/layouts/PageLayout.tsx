import useWindowSize from '@/hooks/useWindowSize';
import React, { FC, useMemo, ReactNode } from 'react';
import { styled } from 'styled-components';

interface PageLayoutProps {
  children: ReactNode;
  noOverflow?: boolean;
}

const StyledPageContainer = styled.div`
  &.mobileView {
    width: 100vw;
    height: 100vh;
  }
  &.noOverflow {
    overflow: hidden;
  }
`;

const PageLayout: FC<PageLayoutProps> = ({ noOverflow, children }) => {
  const windowSize = useWindowSize();
  console.log(windowSize.width);
  const style = useMemo(
    () => [windowSize.width < 500 && 'noOverflow'].filter(Boolean).join(' '),
    [windowSize.width]
  );

  return <StyledPageContainer className={style}>{children}</StyledPageContainer>;
};

export default PageLayout;
