import { RECEIVE_MAKES } from '../actions/make_actions';

const defaultState = {
  makes: []
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
    default:
      return state;
  }
}

export default CarReducer;
