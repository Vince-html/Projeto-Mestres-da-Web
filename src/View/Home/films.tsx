import Background from '../../components/Background';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Section from '../../components/Section';
import { useSelector } from 'react-redux';
import FilmsResult from '../../store/catalago/films/selectors';

function Films() {
  const films = useSelector(FilmsResult);
  console.log(films);
  return (
    <Background>
      <Header />
      <Section>
        {films.films.map((character) => {
          return <Card key={character.id} {...character} />;
        })}
      </Section>
    </Background>
  );
}

export default Films;
