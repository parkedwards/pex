import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import jwt_decode from 'jwt-decode';
import { setCurrentUser } from '../actions/auth';
import { setAuthToken } from '../utils';

import { ui, auth } from '../reducers';

const configureStore = () => {
  const rootReducer = combineReducers({
    ui,
    auth,
  });

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );

  if (localStorage['user-token']) {
    const user = jwt_decode(localStorage.getItem('user-token'));
    setAuthToken(localStorage['user-token']);
    store.dispatch(setCurrentUser(user));
  }

  return store;
};

export default configureStore;
