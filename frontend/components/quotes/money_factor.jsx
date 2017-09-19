import React from 'react';

class MoneyFactor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <moneyFactor>
        {this.props.moneyFactor}
      </moneyFactor>
    )
  }
}

export default MoneyFactor;
