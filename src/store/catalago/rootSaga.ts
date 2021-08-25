import { all, takeLatest } from 'redux-saga/effects';

import { CharactersTypes } from './characters/types';
import { load } from './characters/saga';
import { filmLoad } from './films/saga';
import { FilmsTypes } from './films/types';
import { HqsTypes } from './hqs/types';
import { hqsLoad } from './hqs/saga';

export default function* rootSaga() {
  return yield all([
    takeLatest(CharactersTypes.LOAD_REQUEST, load),
    takeLatest(FilmsTypes.LOAD_REQUEST, filmLoad),
    takeLatest(HqsTypes.LOAD_REQUEST, hqsLoad),
  ]);
}
