import React from 'react';
import Quote from './quote';

class QuotesIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.requestQuotes();
  }

  render() {
    const quotes = this.props.quotes
    return (
      <div>
        <ul>
          {quotes.map((quote) => <Quote quote={quote} />)}
        </ul>
      </div>
    )
  }
}

export default QuotesIndex;
