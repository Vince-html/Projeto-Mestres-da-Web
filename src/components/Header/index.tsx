import * as S from './style';
import Menu from './Menu';

const Header = () => {
  return (
    <S.Header>
      <S.Logo2>
        <p>MARVEL</p>
      </S.Logo2>
      <S.Container>
        <Menu />
      </S.Container>
    </S.Header>
  );
};

export default Header;
