import React from 'react';
import Quote from './quote';
import Calculator '../calculator/calculator';

class QuotesIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.requestQuotes();
  }

  render() {
    const quotes = [];
    return (
      <div>
        <Calculator />
        <ul>
          {quotes.map((quote) => <Quote quote={quote} />)}
        </ul>
      </div>
    )
  }
}

export default QuotesIndex;
