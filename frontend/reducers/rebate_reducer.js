import merge from 'lodash/merge';

import { RECEIVE_REBATE, RECEIVE_REBATES } from '../actions/rebate_actions';

const defaultState = {
  entities: [],
  currentRebate: {},
}

const RebateReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_REBATE:
      const rebate = action.rebate;
      return merge({}, state, {
        currentRebate: rebate
      })
      break;

    case RECEIVE_REBATES:
      const rebates = action.rebates;
      return merge({}, state, {
        entities: rebates
      })
      break;

    default:
      return state;
  }
}

export default RebateReducer;
