import React from 'react';
import TermsIndex from './terms_index_container';
import MoneyFactorsIndex from './money_factors_index_container';
import RebatesIndex from './rebates_index_container';
import ResidualsIndex from './residuals_index_container';
import MileagesIndex from './mileages_index_container';
import Calculator from '../calculator/calculator';

class QuoteExpanded extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.mergeArrays = this.mergeArrays.bind(this);
  }

  componentDidMount() {
    const quote = this.props.quote;
    this.props.receiveQuote(quote);
    const terms = quote.terms;
    const rebates = this.mergeArrays(terms, "rebates");
    const moneyFactors = this.mergeArrays(terms, "money_factors");
    const residuals = this.mergeArrays(terms, "residuals");
    const mileages = this.mergeArrays(residuals, "mileages");

    this.props.receiveTerms(terms);
    this.props.receiveTerm(terms[0]);
    this.props.receiveMoneyFactors(moneyFactors);
    this.props.receiveMoneyFactor(moneyFactors[0]);
    this.props.receiveRebates(rebates);
    this.props.receiveRebate(rebates[0]);
    this.props.receiveResiduals(residuals);
    this.props.receiveResidual(residuals[0]);
    this.props.receiveMileages(mileages);
    this.props.receiveMileage(mileages[0]);
  }

  mergeArrays(array, selection) {
    let results = array.map((subArray) => subArray[selection])
    let merged = [].concat.apply([], results)
    return merged;
  }

  handleClick(e) {
    e.stopPropagation();
    this.props.closeModal();
  }

  handleModalClick(e) {
    e.stopPropagation();
  }

  render() {
    const quote = this.props.quote;
    const terms = quote.terms;

    return (
      <div onClick={this.handleClick} className="modal-container">

        <section onClick={this.handleModalClick} className="modal quote-expanded">
          <section className="row">
            <span className="detail selected">Year</span>
            <span className="detail selected">Make</span>
            <span className="detail selected">Model</span>
            <span className="detail selected">Trim</span>
            <span className="detail selected">MSRP</span>
            <span className="detail selected">Sell Price:</span>
            <span className="detail selected">Term</span>
            <span className="detail selected">Rebate</span>
            <span className="detail selected">Money Factor</span>
            <span className="detail selected">Residual</span>
            <span className="detail selected">Mileage</span>
          </section>
          <section className="row">
            <span className="detail">{quote.year}</span>
            <span className="detail">{quote.make}</span>
            <span className="detail">{quote.model}</span>
            <span className="detail">{quote.trim}</span>
            <span className="detail">{quote.msrp}</span>
            <span className="detail">{quote.sell_price}</span>
            <span className="detail"> <TermsIndex /> </span>
            <span className="detail"><RebatesIndex /></span>
            <span className="detail">%<MoneyFactorsIndex /></span>
            <span className="detail">%<ResidualsIndex /></span>
            <span className="detail"><MileagesIndex /></span>
          </section>
        </section>
      </div>
    )
  }

}


export default QuoteExpanded;
