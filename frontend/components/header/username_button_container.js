import { connect } from 'react-redux';
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsernameButton);
