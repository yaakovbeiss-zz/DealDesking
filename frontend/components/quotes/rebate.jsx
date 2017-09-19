import React from 'react';

class Rebate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <rebate>
        {this.props.rebate}
      </rebate>
    )
  }
}

export default Rebate;
