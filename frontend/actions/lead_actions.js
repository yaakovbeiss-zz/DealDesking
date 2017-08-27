import * as APIUtil from '../util/lead_api_util';

export const RECEIVE_LEAD = 'RECEIVE_LEAD'
export const RECEIVE_LEADS = 'RECEIVE_LEADS'
export const SORT_LEADS_BY_NAME = 'SORT_LEADS_BY_NAME'

export const receiveLead = (lead) => ({
  type: RECEIVE_LEAD,
  lead
})

export const receiveLeads = (leads) => ({
  type: RECEIVE_LEADS,
  leads
})

export const sortLeads = (e) => ({
  type: SORT_LEADS_BY_NAME,
  e
})

export const requestLeads = () => dispatch => (
  APIUtil.fetchLeads()
    .then((leads) => (
      dispatch(receiveLeads(leads))
    ))
);

export const createLead = (lead) => dispatch => (
  APIUtil.createLead(lead)
    .then((lead) => (
      dispatch(receiveLeads(lead))
    ))
);

export const destroyLead = (id) => dispatch => (
  APIUtil.destroyLead(id)
    .then((id) => (
      dispatch(receiveLeads(id))
    ))
);

export const updateLead = (lead) => dispatch => (
  APIUtil.updateLead(lead)
    .then((leads) => (
      dispatch(receiveLeads(leads))
    ))
);
