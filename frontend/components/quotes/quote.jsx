import React from 'react';

class Quote extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const quote = this.props.quote;
    
    return (
      <quote className="quote">
        Year: {quote.year}
        Make: {quote.make}
        Model: {quote.model}
        Trim: {quote.trim}
        Months: {quote.months}
        Msrp: {quote.msrp}
        Profit: {quote.profit}
        Sell Price: {quote.sell_price}
        Monthly Payment: {quote.monthly_payment}
      </quote>
    )
  }
}

export default Quote;
