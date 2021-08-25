import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { CharactersState } from './catalago/characters/types';
import rootSaga from './catalago/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { FilmsState } from './catalago/films/types';
import rootReducer from './catalago/rootReducer';
import { HqsState } from './catalago/hqs/types';

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log(err);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

export interface ApplicationState {
  characters: CharactersState;
  films: FilmsState;
  hqs: HqsState;
}
const sagaMiddleware = createSagaMiddleware();
// const middleware = [sagaMiddleware, routerMiddleware(history)];

const store: Store<ApplicationState> = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
// export default function configureStore(preloadedState?) {
//   const store: Store<ApplicationState> = createStore(
//     createRootReducer(history),
//     preloadedState,
//     composeWithDevTools(
//       applyMiddleware(routerMiddleware(history), sagaMiddleware),
//     ),
//   );
//   return store;
// }
