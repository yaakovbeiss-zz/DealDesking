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
          <span className="detail selected">{quote.year}</span>
          <span className="detail selected">{quote.make}</span>
          <span className="detail selected">{quote.model}</span>
          <span className="detail selected">{quote.trim}</span>
          <span className="detail selected">{quote.msrp}</span>
          <span className="detail selected">{quote.sell_price}</span>
          <span className="detail selected">{quote.residual}</span>
          <span className="detail selected"></span>
          <span className="detail selected"></span>
        </section>
      </div>
    )
  }

}


export default QuoteExpanded;
