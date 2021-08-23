import * as S from './style';
import Form from '../Form';
import Background from '../Background';
import Logo from '../Logo';

export const SplashScreen = () => {
  return (
    <Background>
      <S.Container>
        <Form />
        <Logo />
      </S.Container>
    </Background>
  );
};
