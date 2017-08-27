import merge from 'lodash/merge';

import { RECEIVE_LEAD, RECEIVE_LEADS, SORT_LEADS_BY_NAME } from '../actions/lead_actions';

const defaultState = {
  entities: []
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

    case SORT_LEADS_BY_NAME:
      let sortedLeads = Object.values(state.entities);
      if (action.reverse) {
        sortedLeads.sort( (a,b) => b.name.localeCompare(a.name) );
      } else {
        sortedLeads.sort( (a,b) => a.name.localeCompare(b.name) );
      }
      return {
        entities: sortedLeads
      }
      break;

    default:
      return state;
  }
};

export default LeadReducer;
