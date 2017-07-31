import { combineReducers } from 'redux';
import { ui as INITIAL_STATE } from './INITIAL_STATE';

import { UPDATE_VIEW } from '../actions';

const selected = (state = INITIAL_STATE.selected, action) => {
  switch (action.type) {
    case UPDATE_VIEW:
      return action.view;
    default:
      return state;
  }
};

export default combineReducers({
  selected,
});
