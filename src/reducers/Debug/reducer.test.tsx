import reducer, { initialState } from './reducer';

describe('Debug reducer', () => {
  let state = reducer(undefined, {});

  beforeEach(() => {
    state = { ...initialState };
  });

  it('should return the initial state', () => {
    expect(initialState).toEqual(state);
  });

  it('should change into loading state', () => {
      state.isLoading = true;
      expect(reducer(undefined, { type: {upperCase (snakeCase reducerName)}}_EXAMPLE })).toEqual(state);
  });
});
