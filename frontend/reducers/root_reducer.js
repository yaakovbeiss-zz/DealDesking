import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import LeadReducer from './lead_reducer';
import QuoteReducer from './quote_reducer';
import TermReducer from './term_reducer';
import MoneyFactorReducer from './money_factor_reducer';
import RebateReducer from './rebate_reducer';
import ResidualReducer from './residual_reducer';
import MileageReducer from './mileage_reducer';
import CarReducer from './make_reducer';
import DropdownReducer from './dropdown_reducer';
import ModalReducer from './modal_reducer';

export default combineReducers({
  session: SessionReducer,
  lead: LeadReducer,
  quote: QuoteReducer,
  term: TermReducer,
  moneyFactor: MoneyFactorReducer,
  rebate: RebateReducer,
  residual: ResidualReducer,
  mileage: MileageReducer,
  car: CarReducer,
  dropdown: DropdownReducer,
  modal: ModalReducer,
})
