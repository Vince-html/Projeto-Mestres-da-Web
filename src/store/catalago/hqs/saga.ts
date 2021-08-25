import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import md5 from 'md5';

import { loadSuccess, loadError } from './actions';

const privateKey = 'd4880eda54e01e49ba65ab2b08fecc03fbdee270';
const publicKey = 'd0b7d9c179a4f1256f0777dbbe3dddbd';

const timeStamp = Date.now().toString();
const hash = createHash(timeStamp);

function createHash(timeStamp: string) {
  const toBeHashed = timeStamp + privateKey + publicKey;
  const hashedMessage = md5(toBeHashed);
  return hashedMessage;
}

export function* hqsLoad() {
  try {
    const response = yield call(
      api.get,
      `comics?&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&limit=3`,
    );

    yield put(loadSuccess(response.data.data.results));
  } catch (err) {
    yield put(loadError());
  }
}
