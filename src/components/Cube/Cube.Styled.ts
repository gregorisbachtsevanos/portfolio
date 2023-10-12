import { keyframes, styled } from 'styled-components';

const spin = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

export const StyledCubeContainer = styled.div`
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
    animation: ${spin} 9s infinite linear;

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

  @media only screen and (${({ theme }) => theme.sizes.mobileL}) {
    transform: scale(0.6);
  }
`;
