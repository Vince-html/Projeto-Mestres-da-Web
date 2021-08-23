import styled, { css, keyframes } from 'styled-components';

const intro = keyframes`
0% {top: 45%;left: 45%;}
50% {top: 45%;left: 12%;}
100%{top: 15%; left: 12%;}
`;

const introText = keyframes`
0% {top: 45%;left: 45%;}
50% {top: 45%;left: 13%;}
100%{top: 15%; left: 13%;}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryColor};
    width: 24rem;
    top: 45%;
    left: 45%;
    height: 9.4rem;
    position: absolute;
    animation: ${intro} 1.5s forwards;
    animation-delay: 0.5s;
  `}
`;
export const Logo = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.secondary};
    position: absolute;
    font-size: 10rem;
    top: 45%;
    left: 46%;

    animation: ${introText} 1.5s ease-in-out forwards;
    animation-delay: 0.7s;
  `}
`;
