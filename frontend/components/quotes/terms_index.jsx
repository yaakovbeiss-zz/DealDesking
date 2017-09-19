import React from 'react';
import Term from './term';

class TermsIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.receiveTerm(this.props.terms[0]);
    this.props.receiveTerms(this.props.terms);
  }

  render() {
    const terms = this.props.terms;

    return (
      <termsIndex>
        {terms.map((term) => <Term key={term.id} months={term.months} /> )}
      </termsIndex>
    )
  }
}

export default TermsIndex;
