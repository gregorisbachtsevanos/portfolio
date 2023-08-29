import { styled } from 'styled-components';

export const StyledContactFormContainer = styled.form`
  position: relative;
  width: 100%;
  gap: 5px;
  display: flex;
  flex-direction: column;

  button:hover {
    transform: rotate(360deg);
    transition: 1s;
  }
`;
