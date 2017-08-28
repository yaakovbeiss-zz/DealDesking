import { connect } from 'react-redux';
import SortBar from './sortbar';
import { sortLeads } from '../../actions/lead_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    sortLeads: (payload) => dispatch(sortLeads(payload))
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(SortBar);
