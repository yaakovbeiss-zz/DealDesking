import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UsernameButton from './username_button';
import { dropUsernameButton } from '../../actions/dropdown_actions';

const mapStateToProps = ({ dropdown, session }) => {
  return {
    dropdown: dropdown,
    session: session,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dropUsernameButton: (name) => dispatch(dropUsernameButton(name)),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UsernameButton));
