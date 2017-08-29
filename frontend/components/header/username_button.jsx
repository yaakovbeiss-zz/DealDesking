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
    this.handleSettingsClick = this.handleSettingsClick.bind(this);
  }

  handleClick() {
    const payload = this.state;
    this.props.dropDown(payload)
    this.setState({ hide: !this.state.hide })
  }

  handleSettingsClick() {
    this.props.history.push('/settings')
    this.setState({ hide: true })
    this.props.closeDropDowns();
  }

  render() {
    if (this.props.session.currentUser) {
      const username = this.props.session.currentUser.username;
      if (this.props.dropdown[this.state.name]) {
        return (
          <div>
            <button onClick={this.handleClick}>{username}
              <img src={window.images.gear_icon} />
            </button>
            <section className="dropdown">
              <li className="dropdown-item" onClick={this.handleSettingsClick}>Settings</li>
              <Logout />
            </section>
          </div>
        )
      } else {
        return (
          <button onClick={this.handleClick}>{username}
            <img src={window.images.gear_icon} />
            </button>
        )
      }
    } else { return null }
  }
}

export default UsernameButton;
