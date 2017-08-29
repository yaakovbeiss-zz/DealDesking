import { connect } from 'react-redux';
import Settings from './settings';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
