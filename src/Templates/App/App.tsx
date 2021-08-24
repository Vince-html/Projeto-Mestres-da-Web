import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Routes from '../../Routes';
import * as CharactersActions from '../../store/catalago/characters/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CharactersActions.loadRequest());
  }, [dispatch]);
  return <Routes />;
}

export default App;
