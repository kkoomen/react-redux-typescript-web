import { action } from 'typesafe-actions'
import { DebugActionTypes } from './types'

export const enableActionLogs = () => action(
  DebugActionTypes.ENABLE_ACTION_LOGS
);

export const disableActionLogs = () => action(
  DebugActionTypes.DISABLE_ACTION_LOGS
);
