import styled, { css, keyframes } from 'styled-components';

const intro = keyframes`
0% {background-position: left; }
100% {background-position: center; }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    width: 100vw;

    background-size: 200% 200%;
    background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 57%,
      rgba(0, 0, 0, 0) 100%
    );
    animation: ${intro} 2s ease forwards;

    @media ${theme.media.lteLarge} {
      background-image: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 48%,
        rgba(0, 0, 0, 0) 100%
      );
    }

    @media ${theme.media.lteMedium} {
      background-image: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 40%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    @media ${theme.media.lteSmall} {
      background-image: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 40%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  `}
`;

export const Image = styled.img`
  height: 100%;
  filter: brightness(110%);
  top: 0;
  right: -12rem;
  position: absolute;
  z-index: -10;
`;
