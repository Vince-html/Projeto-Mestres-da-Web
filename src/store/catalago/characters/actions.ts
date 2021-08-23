import { action } from 'typesafe-actions';
import { CharactersTypes, Characters } from './types';

export const loadRequest = () => action(CharactersTypes.LOAD_REQUEST);

export const loadSuccess = (data: Characters[]) =>
  action(CharactersTypes.LOAD_SUCCESS, { data });

export const loadError = () => action(CharactersTypes.LOAD_ERROR);
