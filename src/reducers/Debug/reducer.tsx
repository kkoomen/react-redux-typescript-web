import { ActionType } from  'typesafe-actions';
import { Reducer } from 'redux';
import { DebugState, DebugActionTypes } from './types'
import * as debugActions from './actions';

export const initialState: DebugState = {
  logs: {
    enabled: true,
  },
};

export type DebugAction = ActionType<typeof debugActions>;

const debugReducer: Reducer<DebugState, DebugAction> = (state = initialState, action) => {
  switch (action.type) {
    case DebugActionTypes.ENABLE_ACTION_LOGS: {
      return {
        ...state,
        logs: {
          ...state.logs,
          enabled: true,
        },
      };
    }

    case DebugActionTypes.DISABLE_ACTION_LOGS: {
      return {
        ...state,
        logs: {
          ...state.logs,
          enabled: false,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default debugReducer;
