import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import md5 from 'md5';

import { loadSuccess, loadError } from './actions';

const privateKey = 'd4880eda54e01e49ba65ab2b08fecc03fbdee270';
const publicKey = 'd0b7d9c179a4f1256f0777dbbe3dddbd';

const maxCharacters = 1500;

function createHash(timeStamp) {
  const toBeHashed = timeStamp + privateKey + publicKey;
  const hashedMessage = md5(toBeHashed);
  return hashedMessage;
}

const timeStamp = Date.now().toString();
const offset = Math.floor(Math.random() * maxCharacters + 1);
const hash = createHash(timeStamp);

export function* load() {
  try {
    const response = yield call(
      api.get,
      `characters?&offset=${offset}&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`,
    );

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadError());
  }
}
