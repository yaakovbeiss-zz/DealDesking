import React from 'react';
import Logout from '../login/logout';

class UsernameButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'usernameButton',
      hide: true,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const payload = this.state;
    this.props.dropUsernameButton(payload)
    this.setState({ hide: !this.state.hide })
  }

  render() {
    if (this.props.session.currentUser) {
      const username = this.props.session.currentUser.username;
      if (this.props.dropdown[this.state.name]) {
        return (
          <section className="username-button-container">
            <button onClick={this.handleClick}>{username}</button>
            <button>Settings</button>
            <Logout />
          </section>
        )
      } else {
        return (
          <button onClick={this.handleClick}>
            {username}</button>
        )
      }
    } else { return null }
  }
}

export default UsernameButton;
