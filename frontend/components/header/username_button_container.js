import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UsernameButton from './username_button';
import { dropDown, closeDropDowns } from '../../actions/dropdown_actions';

const mapStateToProps = ({ dropdown, session }) => {
  return {
    dropdown: dropdown,
    session: session,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dropDown: (name) => dispatch(dropDown(name)),
    closeDropDowns: () => dispatch(closeDropDowns()),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UsernameButton));
