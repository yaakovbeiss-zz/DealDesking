import * as APIUtil from '../util/quote_api_util';

export const RECEIVE_QUOTES = 'RECEIVE_QUOTES'

export const receiveQuotes = (quotes) => ({
  type: RECEIVE_QUOTES,
  quotes
})

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
