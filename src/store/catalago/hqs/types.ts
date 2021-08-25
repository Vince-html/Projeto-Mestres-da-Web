import { RouterState } from 'connected-react-router';

export enum HqsTypes {
  LOAD_REQUEST = '@hqs/LOAD_REQUEST',
  LOAD_SUCCESS = '@hqs/LOAD_SUCCESS',
  LOAD_ERROR = '@hqs/LOAD_ERROR',
}

export interface image {
  path: string;
}

export interface Hqs {
  id: number;
  name: string;
  thumbnail: image;
  description: string;
}

export interface HqsState {
  readonly data: Hqs[];
  readonly loading: boolean;
  readonly error: boolean;
}

export interface RouteState {
  router: RouterState;
}
