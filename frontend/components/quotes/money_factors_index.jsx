import React from 'react';
import MoneyFactor from './money_factor';

class MoneyFactorsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const moneyFactors = this.props.moneyFactors;

    return (
      <moneyFactorsIndex>
        {moneyFactors.map((moneyFactor) => <MoneyFactor id={moneyFactor.id} key={moneyFactor.id}
          moneyFactor={moneyFactor.money_factor} termId={moneyFactor.term_id}/> )}
      </moneyFactorsIndex>
    )
  }
}

export default MoneyFactorsIndex;
