import { styled } from 'styled-components';

export const StyledContactContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  .contact-container {
    display: flex;

    .text-container {
      width: 40%;
      margin: auto;

      .intro-container {
        p {
          margin-left: 5rem;
          line-height: 2.5rem;
          background: -webkit-linear-gradient(
            ${({ theme }) => theme.palette.highlight[3]},
            ${({ theme }) => theme.palette.highlight[2]}
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          white-space: normal; /* Keeps the content on a single line */
          letter-spacing: 0.15em; /* Adjust as needed */
        }
      }
    }

    .contact-form-container {
      width: 40%;
      margin: auto;
      /* @include flex(); */
      gap: 1rem;
    }
  }
`;
