import { connect } from 'react-redux';
import ModelsIndex from './models_index';

const mapStateToProps = ({ quote }) => {
  return {
    currentQuote: quote.currentQuote,
  }
}

export default connect(
  mapStateToProps,
  null
)(ModelsIndex)
