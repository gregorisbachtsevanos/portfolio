import styled from 'styled-components';

export const StyledProjectsContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  .container {
    .projects {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 80%;
      margin: auto;
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.tablet}) {
    .project-container {
      width: 100%;
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.mobileL}) {
    position: absolute;
    top: calc(100vh - 80%);
    width: 100%;
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
