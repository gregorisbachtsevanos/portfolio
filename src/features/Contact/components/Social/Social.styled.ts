import { styled } from 'styled-components';

export const StyledSocialContainer = styled.div`
  font-size: 3rem;
  display: flex;
  justify-content: center;
  gap: 10rem;

  svg {
    transition-property: none;
    padding: 0.25rem;
    border-style: none;
    border: 1px solid ${({ theme }) => theme.palette.highlight[2]};
    border-radius: 50px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.palette.highlight[1]} 0%,
      ${({ theme }) => theme.palette.highlight[2]} 100%
    );
  }
`;
