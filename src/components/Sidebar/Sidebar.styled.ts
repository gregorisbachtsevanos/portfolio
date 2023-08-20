import styled from 'styled-components';

export const StyledSidebarContainer = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 50px;
  transition: 1s;
  height: 100%;
  z-index: 50;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.palette.black[4]} 0%,
    ${({ theme }) => theme.palette.black[3]} 100%
  );

  .items {
    position: fixed;
    left: 1%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4 {
      display: flex;
      padding: 0.25rem 0;
      margin: 1.25rem 0;
      border-style: none;
      border-radius: 50px;
      color: ${({ theme }) => theme.palette.black[2]};
      background: linear-gradient(
        90deg,
        ${({ theme }) => theme.palette.highlight[2]} 0%,
        ${({ theme }) => theme.palette.highlight[3]} 100%
      );

      a {
        padding: 0 0.75rem;
        margin: auto;
        cursor: pointer;
      }
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.tablet}) {
    bottom: 0;
    top: auto;
    width: 100%;
    height: 8%;

    .items {
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      height: 65px;
      width: 100%;
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.mobileL}) {
    display: none;
  }
`;
