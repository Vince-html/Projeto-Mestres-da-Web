import styled, { css, keyframes } from 'styled-components';

const intro = keyframes`
from{ opacity: 0 }
to{transform: translateY(0%)}

`;

export const Form = styled.form`
  ${({ theme }) => css`
    width: 40rem;
    animation: ${intro} 0.8s ease-in-out both;
    animation-delay: 2s;

    > h2 {
      color: ${theme.colors.secondaryColor};
      font-family: ${theme.font.types.AxiFormaBold};
      font-size: ${theme.font.sizes.xlarge};

      margin-bottom: 0;
      padding: 0.5rem;
    }
    > p {
      color: ${theme.colors.mediumGray};
      margin-bottom: 0;
      padding: 0.5rem;
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

export const FooterForm = styled.div`
  ${({ theme }) => css`
    > p {
      color: ${theme.colors.mediumGray};
      margin-bottom: 0;
      padding: 0.5rem;
      font-size: ${theme.font.sizes.medium};
      text-align: center;
      margin-top: 1.5rem;
      > a {
        text-decoration: none;
        color: ${theme.colors.secondaryColor};

        &:hover {
          color: ${theme.colors.white};
        }
      }
    }
  `}
`;

export const MidSection = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;

    div {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      > input[type='checkbox'] {
        width: 1.5rem;
        height: 1.5rem;
        padding: 0;
        border-radius: 5rem;
        margin: 0;
        border: none;
        display: flex;
      }
    }

    > a,
    label {
      color: ${theme.colors.mediumGray};
      font-size: ${theme.font.sizes.medium};
      padding: 1rem;
    }

    > a {
      text-decoration: none;

      &:hover {
        color: ${theme.colors.white};
        &::after {
          content: '';
          display: block;
          background-color: ${theme.colors.secondaryColor};
          height: 0.2rem;
          width: 100%;
          border-radius: 0.2rem;
        }
      }
    }
  `}
`;
