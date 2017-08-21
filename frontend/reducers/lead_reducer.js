import merge from 'lodash/merge';

import { RECEIVE_LEAD, RECEIVE_LEADS } from '../actions/lead_actions';

const defaultState = {
  entities: {}
}

const LeadReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LEADS:
      const leads = action.leads
      return {
        entities: leads
      }
      break;
    case RECEIVE_LEAD:
      return merge({}, state, {
        entities: action.lead
      })
    default:
      return state;
  }
};

export default LeadReducer;
