import { connect } from 'react-redux';
import LeadForm from './lead_form';
import { createLead } from '../../actions/lead_actions';

const mapDispatchToProps =  dispatch => {
  return {
    createLead: (lead) => dispatch(createLead(lead))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(LeadForm)
