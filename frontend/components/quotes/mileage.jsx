import React from 'react';

class Mileage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <mileage>
        {this.props.mileage}
      </mileage>
    )
  }
}

export default Mileage;
