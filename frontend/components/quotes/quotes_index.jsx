import React from 'react';
import Quote from './quote';
import Calculator from '../calculator/calculator';
import MakesIndex from '../cars/makes_index_container';

class QuotesIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.requestQuotes();
  }

  render() {
    const quotes = this.props.quotes;
    return (
      <div>
        <Calculator />
        <ul>
          {quotes.map((quote) => <Quote quote={quote} />)}
        </ul >
        <MakesIndex />
      </div>
    )
  }
}

export default QuotesIndex;
