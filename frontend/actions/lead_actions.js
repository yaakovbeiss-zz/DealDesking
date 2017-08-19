import * as APIUtil from '../util/lead_api_util';

export const RECEIVE_LEAD = 'RECEIVE_LEAD'
export const RECEIVE_LEADS = 'RECEIVE_LEADS'

export const receiveLead = lead => ({
  type: RECEIVE_LEAD,
  lead
})

export const receiveLeads = leads => ({
  type: RECEIVE_LEADS,
  leads
})

export const requestLeads = () => dispatch => (
  APIUtil.fetchLeads()
    .then( (leads) => (
      dispatch(receiveLeads(leads))
    ))
);

export const createLead = () => dispatch (
  APIUtil.createLead(lead)
    .then( (lead) => (
      dispatch(receiveLead(lead))
    ))
);
