/* eslint-disable no-unsafe-finally */
import { useCallback, useEffect, useState } from 'react';
import md5 from 'md5';

import axios from 'axios';

const [data, setData] = useState(null);
const privateKey = 'd4880eda54e01e49ba65ab2b08fecc03fbdee270';
const publicKey = 'd0b7d9c179a4f1256f0777dbbe3dddbd';

const maxCharacters = 1500;

function createHash(timeStamp) {
  const toBeHashed = timeStamp + privateKey + publicKey;
  const hashedMessage = md5(toBeHashed);
  return hashedMessage;
}

function getCharacterList() {
  const timeStamp = Date.now().toString();
  const offset = Math.floor(Math.random() * maxCharacters + 1);
  const hash = createHash(timeStamp);
  const urlAPI =
    'http://gateway.marvel.com/v1/public/characters?limit=9&offset=' +
    offset +
    '&ts=' +
    timeStamp +
    '&apikey=' +
    publicKey +
    '&hash=' +
    hash;
  console.log(urlAPI);
}

const fetchData = axios.get(`urlAPI`);
