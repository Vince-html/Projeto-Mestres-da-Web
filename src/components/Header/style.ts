import styled, { css } from 'styled-components';
import { Logo as Logo } from './../Logo/style';

export const Header = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  filter: drop-shadow(0px 0px 5px #ff0000);
`;

export const Container = styled.nav`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin: 0;
    gap: 8rem;
  `}
`;

export const Logo2 = styled(Logo)`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryColor};
    color: ${theme.colors.white};
    padding: 0.5rem;
    position: inherit;
    font-size: ${theme.font.sizes.xxlarge};
    margin: 0;

    > p {
      margin: 0;
    }
  `}
`;
