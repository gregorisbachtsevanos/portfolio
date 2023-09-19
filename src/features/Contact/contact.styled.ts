import { styled } from 'styled-components';

export const StyledContactContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .contact-container {
    display: flex;
    width: 70%;
    margin: auto;
    .stay_in_touch-container {
      width: 40%;
      margin: auto;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .intro-container {
        margin-left: 10%;
        span {
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

      .social-container {
        transform: translateY(50px);
      }
    }

    .contact-form-container {
      width: 40%;
      margin: auto;
    }
  }

  .arrow-container {
    padding: 5%;
    opacity: 0.5;
    overflow: hidden;
    .icon {
      height: 75px;
      width: 75px;
      border: 1px solid ${({ theme }) => theme.palette.highlight[2]};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      display: flex;
      flex-direction: column;

      .main {
        transform: translateY(50%);
      }
      .second {
        opacity: 0;
        transform: translateY(150%);
      }

      &:hover {
        > .main {
          transform: translateY(-100%);
          opacity: 0;
          transition: 0.5s;
        }

        > .second {
          opacity: 1;
          transform: translateY(-50%);
          transition: 0.5s;
        }
      }
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.desktop4k}) {
    .contact-container {
      transform: scale(1.3);
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.desktopL}) {
    .contact-container {
      transform: scale(1.2);
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.desktopM}) {
    .contact-container {
      transform: scale(1);
      width: 90%;
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.desktopS}) {
    .contact-container {
      transform: scale(1);
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.laptop}) {
    .contact-container {
      transform: scale(1);
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.tablet}) {
    .contact-container {
      height: 90vh;
      flex-direction: column;
      .stay_in_touch-container {
        width: 90%;
        text-align: center;
        margin: 30px auto 0 auto;
        .intro-container {
          span {
            font-size: 14px;
          }
        }
      }
      .contact-form-container {
        width: 60%;
        form {
          div {
            div {
              label {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.mobileL}) {
    .contact-container {
      display: none;
    }
  }
`;
