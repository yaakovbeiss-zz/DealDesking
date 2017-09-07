import { connect } from 'react-redux';
import TrimsIndex from './trims_index';

const mapStateToProps = ({ quote }) => {
  return {
    currentQuote: quote.currentQuote,
  }
}

export default connect(
  mapStateToProps,
  null
)(TrimsIndex)
