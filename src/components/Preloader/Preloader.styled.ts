import { styled } from 'styled-components';

export const StyledPreloaderContainer = styled.div`
  transition: 1s;
  position: absolute;
  z-index: 10000;
  background-color: ${({ theme }) => theme.palette.black[4]};
  &.precontainer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .wr-preloader {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .items {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        svg {
          .logo {
            fill: none;
            stroke: ${({ theme }) => theme.palette.highlight[2]};
            stroke-miterlimit: 10;
            stroke-width: 20px;
            stroke-dasharray: 9967.4140625;
            stroke-dashoffset: 9967.4140625;
            animation: line-animation 25s ease forwards 1s;
          }
        }

        .name {
          padding: 2rem;
          display: flex;
          text-align: center;
          font-weight: bold;
          letter-spacing: 0.9rem;
          color: ${({ theme }) => theme.palette.highlight[2]};

          span {
            font-size: 4vw;
            padding: 1rem;
            opacity: 0;
            display: inline-block;
            line-height: 0.5em;
          }
        }
      }
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.desktop4k}) {
    .wr-preloader {
      transform: scale(0.8);
    }
  }
  @media only screen and (${({ theme }) => theme.sizes.desktopL}) {
    .wr-preloader {
      transform: scale(0.7);
    }
  }

  @media only screen and (max-width: 600px) {
    .name {
      font-size: 0.8rem;
      letter-spacing: 0.5rem !important;
    }
  }

  @keyframes line-animation {
    to {
      stroke-dashoffset: 0;
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.mobileL}) {
    .name {
      flex-direction: column;
      letter-spacing: 0.5rem !important;
    }
  }
`;
