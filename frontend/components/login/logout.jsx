import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.logout();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} value="Logout">Logout</button>
      </div>
    )
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default withRouter(connect(
  null,
  mapDispatchToProps
)(Logout));
