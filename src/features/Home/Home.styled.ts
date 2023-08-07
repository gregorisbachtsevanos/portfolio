import styled from 'styled-components';

export const StyledHomeContainer = styled.div`
  height: 100%;
  .home-container {
    .image-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > div {
        position: unset !important;
      }

      img {
        object-fit: contain;
        width: 70% !important;
        position: relative !important;
        height: unset !important;
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
