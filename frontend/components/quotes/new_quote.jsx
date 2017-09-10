import React from 'react';
import Calculator from '../calculator/calculator_container';
import Display from '../calculator/display';
import MakesIndex from '../cars/makes_index_container';

class NewQuote extends React.Component {
  constructor(props) {
    super(props);
    this.sendQuote = this.sendQuote.bind(this);
  }

  sendQuote(quote) {
    if (this.props.currentQuote.make && this.props.currentQuote.model && this.props.currentQuote.trim) {
      this.props.createQuote(quote);
    } else {
      window.alert("Please enter a make, model and trim.")
    }
  }

  render() {
    return (
      <quoteForm className="quote-form">

            <MakesIndex />
            <section>
          <span>Year</span>
            <span> {this.props.currentQuote.year} </span>

          <span>Make</span>
            <span> {this.props.currentQuote.make} </span>

          <span>Model</span>
            <span> {this.props.currentQuote.model} </span>

          <span>Trim</span>
            <span> {this.props.currentQuote.trim} </span>

          <Calculator />
        </section>

        </quoteForm>
    )
  }
}

export default NewQuote;
