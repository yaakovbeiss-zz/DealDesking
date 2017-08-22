import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msrp: 0,
      sellPrice: 0,
      profit: 0,
      residual: 0,
      bankFee: 595,
      bankFeePlan: 'Upfront',
      docFee: 80,
      docFeePlan: 'Upfront',
      smog: 22,
      smogPlan: 'Upfront',
      miscFee: 22,
      miscFeePlan: 'Upfront',
      numPayments: 36,
      moneyFactor: .00059,
      rebate: 0,
      customerCash: 0,
      driveOff: 0,
      monthlyPayment: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => this.setState({
      [field]: parseInt(e.currentTarget.value)
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.calculatePayments();
  }

  calculatePayments() {
    let residualNum = this.state.msrp - (this.state.msrp * (this.state.residual / 100))
    let principal = this.state.sellPrice - residualNum;
    let registration = this.state.msrp * .009
    let result = (principal + registration + this.state.bankFee
     + this.state.docFee + this.state.smog + this.state.miscFee + this.state.profit) / this.state.numPayments
     result = result.toFixed(2)
    this.setState({ ['monthlyPayment']: result });
  }

  render() {
    return (
      <div >
        <form className="calc-container" onSubmit={this.handleSubmit}>
          <section className="calc-row">
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
          </section>

          <section className="calc-row">
          <label>Residual %
            <input type="number"
              value={this.state.residual}
              onChange={this.update('residual')}/>
          </label>
          <label>Money Factor
            <input type="number"
              value={this.state.moneyFactor}
              onChange={this.update('moneyFactor')}/>
          </label>
          <label>Number of Payments
            <input type="number"
              value={this.state.numPayments}
              onChange={this.update('numPayments')}/>
          </label>
          </section>

          <section className="calc-row">
          <label>Bank Fee
            <input type="number"
              value={this.state.bankFee}
              onChange={this.update('bankFee')}/>
            <select>
              <option onChange={this.update('bankFee')} value="Upfront">Upfront</option>
              <option value="Capped">Capped</option>
            </select>
          </label>
          <label>Doc Fee
            <input type="number"
              value={this.state.docFee}
              onChange={this.update('docFee')}/>
            <select>
              <option onChange={this.update('docFee')} value="Upfront">Upfront</option>
              <option value="Capped">Capped</option>
            </select>
          </label>
          <label>Smog Fee
            <input type="number"
              value={this.state.smog}
              onChange={this.update('smog')}/>
            <select>
              <option onChange={this.update('smog')} value="Upfront">Upfront</option>
              <option value="Capped">Capped</option>
            </select>
          </label>
          <label>Misc. Fee
            <input type="number"
              value={this.state.miscFee}
              onChange={this.update('miscFee')}/>
            <select>
              <option onChange={this.update('miscFee')} value="Upfront">Upfront</option>
              <option value="Capped">Capped</option>
            </select>
          </label>

          <label>Customer Cash
            <input type="number"
              value={this.state.customerCash}
              onChange={this.update('customerCash')}/>
          </label>
          </section>
          <input type="submit" value="Submit" />
        </form>
        Drive Off: {this.state.driveOff} <br/>
        Monthly Payment: {this.state.monthlyPayment}
      </div>
    )
  }
}

export default Calculator;
