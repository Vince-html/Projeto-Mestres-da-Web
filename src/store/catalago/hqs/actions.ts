import { action } from 'typesafe-actions';
import { HqsTypes, Hqs } from './types';

export const loadRequest = () => action(HqsTypes.LOAD_REQUEST);

export const loadSuccess = (data: Hqs[]) =>
  action(HqsTypes.LOAD_SUCCESS, { data });

export const loadError = () => action(HqsTypes.LOAD_ERROR);
