import { createStore, applyMiddleware, Store } from 'redux';
import rootReducer from './catalago/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { CharactersState } from './catalago/characters/types';
import rootSaga from './catalago/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface ApplicationState {
  characters: CharactersState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);
export default store;
