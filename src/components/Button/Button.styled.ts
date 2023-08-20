import { styled } from 'styled-components';

export const StyledButtonContainer = styled.div`
  width: 100%;
  margin: 1.8rem auto;
  transform-origin: center;

  button {
    margin: auto;
    width: 10%;
    line-height: 2rem;
    color: var(--sidebarColor);
    @include border(10px);
    @include flex();

    &.cancel-btn {
      width: 60px;
      color: var(--danger);
      border: 1px solid var(--danger);
    }

    &.submit-btn {
      width: 60px;
      background-color: var(--success);
    }
  }
`;
