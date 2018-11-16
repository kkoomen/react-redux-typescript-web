import { combineReducers, Dispatch, Action, AnyAction } from 'redux'
import { connectRouter } from 'connected-react-router'
import { RouterState } from 'connected-react-router';
import { persistReducer } from 'redux-persist'
import { History } from 'history';

import debugReducer, { DebugState } from './Debug';

export interface AppState {
  router: RouterState,
  debug: DebugState,
};

// Additional props for connected React components.
// This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
};

const rootReducer = (history: History) => combineReducers<AppState>({
  router: connectRouter(history),
  debug: debugReducer,
});

export default rootReducer;
