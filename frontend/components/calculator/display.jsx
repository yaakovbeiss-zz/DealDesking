import React from 'react';

class Display extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const quote = this.props.currentQuote;
    this.props.receiveQuote(quote);
  }

  render() {
    return (
      <div className="display-container" draggable="true">
      <section className="display">
        <span>Due at signing: {this.props.calcState.drive_off} </span>
        <span>First Month: {this.props.calcState.monthly_payment} </span>
        <span>Registration: {this.props.calcState.registration} </span>
        <span>Tax on rebate: {this.props.calcState.rebate_tax} </span>
        <span>Document Fee: {this.props.calcState.doc_fee} </span>
        <span>Smog Fee:{this.props.calcState.smog} </span>
        <span>Misc. Fee: {this.props.calcState.misc_fee} </span>
        <span>Bank Fee: {this.props.calcState.bank_fee} </span>
        <span>Down Payment: {this.props.calcState.down_payment} </span>
      </section>
      <section className="display">
        <span>  Monthly Payment: {this.props.monthly_payment} </span>
        <span>Months: {this.props.months} </span>
        <span>Mileage: {this.props.mileage} </span>
      </section>
      <button onClick={this.handleSubmit}>Create Quote</button>
      </div>
    )
  }
}

export default Display;
