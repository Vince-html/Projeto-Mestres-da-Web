import { Reducer } from 'redux';
import { HqsState, HqsTypes } from './types';

const INITIAL_STATE: HqsState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<HqsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HqsTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case HqsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case HqsTypes.LOAD_ERROR:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
