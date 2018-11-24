import { debugReducer, initialState } from '../reducer';
import { DebugActionTypes } from '../types';

import configureStore from 'redux-mock-store';

describe('Debug reducer', () => {
  let state = { ...initialState };

  beforeEach(() => {
    state = { ...initialState };
  });

  it('should return the initial state', () => {
    expect(initialState).toEqual(state);
  });

  it('should disable logs', () => {
    state.logs.enabled = false;
    expect(
      debugReducer(undefined, {
        type: DebugActionTypes.DISABLE_ACTION_LOGS,
      })
    ).toEqual(state);
  });

  it('should enable logs', () => {
    state.logs.enabled = true;
    expect(
      debugReducer(undefined, {
        type: DebugActionTypes.ENABLE_ACTION_LOGS,
      })
    ).toEqual(state);
  });
});
