import { connect } from 'react-redux';
import MileagesIndex from './mileages_index';
import { receiveMileage, receiveMileages } from '../../actions/mileage_actions';

const mapStateToProps = ({ mileage }) => {
  return {
    mileages: mileage.entities,
    currentMileage: mileage.currentMileage,
  }
}

export default connect(
  mapStateToProps,
  null
)(MileagesIndex)
