import { ApplicationState } from '../..';

const CharResult = (state: ApplicationState) => ({
  characters: state.characters.data,
});

export default CharResult;
