import React from 'react';

class Display extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div>
        First Month: {this.props.monthlyPayment} <br/>
        Registration: {this.props.registration} <br/>
        Tax on rebate: {this.props.rebateTax} <br/>
        Document Fee: {this.props.docFee} <br/>
        Smog Fee:{this.props.smog} <br/>
        Misc. Fee: {this.props.miscFee} <br/>
        Bank Fee: {this.props.bankFee} <br/>
        Down Payment: {this.props.downPayment} <br/>
        Mileage: {this.props.mileage} <br/>
        Months: {this.props.months} <br/>
        Monthly Payment: {this.props.monthlyPayment} <br/>
        Drive Off: {this.props.driveOff} <br/>
        Total:
      </div>
    )
  }
}

export default Display;
