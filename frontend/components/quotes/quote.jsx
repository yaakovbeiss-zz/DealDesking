import React from 'react';
import QuoteExpanded from './quote_expanded_container';

class Quote extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const id = this.props.quote.id
    this.props.openModal(id);
  }

  quoteExpanded() {
    if (this.props.openQuoteModalId === this.props.quote.id) {
      return <QuoteExpanded quote ={this.props.quote} />
    } else {
      return <empty></empty>
    }
  }

  render() {
    const quote = this.props.quote;

    return (

      <quote onClick={this.handleClick} className="quote-container">
        <section className="quote" >
          <span>{quote.year} </span>
          <span>{quote.make} </span>
          <span>{quote.model} </span>
          <span>{quote.trim} </span>
          <span>Months: {quote.months}</span>
          <span>Msrp: {quote.msrp}</span>
          <span>Sell Price: {quote.sell_price}</span>
          <span>Profit: {quote.profit}</span>
          <span>Monthly Payment: {quote.monthly_payment}</span>
        </section>
        <section>
          {this.quoteExpanded()}
        </section>
      </quote>
    )
  }

}

export default Quote;
