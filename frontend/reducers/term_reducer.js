import merge from 'lodash/merge';

import { RECEIVE_TERM, RECEIVE_TERMS } from '../actions/term_actions';

const defaultState = {
  entities: [],
  currentTerm: {},
}

const TermReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_TERM:
      const term = action.term;
      return merge({}, state, {
        currentTerm: term
      })
      break;

    case RECEIVE_TERMS:
      const terms = action.terms;
      return merge({}, state, {
        entities: terms
      })
      break;

    default:
      return state;
  }
}

export default TermReducer;
