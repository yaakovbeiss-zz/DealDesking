import * as APIUtil from '../util/quote_api_util';

export const RECEIVE_QUOTES = 'RECEIVE_QUOTES'

export const receiveQuotes = (quotes) => ({
  type: RECEIVE_LEADS,
  quotes
})

export const createQuote = (quote) => dispatch => (
  APIUtil.createQuote(quote)
    .then( (quote) => (
      dispatch(receiveQuotes(quote))
    ))
);
