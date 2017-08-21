import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import LeadReducer from './lead_reducer';

export default combineReducers({
  session: SessionReducer,
  lead: LeadReducer,
})
