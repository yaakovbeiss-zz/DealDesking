import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msrp: '',
      sellPrice: '',
      profit: 0,
      residual: '',
      principal: '',
      registration: '',
      bankFee: 595,
      docFee: 80,
      smog: 22,
      miscFee: 22,
      numPayments: 36,
      moneyFactor: .001,
      rebate: 0,
      finalPayment: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.calculatePayments();
  }

  calculatePayments() {
    let residualNum = this.state.msrp - (this.state.msrp * (this.state.residual / 100))
    let principal = this.state.sellPrice - residualNum;
    let result = principal + ( this.state.registration * this.state.msrp ) + this.state.bankFee
     + this.state.docFee + this.state.smog + this.state.miscFee + this.state.profit
    this.setState({ ['finalPayment']: result });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>MSRP
            <input type="number"
              value={this.state.msrp}
              onChange={this.update('msrp')}/>
          </label>
          <label>Sell Price
            <input type="number"
              value={this.state.sellPrice}
              onChange={this.update('sellPrice')}/>
          </label>
          <label>Profit
            <input type="number"
              value={this.state.profit}
              onChange={this.update('profit')}/>
          </label>
          <label>Residual %
            <input type="number"
              value={this.state.residual}
              onChange={this.update('residual')}/>
          </label>
          <label>Principal
            <input type="number"
              value={this.state.principal}
              onChange={this.update('principal')}/>
          </label>
          <label>Registration
            <input type="number"
              value={this.state.msrp * .01}
              onChange={this.update('registration')}/>
          </label>
          <label>Bank Fee
            <input type="number"
              value={this.state.bankFee}
              onChange={this.update('bankFee')}/>
          </label>
          <label>Doc. Fee
            <input type="number"
              value={this.state.docFee}
              onChange={this.update('docFee')}/>
          </label>
          <label>Smog
            <input type="number"
              value={this.state.smog}
              onChange={this.update('smog')}/>
          </label>
          <label>Misc. Fee
            <input type="number"
              value={this.state.miscFee}
              onChange={this.update('miscFee')}/>
          </label>
          <label>Number of Payments
            <input type="number"
              value={this.state.numPayments}
              onChange={this.update('numPayments')}/>
          </label>

          <input type="submit" value="Submit" />
        </form>
        Final Payment: {this.state.finalPayment}
      </div>
    )
  }
}

export default Calculator;
