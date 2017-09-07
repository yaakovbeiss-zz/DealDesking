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
      <div>
        <NewQuote />
        <ul>
          {quotes.map((quote) => <Quote quote={quote} />)}
        </ul >
      </div>
    )
  }
}

export default QuotesIndex;
