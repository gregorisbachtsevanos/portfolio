import { styled } from 'styled-components';

export const StyledMenuContainer = styled.nav`
  .menu-icons {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0 17px;
    background-color: transparent;
  }

  .items-container {
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.palette.black[4]};
    position: absolute;
    z-index: 99;

    .close-icon {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding: 0 17px;
    }
  }

  img {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
`;
