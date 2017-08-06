import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import jwt_decode from 'jwt-decode';
import { setCurrentUser, clearCurrentUser } from '../actions/auth';
import { setAuthToken, cache } from './';
import { ui, auth } from '../reducers';

const { loadState, clearState } = cache;

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
    // not using cache methods for jwt, since JSON.parse is fucking up when it's given a string
    const jwt = localStorage.getItem('user-token');

    const { userId, email } = jwt_decode(jwt);
    setAuthToken(jwt);
    store.dispatch(setCurrentUser({ userId, email }));
  } else {
    store.dispatch(clearCurrentUser());
  }

  return store;
};

export default configureStore;
