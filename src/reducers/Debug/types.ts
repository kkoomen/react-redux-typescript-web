export interface DebugState {
  logs: {
    enabled: boolean,
  },
};

export enum DebugActionTypes {
  ENABLE_ACTION_LOGS = '@@debug/ENABLE_ACTION_LOGS',
  DISABLE_ACTION_LOGS = '@@debug/DISABLE_ACTION_LOGS',
};
