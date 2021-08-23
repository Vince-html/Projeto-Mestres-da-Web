import styled, { css } from 'styled-components';
import { Form as Form } from '../Form/style';

export const Container = styled.div`
  ${({ theme }) => css`
    ${Form} {
      top: 30%;
      left: 7%;
      position: absolute;
      /* @media ${theme.media.lteSmall} {
        width: 20rem;
      } */
    }
  `}
`;
