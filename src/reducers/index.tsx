import { combineReducers, Dispatch, Action, AnyAction } from 'redux'
import { routerReducer, RouterState } from 'react-router-redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import debugReducer from './Debug/reducer';
import { DebugState } from './Debug/types';

export interface AppState {
  routing: RouterState,
  debug: DebugState,
};

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}

const rootReducer = combineReducers<AppState>({
  routing: routerReducer,
  debug: debugReducer,
});

const localStoragePersistConfig = {
  key: process.env.APP_NAME,
  storage,
  // Only keys specified in the 'whitelist' property will be persisted.
  whitelist: ['debug'],
};

export default persistReducer(localStoragePersistConfig, rootReducer);
