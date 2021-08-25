import Background from '../../components/Background';

import { SplashScreen } from '../../components/SplashScreen';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as CharactersActions from '../../store/catalago/characters/actions';
import * as FilmsActions from '../../store/catalago/films/actions';
import * as HqsActions from '../../store/catalago/hqs/actions';

function Intro() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CharactersActions.loadRequest());
    dispatch(FilmsActions.loadRequest());
    dispatch(HqsActions.loadRequest());
  }, [dispatch]);
  return (
    <Background>
      <SplashScreen />
    </Background>
  );
}

export default Intro;
