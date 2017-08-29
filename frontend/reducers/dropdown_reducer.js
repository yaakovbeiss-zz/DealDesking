import merge from 'lodash/merge';

import { DROP_USERNAME_BUTTON } from '../actions/dropdown_actions';

const defaultState = {};

const DropdownReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case DROP_USERNAME_BUTTON:
      const dropdown = action.payload.name
      const hide = action.payload.hide
      return {
        [dropdown]: hide
      }
      break;
    default:
      return state;
  }
}

export default DropdownReducer;
