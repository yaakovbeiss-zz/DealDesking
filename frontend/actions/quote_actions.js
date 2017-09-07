import * as APIUtil from '../util/quote_api_util';

export const RECEIVE_QUOTES = 'RECEIVE_QUOTES'
export const RECEIVE_QUOTE = 'RECEIVE_QUOTE'

export const receiveQuotes = (quotes) => ({
  type: RECEIVE_QUOTES,
  quotes
})

export const receiveQuote = (quote) => ({
  type: RECEIVE_QUOTE,
  quote
});

export const requestQuotes = () => dispatch => (
  APIUtil.fetchQuotes()
    .then((quotes) => (
      dispatch(receiveQuotes(quotes))
    ))
)

export const createQuote = (quote) => dispatch => (
  APIUtil.createQuote(quote)
    .then( (quote) => (
      dispatch(receiveQuotes(quote))
    ))
);
