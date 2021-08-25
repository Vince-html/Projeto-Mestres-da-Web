import { ApplicationState } from '../..';

const HqsResult = (state: ApplicationState) => ({
  hqs: state.hqs.data,
});

export default HqsResult;
