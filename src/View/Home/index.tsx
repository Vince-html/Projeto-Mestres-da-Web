import Background from '../../components/Background';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Section from '../../components/Section';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { load } from '../../store/catalago/characters/saga';
// import characters from '../../store/catalago/characters';
import * as CharactersActions from '../../store/catalago/characters/actions';
import CharResult from '../../store/catalago/characters/selectors';
// import { Characters } from '../../store/catalago/characters/types';

// interface OwnProps {
//   characters: Characters[];
// { characters }: OwnProps
// }
// type character = {};

function Home() {
  const characters = useSelector(CharResult);

  return (
    <Background>
      <Header />
      <Section>
        {characters.characters.map((character) => {
          return <Card key={character.id} {...character} />;
        })}

        {/* <Card /> */}
      </Section>
    </Background>
  );
}
// const mapStateToProps = (state: ApplicationState) => ({
//   characters: state.characters.data,
// });

// const mapDispatchToProps = (dispatch: Dispatch) =>
//   bindActionCreators(CharactersActions, dispatch);

export default Home;
