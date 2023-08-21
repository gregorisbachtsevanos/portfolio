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
        /* width: 70% !important; */
        position: relative !important;
        height: unset !important;
        display: block;
        max-width: 100%;
        display: block;
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

      .animate-text {
        line-height: 2rem;
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

  @media only screen and (${({ theme }) => theme.sizes.tablet}) {
    .home-container,
    .image-container {
      height: 85vh;
    }
  }

  @media only screen and (${({ theme }) => theme.sizes.mobileL}) {
    .home-container {
      margin-top: 5%;
      .image-container {
        height: 90vh;
        img {
          height: 100% !important;
          width: 100% !important;
          object-fit: cover !important;
          aspect-ratio: 3.5/3;
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
`;
