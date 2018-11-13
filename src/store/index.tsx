import createHistory from 'history/createBrowserHistory';
import configureStore from './configureStore';

export const history = createHistory();
const initialStoreState: object = {};
const store = configureStore(history, initialStoreState)

export default store;
