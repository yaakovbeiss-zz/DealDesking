import * as APIUtil from '../util/make_api_util';

export const RECEIVE_MAKES = 'RECEIVE_MAKES';
export const SELECT_DETAIL = 'SELECT_DETAIL';

export const receiveMakes = (makes) => ({
  type: RECEIVE_MAKES,
  makes
})

export const selectDetail = (id) => ({
  type: SELECT_DETAIL,
  id
})

export const requestMakes = () => dispatch => (
  APIUtil.fetchMakes()
    .then((makes) => (
      dispatch(receiveMakes(makes))
    ))
);
