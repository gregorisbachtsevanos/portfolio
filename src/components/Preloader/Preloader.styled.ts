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
      display: grid;
      grid-template-columns: 1fr 1.5fr 1fr;
      grid-template-rows: 0.3fr 1fr;

      .items {
        grid-column: 2/3;
        grid-row: 2/3;

        svg {
          width: 100%;

          .cls-1 {
            fill: none;
            stroke: ${({ theme }) => theme.palette.highlight[2]};
            stroke-miterlimit: 10;
            stroke-width: 20px;
            stroke-dasharray: 9967.4140625;
            stroke-dashoffset: 9967.4140625;
            animation: line-animation 25s ease forwards 1s;
          }
        }

        .ml5 {
          width: 100%;
          padding: 2rem;
          display: flex;
          text-align: center;
          font-weight: bold;
          /* font-size: var(--secondHeaderSize); */
          letter-spacing: 0.9rem;
          color: ${({ theme }) => theme.palette.highlight[2]};

          .word {
            padding: 1rem;
            opacity: 0;
            display: inline-block;
            line-height: 0.5em;
          }
        }
      }
    }
  }

  @keyframes line-animation {
    to {
      stroke-dashoffset: 0;
    }
  }
`;
