import { styled } from 'styled-components';

export const StyledInputContainer = styled.div`
  width: 100%;
  margin: 0.5rem 0;

  .field-container {
    position: relative;
    overflow: hidden;

    input {
      width: 100%;
      height: 100%;
      border: none;
      padding-top: 20px;
      background-color: transparent;
      outline: none !important;
      color: ${({ theme }) => theme.palette.highlight[1]};

      &:focus {
        & + .label-container .content-container {
          transform: scale(2) translateX(25%);
          color: ${({ theme }) => theme.palette.highlight[2]};
          opacity: 0;
        }

        & + .label-container::after {
          transform: scale(1) translateX(0%);
        }
      }
    }

    .label-container {
      overflow: unset;

      position: absolute;
      bottom: 0;
      left: 0;
      color: ${({ theme }) => theme.palette.white};
      width: 100%;
      height: 100%;
      pointer-events: none;
      border-bottom: 1px solid ${({ theme }) => theme.palette.white};

      .content-container {
        position: absolute;
        bottom: 5px;
        left: 0;
        transition: all 1s ease;
      }

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -1px;
        height: 100%;
        width: 100%;
        border-bottom: 1px solid ${({ theme }) => theme.palette.highlight[2]};
        transform: translateX(-100%);
        transition: transform 1s ease;
      }
    }
  }

  .error {
    color: ${({ theme }) => theme.palette.error};
  }
`;
