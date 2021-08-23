import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: 100rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 100vh;
    gap: 9rem;

    @media ${theme.media.lteMedium} {
      display: block;
      margin-top: 2rem;
    }
  `}
`;
