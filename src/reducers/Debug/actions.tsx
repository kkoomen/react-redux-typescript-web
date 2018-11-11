import { action } from 'typesafe-actions'
import { DebugActionTypes } from './types'

// Here we use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a
// type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions

export const enableActionLogs = () => action(
  DebugActionTypes.ENABLE_ACTION_LOGS
);

export const disableActionLogs = () => action(
  DebugActionTypes.DISABLE_ACTION_LOGS
);
