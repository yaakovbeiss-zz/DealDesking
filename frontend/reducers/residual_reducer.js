import merge from 'lodash/merge';

import { RECEIVE_RESIDUAL, RECEIVE_RESIDUALS } from '../actions/residual_actions';

const defaultState = {
  entities: [],
  currentResidual: {},
}

const ResidualReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_RESIDUAL:
      const residual = action.residual;
      return merge({}, state, {
        currentResidual: residual
      })
      break;

    case RECEIVE_RESIDUALS:
      const residuals = action.residuals;
      return merge({}, state, {
        entities: residuals
      })
      break;

    default:
      return state;
  }
}

export default ResidualReducer;
