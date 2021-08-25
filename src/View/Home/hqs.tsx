import Background from '../../components/Background';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Section from '../../components/Section';
import { useSelector } from 'react-redux';
import HqsResult from '../../store/catalago/hqs/selectors';

function Hqs() {
  const hqs = useSelector(HqsResult);
  console.log(hqs);
  return (
    <Background>
      <Header />
      <Section>
        {hqs.hqs.map((hq) => {
          return <Card key={hq.id} {...hq} />;
        })}
      </Section>
    </Background>
  );
}

export default Hqs;
