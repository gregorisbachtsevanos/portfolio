import styled from 'styled-components';

export const StyledProjectsContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  .container {
    height: 100%;
    margin: auto;
    width: 80%;
    display: flex;
    align-items: center;

    .projects {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 80%;
      margin: auto;
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.desktop4k}) {
    .container {
      transform: scale(1.1);
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.desktopL}) {
    .container {
      transform: scale(1.1);
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.desktopM}) {
    .container {
      transform: scale(0.9);
      .projects {
        width: 100%;
      }
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.desktopS}) {
    .container {
      transform: scale(1);
    }
  }

  @media only screen and (max-width: 1145px) {
    .container {
      width: 100%;
      transform: scale(0.8);
      .projects {
        width: 100%;
      }
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.laptop}) {
    .project-container {
      transform: scale(1);
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.tablet}) {
    .project-container {
      width: 100%;
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.mobileL}) {
    position: absolute;
    height: unset;
    width: 100%;
    bottom: 10px;
    .container {
      width: 100%;
      .projects {
        width: unset;
        flex-direction: row;
        flex-wrap: unset;
        justify-content: flex-start;
        overflow-x: scroll;
        overflow-y: hidden;

        &::-webkit-scrollbar {
          width: 0px;
          height: 0px;
        }
      }
    }
  }
`;
