import React from 'react';
import Mileage from './mileage';

class MileagesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mileages = this.props.mileages;

    return (
      <mileagesIndex>
        {mileages.map((mileage) => <Mileage id={mileage.id} key={mileage.id}
          mileage={mileage.mileage} /> )}
      </mileagesIndex>
    )
  }
}

export default MileagesIndex;
