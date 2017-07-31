import $ from 'axios';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from '../utils';
import { REQUEST_LOGIN, SET_CURRENT_USER, ERROR_LOGIN } from './';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user,
});

export const login = creds => dispatch => {
  dispatch({ type: REQUEST_LOGIN });
  return $.post('/api/auth', creds)
    .then(res => {
      const token = res.data;
      const payload = jwt_decode(token);

      localStorage.setItem('user-token', token);
      setAuthToken(token);
      dispatch(setCurrentUser(payload));
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: ERROR_LOGIN });
    });
};

export const signup = () => {};
