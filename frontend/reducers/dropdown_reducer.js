import merge from 'lodash/merge';

import { DROP_DOWN, CLOSE_DROP_DOWNS } from '../actions/dropdown_actions';

const defaultState = {};

const DropdownReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case DROP_DOWN:
      const dropdown = action.payload.name
      const hide = action.payload.hide
      return {
        [dropdown]: hide
      }
      break;
    case CLOSE_DROP_DOWNS:
      return defaultState;
      break;

    default:
      return state;
  }
}

export default DropdownReducer;
