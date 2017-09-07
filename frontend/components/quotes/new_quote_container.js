import { connect } from 'react-redux';
import NewQuote from './new_quote';
import { createQuote } from '../../actions/quote_actions';

const mapStateToProps = ({ quote }) => {
  return {
    currentQuote: quote.currentQuote,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createQuote: (quote) => dispatch(createQuote(quote)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewQuote);
