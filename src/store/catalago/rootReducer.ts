import { combineReducers } from 'redux';
import characters from './characters';
import films from './films';
import hqs from './hqs';

export default combineReducers({
  characters,
  films,
  hqs,
});
