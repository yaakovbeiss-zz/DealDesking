import React from 'react';
import Logout from '../login/logout';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="header-container">
        
        <Logout />
      </div>
    )
  }
}

export default Header;
