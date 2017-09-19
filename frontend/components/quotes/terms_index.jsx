import React from 'react';
import Term from './term';

class TermsIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const terms = this.props.terms;
    return (
      <terms>
        {terms.map((term) => <Term key={term.id} months={term.months} moneyFactors={term.money_factors} /> )}
      </terms>
    )
  }
}

export default TermsIndex;
