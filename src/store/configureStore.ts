import {
  Store,
  createStore,
  applyMiddleware,
  compose,
  Middleware,
  StoreEnhancer,
} from 'redux';
import { routerMiddleware } from 'connected-react-router'
import { createLogger } from 'redux-logger';
import { History } from 'history'
import thunk from 'redux-thunk';
import { __DEBUG__ } from '../config/constants';
import { rootReducer, AppState } from '../reducers';

// Compose with the devtools extension when in a non-production environment.
const composeEnhancers = (
  __DEBUG__
  && window
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

export function configureStore(
  history: History,
  initialState: object
): Store<AppState> {
  const enhancers: StoreEnhancer[] = [];
  const middlewares: Middleware[] = [
    thunk,
    routerMiddleware(history),
  ];

  if (__DEBUG__) {
    console.log('[setup] ✓ Enabling state logger');
    const loggerMiddleware = createLogger({
      level: 'info',
      collapsed: true,
      stateTransformer: (state) => state,
      predicate: (getState, action) => {
        const state = getState();
        return state.debug.logs.enabled;
      },
    });
    middlewares.push(loggerMiddleware);
  }

  const composedEnhancers = composeEnhancers(
    applyMiddleware(...middlewares),
    ...enhancers
  );

  const store = createStore(
    rootReducer(history),
    initialState,
    composedEnhancers
  );

  return store;
}
