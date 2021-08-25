import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    border-radius: 3rem;
    max-width: 30rem;
    max-height: 45rem;
    width: 100%;
    height: 100%;
    position: relative;
    @media ${theme.media.lteMedium} {
      margin-top: 2rem;
    }
  `}
`;

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;

export const Card = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    min-height: 10rem;
    border-radius: 3rem;
    padding: 2rem;
    background-color: #ff0000;
    background: linear-gradient(
      180deg,
      rgba(255, 0, 0, 1) 40%,
      rgba(255, 58, 58, 0.3029586834733894) 100%
    );
    color: ${theme.colors.white};
    text-align: center;
    bottom: 0;

    > h3,
    a {
      font-size: ${theme.font.sizes.large};
    }
    > h3 {
      font-family: ${theme.font.types.AxiFormaBold};
    }

    > a {
      margin-top: 2rem;
      font-family: ${theme.font.types.AxiFormaThin};
      text-decoration: none;
    }
    > p {
      font-size: ${theme.font.sizes.smedium};
      font-family: ${theme.font.types.AxiFormaThin};
      text-align: left;
      margin-bottom: 1rem;
    }
  `}
`;
