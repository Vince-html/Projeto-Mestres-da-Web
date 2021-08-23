import styled, { css } from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 9.5rem;
`;
export const Li = styled.li`
  ${({ theme }) => css`
    > a {
      font-family: ${theme.font.types.AxiFormaBold};
      font-size: ${theme.font.sizes.xlarge};
      color: ${theme.colors.mediumGray};
      text-decoration: none;

      &:hover {
        color: ${theme.colors.white};
      }
    }
    &:last-child a {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;
