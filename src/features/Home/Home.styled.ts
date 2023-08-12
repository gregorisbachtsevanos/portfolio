import styled from 'styled-components';

export const StyledHomeContainer = styled.div`
  height: 100%;

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
        width: 70% !important;
        position: relative !important;
        height: unset !important;
        display: block;
        max-width: 100%;
        display: block;
        max-width: 100%;
        height: auto;
      }

      .image-reflection {
        position: relative !important;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100% !important;
        width: 100% !important;
        transform: scaleY(-1);
        opacity: 0.2;
        -webkit-mask-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.1) 60%,
          rgba(0, 0, 0, 0.2) 70%,
          rgba(0, 0, 0, 0.3) 80%,
          rgba(0, 0, 0, 0.6) 90%,
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
`;
