import { RouterState } from 'connected-react-router';

export enum FilmsTypes {
  LOAD_REQUEST = '@films/LOAD_REQUEST',
  LOAD_SUCCESS = '@films/LOAD_SUCCESS',
  LOAD_ERROR = '@films/LOAD_ERROR',
}

export interface image {
  path: string;
}

export interface Films {
  id: number;
  name: string;
  thumbnail: image;
  description: string;
}

export interface FilmsState {
  readonly data: Films[];
  readonly loading: boolean;
  readonly error: boolean;
}

export interface RouteState {
  router: RouterState;
}
