import * as APIUtil from '../util/search_api_util.js';
import { receiveLeads, RECEIVE_LEADS } from './lead_actions';

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const receiveSearch = results => {
  return {
    type: RECEIVE_SEARCH,
    results
  }
}

export const fetchSearch = query => dispatch => {
  return APIUtil.search(query)
  .then(results => dispatch(receiveLeads(results)));
};
