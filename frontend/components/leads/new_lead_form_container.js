import { connect } from 'react-redux';
import NewLeadForm from './new_lead_form';
import { createLead, updateLead } from '../../actions/lead_actions';

const mapDispatchToProps =  dispatch => {
  return {
    createLead: (lead) => dispatch(createLead(lead)),
    updateLead: (lead) => dispatch(updateLead(lead))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(NewLeadForm)
