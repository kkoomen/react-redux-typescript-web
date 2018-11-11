import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import persistState from 'redux-localstorage';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';
import { DEBUG } from '../config/constants';

export const history = createHistory();

const initialStoreState: object = {};
const enhancers = [];
const middlewares = [
  thunk,
  routerMiddleware(history),
];

if (DEBUG) {
  if ((window as any).__REDUX_DEVTOOLS_EXTENSION__) {
    console.log('[setup] ✓ Enabling Redux DevTools Extension');
    enhancers.push((window as any).__REDUX_DEVTOOLS_EXTENSION__());
  }

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

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialStoreState,
  composedEnhancers
);

export default store;
