import { connect } from 'react-redux';
import RebatesIndex from './rebates_index';
import { receiveRebate, receiveRebates } from '../../actions/rebate_actions';

const mapStateToProps = ({ rebate }) => {
  return {
    rebates: rebate.entities,
    currentRebate: rebate.currentRebate,
  }
}

export default connect(
  mapStateToProps,
  null
)(RebatesIndex)
