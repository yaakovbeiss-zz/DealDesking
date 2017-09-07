import { RECEIVE_MAKES, SELECT_DETAIL } from '../actions/make_actions';

const defaultState = {
  makes: [],
}

const CarReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MAKES:
      const makes = action.makes;
      return {
        makes: makes
      }
      break;

    case SELECT_DETAIL:
      break;

    default:
      return state;
  }
}

export default CarReducer;
