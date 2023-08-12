import { styled } from 'styled-components';

export const StyledProjectContainer = styled.div`
  width: 330px;
  height: 280px;
  margin: 1rem;
  transform: translateX(5%);

  img {
    border-radius: 8px;
    object-fit: cover;
    position: relative !important;
  }

  .more-info {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.palette.highlight[2]};
    transform: translate(15%, -200%);
    row-gap: 8px;
    h1 {
    }

    a {
    }
  }
`;
