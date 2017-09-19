import merge from 'lodash/merge';

import { RECEIVE_MILEAGE, RECEIVE_MILEAGES } from '../actions/mileage_actions';

const defaultState = {
  entities: [],
  currentMileage: {},
}

const MileageReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_MILEAGE:
      const mileage = action.mileage;
      return merge({}, state, {
        currentMileage: mileage
      })
      break;

    case RECEIVE_MILEAGES:
      const mileages = action.mileages;
      return merge({}, state, {
        entities: mileages
      })
      break;

    default:
      return state;
  }
}

export default MileageReducer;
