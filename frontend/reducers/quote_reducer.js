import merge from 'lodash/merge';

import { RECEIVE_QUOTE, RECEIVE_QUOTES, SORT_QUOTES_BY_NAME } from '../actions/lead_actions';

const defaultState = {
  entities: {}
}

const QuoteReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_QUOTES:
      const quotes = action.quotes
      return {
        entities: quotes
      }
      break;
    default:
      return state;
  }
};

export default QuoteReducer;
