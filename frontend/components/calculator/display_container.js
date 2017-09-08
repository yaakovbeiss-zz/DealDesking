import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Display from './display';
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Display))
