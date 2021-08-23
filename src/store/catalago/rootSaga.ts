import { all, takeLatest } from 'redux-saga/effects';

import { CharactersTypes } from './characters/types';
import { load } from './characters/saga';

export default function* rootSaga() {
  return yield all([takeLatest(CharactersTypes.LOAD_REQUEST, load)]);
}
