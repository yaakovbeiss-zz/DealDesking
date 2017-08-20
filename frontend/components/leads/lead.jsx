import React from 'react';

class Lead extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}
export default Lead;
