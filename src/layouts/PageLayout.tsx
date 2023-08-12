import React, { FC, ReactNode } from 'react';
import { styled } from 'styled-components';

interface PageLayoutProps {
  children: ReactNode;
  customClass?: string;
}

const StyledPageContainer = styled.div``;

const PreloaderLayout: FC<PageLayoutProps> = ({ customClass, children }) => {
  return (
    <StyledPageContainer className={`${customClass ? customClass : ''}`}>
      {children}
    </StyledPageContainer>
  );
};

export default PreloaderLayout;
