import styled from 'styled-components';

export const StyledHomeContainer = styled.div`
  height: 100vh;

  .home-container {
    position: relative;
    overflow: hidden;
    .image-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;

      > div {
        position: unset !important;
      }

      img {
        object-fit: contain;
        position: relative !important;
        height: unset !important;
        display: block;
        max-width: 100%;
        display: block;
        /* -webkit-mask-image: -webkit-gradient(
          linear,
          left top,
          left bottom,
          from(rgba(0, 0, 0, 1)),
          to(rgba(0, 0, 0, 0))
        );
        mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)); */
        -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
      }

      .image-reflection {
        position: relative !important;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100% !important;
        width: 100% !important;
        object-fit: cover !important;
        aspect-ratio: 3.5/3;
        transform: scaleY(-1);
        opacity: 0.2;
        -webkit-mask-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.5) 50%,
          rgba(0, 0, 0, 1) 100%
        );
        mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
      }
    }

    .text-container {
      text-align: center;
      padding: 2.5rem;
      font-weight: 500;
      z-index: 20;
      transform: translateY(-150%);
      color: ${({ theme }) => theme.palette.highlight[2]};
      display: flex;
      flex-direction: column;
      align-items: center;
      /* justify-content: center; */

      .animate-text {
        line-height: 2rem;
        display: flex;
      }
      .animate-title span,
      .animate-text span {
        position: relative;
        display: inline-block;
        transition: 0s;
        padding: 0.5rem 0;
      }
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.desktop4k}) {
    .home-container {
      .image-container {
        transform: scale(0.9);
      }
      .text-container {
        h1 {
          margin-top: -20rem;
          transform: scale(1.5);
        }
      }
    }
  }
  @media only screen and (${({ theme }) => theme.sizes.desktopL}) {
    .home-container {
      .image-container {
        transform: scale(0.9);
      }
      .text-container {
        h1 {
          margin-top: 0rem;
          transform: scale(1.5);
        }
      }
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.desktopM}) {
    .home-container {
      .image-container {
        height: 100vh;
        transform: scale(1.1);
      }
      .text-container {
        h1 {
          margin-top: 0rem;
          transform: scale(1);
        }
      }
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.desktopS}) {
    .home-container {
      .image-container {
        margin-top: 0rem;
        height: 100vh;
        transform: scale(1.05);
      }
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.laptop}) {
    .home-container {
      .image-container {
        height: 90vh;
        transform: scale(1.1);
      }
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.tablet}) {
    .home-container,
    .image-container {
      height: 85vh;
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.mobileL}) {
    .home-container {
      margin-top: -10px;
      .image-container {
        margin-top: 10%;
        height: 90vh;

        img {
          height: 100% !important;
          width: 100% !important;
          object-fit: cover !important;
          /* aspect-ratio: 3.5/3; */
        }
      }
      .text-container {
        transform: translateY(-250%);
        h1 {
          font-size: 28px;
        }
        h2 {
          font-size: 20px;
        }
      }
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.mobileM}) {
    .home-container {
      .image-container {
        margin-top: 15%;
        transform: scale(1);
      }
      .text-container {
        transform: translateY(-200%);
        h1 {
          font-size: 28px;
        }
        h2 {
          font-size: 20px;
        }
      }
    }
  }
  @media only screen and (${({ theme }) => theme.sizes.mobileS}) {
    .home-container {
      .image-container {
        width: 100%;
        margin-top: 15%;
      }
    }
  }
`;
