import { connect } from 'react-redux';
import Calculator from './calculator';
import { receiveQuote, createQuote } from '../../actions/quote_actions';

const mapStateToProps = ({ quote }) => {
  return {
    currentQuote: quote.currentQuote,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    receiveQuote: (quote) => dispatch(receiveQuote(quote)),
    createQuote: (quote) => dispatch(createQuote(quote)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator)
