import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LeadsIndex from './leads_index';
import { requestLeads } from '../../actions/lead_actions';
import { selectLeads } from '../../reducers/selectors';

const mapStateToProps = ({ lead, session }) => {
  return {
    leads: selectLeads(lead),
    loggedIn: Boolean(session.currentUser)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestLeads: () => dispatch(requestLeads())
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LeadsIndex))
