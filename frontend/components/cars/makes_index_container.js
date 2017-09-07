import { connect } from 'react-redux';
import MakesIndex from './makes_index';
import { requestMakes } from '../../actions/make_actions';

const mapStateToProps = ({ car, quote }) => {
  return {
    makes: car.makes,
    currentQuote: quote.currentQuote,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestMakes: () => dispatch(requestMakes()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MakesIndex)
