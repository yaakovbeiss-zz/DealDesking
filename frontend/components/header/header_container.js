import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
  }
}

export default connect(
  mapStateToProps,
  null
)(Header);
