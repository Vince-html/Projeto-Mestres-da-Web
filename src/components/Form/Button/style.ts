import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    width: 38rem;
    height: 7rem;
    border-radius: 5rem;
    margin-top: 1.8rem;
    background-color: ${theme.colors.secondaryColor};
    border: none;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
    font-family: ${({ theme }) => theme.font.types.AxiFormaMedium};
  `}
`;
