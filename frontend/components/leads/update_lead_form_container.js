import { connect } from 'react-redux';
import UpdateLeadForm from './update_lead_form';
import { updateLead } from '../../actions/lead_actions';

const mapDispatchToProps =  dispatch => {
  return {
    updateLead: (lead) => dispatch(updateLead(lead))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(UpdateLeadForm)
