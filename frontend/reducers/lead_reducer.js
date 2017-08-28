import merge from 'lodash/merge';

import { RECEIVE_LEAD, RECEIVE_LEADS, SORT_LEADS_BY_FIELD } from '../actions/lead_actions';
import { RECEIVE_SEARCH } from '../actions/search_actions';

const defaultState = {
  entities: []
}

const LeadReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LEADS:
      let leads = action.leads
      return {
        entities: leads
      }
      break;

    case SORT_LEADS_BY_FIELD:
      let sortedLeads = Object.values(state.entities);
      const field = action.payload.field;
      if (field === 'created_at') {
        if (action.payload.reverse){
          sortedLeads.sort( (a,b) => new Date(b[field]) - new Date(a[field]) );
        } else {
          sortedLeads.sort( (a,b) => new Date(a[field]) - new Date(b[field]) )
        }
        return { entities: sortedLeads }
      }

      if (action.payload.reverse) {
        sortedLeads.sort( (a,b) => b[field].localeCompare(a[field]) );
      } else {
        sortedLeads.sort( (a,b) => a[field].localeCompare(b[field]) );
      }
      return { entities: sortedLeads }
      break;
    case RECEIVE_SEARCH:
      let results = action.results

      return {
        entities: results
      }
      break;
    default:
      return state;
  }
};

export default LeadReducer;
