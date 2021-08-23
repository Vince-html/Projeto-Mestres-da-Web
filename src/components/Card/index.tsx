import * as S from './style';
import Fundo from '../../assets/img/fundo.png';

const Card = () => {
  return (
    <S.Container>
      <S.Card>
        <h3>Wanda</h3>
        <p>
          Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha
          Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão
          gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.
        </p>
        <a href="/">ver detalhes</a>
      </S.Card>
      <S.Image src={Fundo} />
    </S.Container>
  );
};

export default Card;
