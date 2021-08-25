export enum CharactersTypes {
  LOAD_REQUEST = '@characters/LOAD_REQUEST',
  LOAD_SUCCESS = '@characters/LOAD_SUCCESS',
  LOAD_ERROR = '@characters/LOAD_ERROR',
  GET_CHARACTER = '@characters/GET_CHARACTER',
}

export interface image {
  path: string;
}

export interface Characters {
  id: number;
  name: string;
  thumbnail: image;
  description: string;
}

export interface CharactersState {
  readonly data: Characters[];
  readonly loading: boolean;
  readonly error: boolean;
}
