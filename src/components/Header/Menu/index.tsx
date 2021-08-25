import { Link } from 'react-router-dom';
import * as S from './style';

const Menu = () => {
  return (
    <S.Ul>
      <S.Li>
        <Link to="/home">Personagens</Link>
      </S.Li>
      <S.Li>
        <Link to="/films">Filmes</Link>
      </S.Li>
      <S.Li>
        <Link to="/hqs">HQs</Link>
      </S.Li>
      <S.Li>
        <a href="/">Sair</a>
      </S.Li>
    </S.Ul>
  );
};

export default Menu;
