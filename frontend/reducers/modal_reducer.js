import merge from 'lodash/merge';
import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const defaultState = {
  id: null,
};

const ModalReducer = ( state = defaultState, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      const id = action.id;
      return { id: id} ;

    case CLOSE_MODAL:
      return { id: null }
      
    default:
      return state;
  }

}
export default ModalReducer;
