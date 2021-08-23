import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    width: 38rem;
    height: 7rem;
    padding: 2rem;
    border-radius: 5rem;
    margin-top: 1.8rem;
    display: flex;
    justify-content: center;

    border: none;
    @media ${theme.media.lteSmall} {
      width: 25rem;
      display: flex;
      justify-content: center;
    }
    &:focus,
    &:hover {
      outline: none;
      border: 1px solid;
      border-color: ${theme.colors.secondaryColor};
      background: white;
      box-shadow: 1 1 1 1px #ff2812;
    }

    ::placeholder {
      font-size: ${theme.font.sizes.large};
    }
  `}
`;
