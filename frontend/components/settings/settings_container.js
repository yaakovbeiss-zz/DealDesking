import { connect } from 'react-redux';
import Settings from './settings';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = ({ session }) => {
  return {
    username: session.currentUser.username,
    id: session.currentUser.id,
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
