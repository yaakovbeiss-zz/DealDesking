import React from 'react';

class Display extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      msrp: this.props.msrp,
      registration: this.props.registration,
      rebate_tax: this.props.rebateTax,
      doc_fee: this.props.docFee,
      smog: this.props.smog,
      misc_fee: this.props.miscFee,
      bank_fee: this.props.bankFee,
      months: this.props.months,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const quote = this.state;
    this.props.createQuote(quote);
  }

  render() {
    debugger
    return (
      <div className="display-container" draggable="true">
      <section className="display">
        <span>Due at signing: {this.props.driveOff} </span>
        <span>First Month: {this.props.monthlyPayment} </span>
        <span>Registration: {this.props.registration} </span>
        <span>Tax on rebate: {this.props.rebateTax} </span>
        <span>Document Fee: {this.props.docFee} </span>
        <span>Smog Fee:{this.props.smog} </span>
        <span>Misc. Fee: {this.props.miscFee} </span>
        <span>Bank Fee: {this.props.bankFee} </span>
        <span>Down Payment: {this.props.downPayment} </span>
      </section>
      <section className="display">
        <span>  Monthly Payment: {this.props.monthlyPayment} </span>
        <span>Months: {this.props.months} </span>
        <span>Mileage: {this.props.mileage} </span>
      </section>
      <button onClick={this.handleSubmit}>Create Quote</button>
      </div>
    )
  }
}

export default Display;
