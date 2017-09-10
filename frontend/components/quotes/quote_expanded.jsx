import React from 'react';
import Calculator from '../calculator/calculator';

class QuoteExpanded extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
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
            <span className="detail selected">Residual</span>
            <span className="detail selected">Term</span>
            <span className="detail selected">Rebate</span>
            <span className="detail selected">Money Factor</span>
            <span className="detail selected">Residual</span>
          </section>
          <section className="row">
            <span className="detail selected">{quote.year}</span>
            <span className="detail selected">{quote.make}</span>
            <span className="detail selected">{quote.model}</span>
            <span className="detail selected">{quote.trim}</span>
            <span className="detail selected">{quote.msrp}</span>
            <span className="detail selected">{quote.sell_price}</span>
            <span className="detail selected">{quote.residual}</span>
            <span className="detail selected">{quote.months}</span>
            <span className="detail selected">{quote.rebate}</span>
            <span className="detail selected">%{quote.money_factor}</span>
            <span className="detail selected">%{quote.residual}</span>
          </section>
        </section>
      </div>
    )
  }

}


export default QuoteExpanded;
