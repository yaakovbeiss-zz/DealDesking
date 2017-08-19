import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import LeadsReducer from './leads_reducer';

export default combineReducers({
  session: SessionReducer,
  leads: LeadsReducer
})
