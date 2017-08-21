import { connect } from 'react-redux';
import Lead from './lead';
import { destroyLead } from '../../actions/lead_actions';

const mapDispatchToProps = dispatch => {
  return {
    destroyLead: (id) => dispatch(destroyLead(id))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Lead)
