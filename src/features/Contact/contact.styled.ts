import { styled } from 'styled-components';

export const StyledContactContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  .contact-container {
    display: flex;

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
