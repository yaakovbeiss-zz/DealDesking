import React from 'react';
import Calculator from '../calculator/calculator';

class QuoteExpanded extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();
    this.props.closeModal();
  }

  render() {
    return (
      <div onClick={this.handleClick} className="modal-container">
        <div className="modal quote-expanded">
          quote expanded
          <Calculator />
        </div>
      </div>
    )
  }

}


export default QuoteExpanded;
