import styled from 'styled-components';

export const StyledAboutContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  .about-container {
    display: flex;

    .intro {
      width: 60%;
      .intro-container {
        width: 80%;
        padding: 2.5rem 0;
        padding-top: 2rem;
        margin: auto;
        .split {
          margin-left: 5rem;
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
      .skills-container {
        width: 200px;
        height: 200px;
        perspective: 1000px;
        margin: 100px auto 0;

        .cube {
          transform-style: preserve-3d;
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: spin 9s infinite linear;

          .face {
            display: flex;
            position: absolute;
            width: 100%;
            height: 100%;
            box-sizing: content-box;
            border-width: 1px;
            border-style: solid;
            border-image: linear-gradient(
              to right bottom,
              ${({ theme }) => theme.palette.highlight[2]},
              ${({ theme }) => theme.palette.highlight[3]}
            );
            border-image-slice: 1;
            background-color: ${({ theme }) => theme.palette.black[4]};
            opacity: 0.9;

            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }

          .top {
            display: flex;
            transform: rotateX(90deg) translateZ(100px);
          }

          .bottom {
            display: flex;
            transform: rotateX(-90deg) translateZ(100px);
          }

          .right {
            display: flex;
            transform: rotateY(90deg) translateZ(100px);
          }

          .left {
            display: flex;
            transform: rotateY(-90deg) translateZ(100px);
          }

          .front {
            display: flex;
            transform: rotateX(0deg) translateZ(100px);
          }

          .back {
            display: flex;
            transform: rotateX(-180deg) translateZ(100px);
          }
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
