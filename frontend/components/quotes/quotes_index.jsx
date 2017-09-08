import React from 'react';
import Quote from './quote';
import NewQuote from './new_quote_container';

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
      <quotes className="quotes-container">
        <ul>
          {quotes.map((quote) => <Quote key={quote.id} quote={quote} />)}
        </ul >
      </quotes>
    )
  }
}

export default QuotesIndex;
