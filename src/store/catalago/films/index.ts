import { Reducer } from 'redux';
import { FilmsState, FilmsTypes } from './types';

const INITIAL_STATE: FilmsState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<FilmsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FilmsTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case FilmsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case FilmsTypes.LOAD_ERROR:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
