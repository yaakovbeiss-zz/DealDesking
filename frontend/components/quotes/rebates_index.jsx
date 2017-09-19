import React from 'react';
import Rebate from './rebate';

class RebatesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rebates = this.props.rebates;

    return (
      <rebatesIndex>
        {rebates.map((rebate) => <Rebate id={rebate.id} key={rebate.id}
          rebate={rebate.amount} /> )}
      </rebatesIndex>
    )
  }
}

export default RebatesIndex;
