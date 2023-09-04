import { styled } from 'styled-components';

export const StyledMenuContainer = styled.nav`
  .menu-icons {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0 17px;
    background-color: transparent;
    z-index: 999;
  }

  .items-container {
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.palette.black[4]};
    position: absolute;
    z-index: 99;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 1000;

    .close-icon {
      padding: 6px 17px;
    }

    .items {
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
    }

    .cube {
      width: 100%;
    }
  }

  img {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
`;
