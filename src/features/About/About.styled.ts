import styled from 'styled-components';

export const StyledAboutContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  .about-container {
    display: flex;

    .intro {
      width: 60%;
      margin-left: 5%;
      .intro-container {
        width: 80%;
        padding: 2.5rem 0;
        padding-top: 2rem;
        margin: auto;
        span {
          line-height: 2.5rem;
          background: -webkit-linear-gradient(
            ${({ theme }) => theme.palette.highlight[2]},
            ${({ theme }) => theme.palette.highlight[3]}
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          white-space: normal; /* Keeps the content on a single line */
          letter-spacing: 0.15em; /* Adjust as needed */
          // animation:
          // typing 3.5s steps(40, end),
          // blink-caret .75s step-end infinite;
        }
      }
    }

    .skills {
      width: 40%;
      margin-top: -5rem;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.tablet}) {
    .about-container {
      height: 90vh;
      flex-direction: column;
      /* justify-content: space-around; */
      /* margin-top:-20vh; */
      gap: 70px;
      .intro {
        width: 100%;
        .intro-container {
          span {
            line-height: 1.5rem;
            font-size: 13px;
          }
        }
      }
      .skills {
        width: 100%;
        .skills-container {
          transform: scale(0.9);
        }
      }
    }
  }

  @keyframes spin {
    from {
      transform: rotateX(0deg) rotateY(0deg);
    }

    to {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
  }
`;
