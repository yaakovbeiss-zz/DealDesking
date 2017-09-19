import React from 'react';

class Residual extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <residual>
        {this.props.residual}
      </residual>
    )
  }
}

export default Residual;
