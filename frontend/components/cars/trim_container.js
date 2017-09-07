import { connect } from 'react-redux';
import Trim from './trim';
import { receiveQuote } from '../../actions/quote_actions';

const mapDispatchToProps = dispatch => {
  return {
    receiveQuote: (quote) => dispatch(receiveQuote(quote))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Trim)
