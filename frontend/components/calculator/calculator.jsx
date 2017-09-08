import React from 'react';
import Display from './display_container.js';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideDisplay: true,
      msrp: 0,
      sell_price: 0,
      profit: 0,
      rebate: 0,
      residual: 0,
      money_factor: .00059,
      months: 36,
      mileage: 12000,
      tax: 9.25,
      bank_fee: 595,
      bank_fee_plan: 'Upfront',
      registration: 0,
      registration_plan: 'Upfront',
      doc_fee: 80,
      doc_fee_plan: 'Upfront',
      smog: 22,
      smog_plan: 'Upfront',
      misc_fee: 22,
      misc_fee_plan: 'Upfront',
      rebate_tax: 0,
      rebate_tax_plan: 'Upfront',
      down_payment: 0,
      drive_off: 0,
      monthly_payment: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  display() {
    return this.state.hideDisplay ? <div></div> :
      <Display calcState={this.state} />
  }

  toggleDisplay() {
    this.setState({ hideDisplay: !this.state.hideDisplay })
  }

  update(field) {
    return e => this.setState({
      [field]: parseFloat(e.currentTarget.value)
    });
  }

  updatePlan(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.calculatePayments();
    const quote = this.state;
    this.props.receiveQuote(quote);
    this.toggleDisplay();
  }

  handleFocus(e) {
    e.target.select();
  }

  calculateUpfront() {
    const registration = this.state.msrp * .0085;
    let upfront = 0;
    let capped = 0;
    const plans = [
      [this.state.bank_fee, this.state.bank_fee_plan],
      [registration, this.state.registration_plan],
      [this.state.doc_fee, this.state.doc_fee_plan],
      [this.state.smog, this.state.smog_plan],
      [this.state.misc_fee, this.state.misc_fee_plan],
      [this.state.rebate_tax, this.state.rebate_tax_plan]
    ]
    plans.forEach((plan) => {
      if(plan[1] === 'Upfront') {
        upfront += plan[0]
      } else if (plan[1] === 'Capped') {
        capped += plan[0]
      }
    })
    return [upfront, capped]
  }

  calculatePayments() {
    // calculation taken directly from www.edmunds.com
    const residualValue = this.state.msrp * (this.state.residual / 100)
    const registration = this.state.msrp * .0085
    const planPayments = this.calculateUpfront();
    const upfront = planPayments[0]
    const capped = planPayments[1]
    const grossCapitalizedCost = this.state.sell_price + capped + upfront;
    const capCostReduction = (this.state.rebate * (1 - (this.state.tax / 100))) + this.state.down_payment + upfront;
    const adjCapCost = grossCapitalizedCost - capCostReduction;
    const depreciation = adjCapCost - residualValue;
    const basePayment = depreciation / this.state.months;
    const rentCharge = (adjCapCost + residualValue) * this.state.money_factor;
    const preTaxPayment = basePayment + rentCharge;
    let monthlyPayment = preTaxPayment * (1 + (this.state.tax / 100));
    let driveOff = upfront + this.state.down_payment + monthlyPayment;

    monthlyPayment = monthlyPayment.toFixed(2);
    driveOff = driveOff.toFixed(2);
    this.setState({ drive_off: driveOff });
    this.setState({ monthly_payment: monthlyPayment });
  }

  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit}>
          <container className="calc-container">
          <section className="calc-row">
            <label>MSRP
              <input type="number"
                value={this.state.msrp || 0}
                onFocus={this.handleFocus}
                onChange={this.update('msrp')}/>
            </label>
            <label>Sell Price
              <input type="number"
                value={this.state.sell_price || 0}
                onFocus={this.handleFocus}
                onChange={this.update('sell_price')}/>
            </label>
            <label>Profit
              <input type="number"
                value={this.state.profit || 0}
                onFocus={this.handleFocus}
                onChange={this.update('profit')}/>
            </label>
            <label>Rebate
              <input type="number"
                value={this.state.rebate || 0}
                onFocus={this.handleFocus}
                onChange={this.update('rebate')}/>
            </label>

          </section>

          <section className="calc-row">
          <label>Residual %
              <input type="number"
                value={this.state.residual || 0}
                onFocus={this.handleFocus}
                onChange={this.update('residual')}/>
            </label>
            <label>Money Factor
              <input type="number"
                value={this.state.money_factor || 0}
                onFocus={this.handleFocus}
                onChange={this.update('money_factor')}/>
            </label>
            <label>Months
              <input type="number"
                value={this.state.months || 0}
                onFocus={this.handleFocus}
                onChange={this.update('months')}/>
            </label>
            <label>Mileage
              <input type="number"
                value={this.state.mileage}
                onFocus={this.handleFocus}
                onChange={this.update('mileage')}/>
            </label>
            <label>Tax %
              <input type="number"
                value={this.state.tax || 0}
                onFocus={this.handleFocus}
                onChange={this.update('tax')}/>
            </label>
          </section>

          <section className="calc-row">

              <label>Bank Fee
                <input type="number"
                  value={this.state.bank_fee || 0}
                  onFocus={this.handleFocus}
                  onChange={this.update('bank_fee')}/>
              </label>
              <label>Registration
                <input type="number"
                  value={this.state.msrp * .0085 || 0}
                  onFocus={this.handleFocus}
                  onChange={this.update('registration')}/>
              </label>
              <label>Doc. Fee
                <input type="number"
                  value={this.state.doc_fee || 0}
                  onFocus={this.handleFocus}
                  onChange={this.update('doc_fee')}/>
              </label>
              <label>Smog Fee
                <input type="number"
                  required value={this.state.smog || 0}
                  onFocus={this.handleFocus}
                  onChange={this.update('smog')}/>
              </label>
              <label>Misc. Fee
                <input type="number"
                  value={this.state.misc_fee || 0}
                  onFocus={this.handleFocus}
                  onChange={this.update('misc_fee')}/>
              </label>
              <label>Tax on Rebate
                <input type="number"
                  value={ this.state.rebate - ((1 - (this.state.tax /100)) * this.state.rebate) || 0}
                  onFocus={this.handleFocus}
                  onChange={this.update('rebate_tax')}/>
              </label>
              <label>Customer Cash
                <input type="number"
                  value={this.state.down_payment || 0}
                  onFocus={this.handleFocus}
                  onChange={this.update('down_payment')}/>
              </label>
            </section>

            <section className="calc-row">
              <select onChange={this.updatePlan('bank_fee_plan')}>
                <option value="Upfront">Upfront</option>
                <option value="Capped">Capped</option>
              </select>
              <select onChange={this.updatePlan('registration_plan')}>
                <option value="Upfront">Upfront</option>
                <option value="Capped">Capped</option>
              </select>
              <select onChange={this.updatePlan('doc_fee_plan')} >
                <option value="Upfront">Upfront</option>
                <option value="Capped">Capped</option>
              </select>
              <select onChange={this.updatePlan('smog_plan')}>
                <option value="Upfront">Upfront</option>
                <option value="Capped">Capped</option>
              </select>
              <select onChange={this.updatePlan('misc_fee_plan')}>
                <option value="Upfront">Upfront</option>
                <option value="Capped">Capped</option>
              </select>
              <select onChange={this.updatePlan('rebate_tax_plan')}>
                <option value="Upfront">Upfront</option>
                <option value="Capped">Capped</option>
              </select>
            </section>
          </container>
          <button onClick={this.handleSubmit}>Calculate</button>
        </form>
        <br/>
        {this.display()}
      </div>
    )
  }
}

export default Calculator;
