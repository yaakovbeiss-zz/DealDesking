import { connect } from 'react-redux';
import LeadsIndex from './leads_index';
import { requestLeads } from '../../actions/lead_actions';

const mapStateToProps = { leads } => {
  return {
    leads
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestLeads: () => dispatch(requestLeads())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeadsIndex)
