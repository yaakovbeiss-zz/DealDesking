import { connect } from 'react-redux';
import ResidualsIndex from './residuals_index';
import { receiveResidual, receiveResiduals } from '../../actions/residual_actions';

const mapStateToProps = ({ residual }) => {
  return {
    residuals: residual.entities,
    currentResidual: residual.currentResidual,
  }
}

export default connect(
  mapStateToProps,
  null
)(ResidualsIndex)
