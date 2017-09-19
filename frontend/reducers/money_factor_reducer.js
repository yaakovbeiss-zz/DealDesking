import merge from 'lodash/merge';

import { RECEIVE_MONEY_FACTOR, RECEIVE_MONEY_FACTORS } from '../actions/money_factor_actions';

const defaultState = {
  entities: [],
  currentMoneyFactor: {},
}

const MoneyFactorReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_MONEY_FACTOR:
      const moneyFactor = action.moneyFactor;
      return merge({}, state, {
        currentMoneyFactor: moneyFactor
      })
      break;

    case RECEIVE_MONEY_FACTORS:
      const moneyFactors = action.moneyFactors;
      return merge({}, state, {
        entities: moneyFactors
      })
      break;

    default:
      return state;
  }
}

export default MoneyFactorReducer;
