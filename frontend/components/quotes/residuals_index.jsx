import React from 'react';
import Residual from './residual';

class ResidualsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const residuals = this.props.residuals;

    return (
      <residualsIndex>
        {residuals.map((residual) => <Residual id={residual.id} key={residual.id}
          residual={residual.residual} /> )}
      </residualsIndex>
    )
  }
}

export default ResidualsIndex;
