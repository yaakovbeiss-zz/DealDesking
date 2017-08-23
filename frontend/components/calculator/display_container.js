import { connect } from 'react-redux';
import Display from './display';
import { createQuote } from '../../actions/quote_actions';

const mapDispatchToProps = dispatch => {
  return {
    createQuote: (quote) => dispatch(createQuote(quote))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Display)
