import styled from 'styled-components';

export const StyledProjectsContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  .project-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
  }

  @media only screen and (${({ theme }) => theme.sizes.tablet}) {
    .project-container {
      width: 100%;
    }
  }
`;
