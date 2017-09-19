import React from 'react';
import TermsIndex from './terms_index';
import Calculator from '../calculator/calculator';

class QuoteExpanded extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
  }

  componentDidMount() {
    this.props.receiveQuote(this.props.quote);
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
            <span className="detail selected">Residual</span>
            <span className="detail selected">Term</span>
            <span className="detail selected">Rebate</span>
            <span className="detail selected">Money Factor</span>
            <span className="detail selected">Residual</span>
          </section>
          <section className="row">
            <span className="detail">{quote.year}</span>
            <span className="detail">{quote.make}</span>
            <span className="detail">{quote.model}</span>
            <span className="detail">{quote.trim}</span>
            <span className="detail">{quote.msrp}</span>
            <span className="detail">{quote.sell_price}</span>
            <span className="detail">{quote.residual}</span>
            <span className="detail"> <TermsIndex terms={terms}/> </span>
            <span className="detail">{quote.rebate}</span>
            <span className="detail">%{quote.money_factor}</span>
            <span className="detail">%{quote.residual}</span>
          </section>
        </section>
      </div>
    )
  }

}


export default QuoteExpanded;
