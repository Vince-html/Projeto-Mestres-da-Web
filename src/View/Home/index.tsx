import Background from '../../components/Background';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Section from '../../components/Section';
import { useSelector } from 'react-redux';

import CharResult from '../../store/catalago/characters/selectors';

function Home() {
  const characters = useSelector(CharResult);
  console.log(characters);
  return (
    <Background>
      <Header />
      <Section>
        {characters.characters.map((character) => {
          return <Card key={character.id} {...character} />;
        })}
      </Section>
    </Background>
  );
}

export default Home;
