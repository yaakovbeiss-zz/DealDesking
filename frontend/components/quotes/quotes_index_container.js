import { connect } from 'react-redux';
import QuotesIndex from './quotes_index';
import { requestQuotes } from '../../actions/quote_actions';

const mapDispatchToProps = dispatch => {
  return {
    requestQuotes: () => dispatch(requestQuotes()),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(QuotesIndex);
