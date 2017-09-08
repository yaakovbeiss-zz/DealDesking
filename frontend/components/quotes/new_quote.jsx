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
            <input type="text"
              readOnly
              value={this.props.currentQuote.year}
              onFocus={this.handleFocus}
              />
          <span>Make</span>
            <input type="text"
              readOnly
              value={this.props.currentQuote.make}
              onFocus={this.handleFocus}
              />
          <span>Model</span>
            <input type="text"
              readOnly
              value={this.props.currentQuote.model}
              onFocus={this.handleFocus}
              />
          <span>Trim</span>
            <input type="text"
              readOnly
              value={this.props.currentQuote.trim}
              onFocus={this.handleFocus}
              />
          <Calculator />
        </section>

        </quoteForm>
    )
  }
}

export default NewQuote;
