import { ApplicationState } from '../..';

const FilmsResult = (state: ApplicationState) => ({
  films: state.films.data,
});

export default FilmsResult;
