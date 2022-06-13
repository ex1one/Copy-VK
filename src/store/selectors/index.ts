import { RootState } from '../store';

const selectors = {
  auth: (state: RootState) => state.auth,
};

export default selectors;
