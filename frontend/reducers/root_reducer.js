import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import LeadReducer from './lead_reducer';
import QuoteReducer from './quote_reducer';
import CarReducer from './make_reducer';
import DropdownReducer from './dropdown_reducer';

export default combineReducers({
  session: SessionReducer,
  lead: LeadReducer,
  quote: QuoteReducer,
  car: CarReducer,
  dropdown: DropdownReducer,
})
