import { Reducer } from 'redux';
import { CharactersState, CharactersTypes } from './types';

const INITIAL_STATE: CharactersState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<CharactersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CharactersTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case CharactersTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case CharactersTypes.GET_CHARACTER:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case CharactersTypes.LOAD_ERROR:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
