import React from 'react';
import Display from './display.jsx';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideDisplay: true,
      msrp: 0,
      sellPrice: 0,
      profit: 0,
      rebate: 0,
      residual: 0,
      moneyFactor: .00059,
      months: 36,
      mileage: 12000,
      tax: 9.25,
      bankFee: 595,
      bankFeePlan: 'Upfront',
      registration: 0,
      registrationPlan: 'Upfront',
      docFee: 80,
      docFeePlan: 'Upfront',
      smog: 22,
      smogPlan: 'Upfront',
      miscFee: 22,
      miscFeePlan: 'Upfront',
      rebateTax: 0,
      rebateTaxPlan: 'Upfront',
      downPayment: 0,
      driveOff: 0,
      monthlyPayment: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  display() {
    return this.state.hideDisplay ? <div></div> :
      <Display registration={this.state.msrp * .0085} rebateTax={this.state.rebateTax}
        monthlyPayment={this.state.monthlyPayment} docFee={this.state.docFee} smog={this.state.smog}
        miscFee={this.state.miscFee} bankFee={this.state.bankFee} downPayment={this.state.downPayment}
        months={this.state.months} mileage={this.state.mileage} driveOff={this.state.driveOff}/>
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
      [this.state.bankFee, this.state.bankFeePlan],
      [registration, this.state.registrationPlan],
      [this.state.docFee, this.state.docFeePlan],
      [this.state.smog, this.state.smogPlan],
      [this.state.miscFee, this.state.miscFeePlan],
      [this.state.rebateTax, this.state.rebateTaxPlan]
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
    const residualValue = this.state.msrp * (this.state.residual / 100)
    const registration = this.state.msrp * .0085
    const planPayments = this.calculateUpfront();
    const upfront = planPayments[0]
    const capped = planPayments[1]
    const grossCapitalizedCost = this.state.sellPrice + capped + upfront;
    const capCostReduction = (this.state.rebate * (1 - (this.state.tax / 100))) + this.state.downPayment + upfront;
    const adjCapCost = grossCapitalizedCost - capCostReduction;
    const depreciation = adjCapCost - residualValue;
    const basePayment = depreciation / this.state.months;
    const rentCharge = (adjCapCost + residualValue) * this.state.moneyFactor;
    const preTaxPayment = basePayment + rentCharge;
    let monthlyPayment = preTaxPayment * (1 + (this.state.tax / 100));
    let driveOff = upfront + this.state.downPayment + monthlyPayment;

    monthlyPayment = monthlyPayment.toFixed(2);
    driveOff = driveOff.toFixed(2);
    this.setState({ ['driveOff']: driveOff });
    this.setState({ ['monthlyPayment']: monthlyPayment });
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
                value={this.state.sellPrice || 0}
                onFocus={this.handleFocus}
                onChange={this.update('sellPrice')}/>
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
                value={this.state.moneyFactor || 0}
                onFocus={this.handleFocus}
                onChange={this.update('moneyFactor')}/>
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
                  value={this.state.bankFee || 0}
                  onFocus={this.handleFocus}
                  onChange={this.update('bankFee')}/>
              </label>
              <label>Registration
                <input type="number"
                  value={this.state.msrp * .0085 || 0}
                  onFocus={this.handleFocus}
                  onChange={this.update('registration')}/>
              </label>
              <label>Doc. Fee
                <input type="number"
                  value={this.state.docFee || 0}
                  onFocus={this.handleFocus}
                  onChange={this.update('docFee')}/>
              </label>
              <label>Smog Fee
                <input type="number"
                  required value={this.state.smog || 0}
                  onFocus={this.handleFocus}
                  onChange={this.update('smog')}/>
              </label>
              <label>Misc. Fee
                <input type="number"
                  value={this.state.miscFee || 0}
                  onFocus={this.handleFocus}
                  onChange={this.update('miscFee')}/>
              </label>
              <label>Tax on Rebate
                <input type="number"
                  value={ this.state.rebate - ((1 - (this.state.tax /100)) * this.state.rebate) || 0}
                  onFocus={this.handleFocus}
                  onChange={this.update('rebateTax')}/>
              </label>
              <label>Customer Cash
                <input type="number"
                  value={this.state.downPayment || 0}
                  onFocus={this.handleFocus}
                  onChange={this.update('downPayment')}/>
              </label>
            </section>

            <section className="calc-row">
              <select onChange={this.updatePlan('bankFeePlan')}>
                <option value="Upfront">Upfront</option>
                <option value="Capped">Capped</option>
              </select>
              <select onChange={this.updatePlan('registrationPlan')}>
                <option value="Upfront">Upfront</option>
                <option value="Capped">Capped</option>
              </select>
              <select onChange={this.updatePlan('docFeePlan')} >
                <option value="Upfront">Upfront</option>
                <option value="Capped">Capped</option>
              </select>
              <select onChange={this.updatePlan('smogPlan')}>
                <option value="Upfront">Upfront</option>
                <option value="Capped">Capped</option>
              </select>
              <select onChange={this.updatePlan('miscFeePlan')}>
                <option value="Upfront">Upfront</option>
                <option value="Capped">Capped</option>
              </select>
              <select onChange={this.updatePlan('rebateTaxPlan')}>
                <option value="Upfront">Upfront</option>
                <option value="Capped">Capped</option>
              </select>
            </section>
          </container>
          <input type="submit" value="Submit" />
        </form>
        <br/>
        {this.display()}
      </div>
    )
  }
}

export default Calculator;
