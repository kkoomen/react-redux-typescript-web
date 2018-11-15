import reducer, { initialState } from '../reducer';
import { DebugActionTypes } from '../types';

describe('Debug reducer', () => {
  let state = reducer(undefined, {});

  beforeEach(() => {
    state = { ...initialState };
  });

  it('should return the initial state', () => {
    expect(initialState).toEqual(state);
  });

  it('should disable logs', () => {
    state.logs.enabled = false;
    expect(
      reducer(undefined, {
        type: DebugActionTypes.DISABLE_ACTION_LOGS,
      })
    ).toEqual(state);
  });

  it('should enable logs', () => {
    state.logs.enabled = true;
    expect(
      reducer(undefined, {
        type: DebugActionTypes.ENABLE_ACTION_LOGS,
      })
    ).toEqual(state);
  });
});
