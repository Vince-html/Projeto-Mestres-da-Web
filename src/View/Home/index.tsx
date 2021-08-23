import Background from '../../components/Background';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Section from '../../components/Section';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

interface OwnProps {
  characters: [];
}

function Home() {
  const result = useSelector((state: ApplicationState) => ({
    characters: state.characters.data,
  }));

  return (
    <Background>
      <Header />
      <Section>
        <Card />
        <Card />
        <Card />
      </Section>
    </Background>
  );
}

export default Home;
