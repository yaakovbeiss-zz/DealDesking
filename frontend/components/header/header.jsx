import React from 'react';
import UsernameButton from './username_button_container';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div className="header-container">
          Welcome
          <UsernameButton />
        </div>
      )
    } else { return null }
  }
}

export default Header;
