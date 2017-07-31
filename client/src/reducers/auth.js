import { auth as INITIAL_STATE } from './INITIAL_STATE';
import { SET_CURRENT_USER } from '../actions';

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true, // tutorial is saying check if object is empty
        user: action.user,
      };
    default:
      return state;
  }
};

export default auth;
