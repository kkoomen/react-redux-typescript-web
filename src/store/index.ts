import createHistory from 'history/createBrowserHistory';
import { configureStore } from './configureStore';

export const history = createHistory();
const initialStoreState: object = {};

export const store = configureStore(history, initialStoreState)
