import React from 'react';

class Display extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const quote = this.props.currentQuote;
    this.props.receiveQuote(quote);
    if (quote.make_id && quote.model_id && quote.trim_id) {
      this.props.createQuote(quote);
      this.props.history.push('/Quotes');
    } else {
      window.alert("Please enter a make, model and trim.")
    }
  }

  render() {
    const display = this.props.calcState;

    return (
      <div className="display-container">
      <section className="display">
        <span>Due at signing: {display.drive_off} </span>
        <span>First Month: {display.monthly_payment} </span>
        <span>Registration: {display.registration} </span>
        <span>Tax on rebate: {display.rebate_tax} </span>
        <span>Document Fee: {display.doc_fee} </span>
        <span>Smog Fee:{display.smog} </span>
        <span>Misc. Fee: {display.misc_fee} </span>
        <span>Bank Fee: {display.bank_fee} </span>
        <span>Down Payment: {display.down_payment} </span>
      </section>
      <section className="display">
        <span>  Monthly Payment: {display.monthly_payment} </span>
        <span>Months: {display.months} </span>
        <span>Mileage: {display.mileage} </span>
        <button onClick={this.handleSubmit}>Create Quote</button>
      </section>
      </div>
    )
  }
}

export default Display;
