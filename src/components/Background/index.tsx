import * as S from './style';
import Fundo from '../../assets/img/fundo.png';

type BackProps = {
  children?: React.ReactNode;
};

function Background({ children }: BackProps) {
  return (
    <S.Container>
      <S.Image src={Fundo} alt="" />
      {children}
    </S.Container>
  );
}

export default Background;
