import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { initialState } from './';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Debug actions', () => {
  it('should do something', () => {
    const store = mockStore({ debug: initialState });
  });
});
