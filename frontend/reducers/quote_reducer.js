import merge from 'lodash/merge';

import { RECEIVE_QUOTE, RECEIVE_QUOTES, SORT_QUOTES_BY_NAME } from '../actions/quote_actions';

const defaultState = {
  entities: [],
  currentQuote: {},
}

const QuoteReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_QUOTES:
      const quotes = action.quotes
      return merge({}, state, {
        entities: quotes
      });
      break;

    case RECEIVE_QUOTE:
      const quote = merge({}, state.currentQuote, action.quote);
      
      return merge({}, state, {
        currentQuote: quote
      })
      break;

    default:
      return state;
  }
};

export default QuoteReducer;
