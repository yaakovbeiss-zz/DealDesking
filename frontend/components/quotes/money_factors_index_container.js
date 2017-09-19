import { connect } from 'react-redux';
import MoneyFactorsIndex from './money_factors_index';
import { receiveMoneyFactor, receiveMoneyFactors } from '../../actions/money_factor_actions';

const mapStateToProps = ({ moneyFactor }) => {
  return {
    moneyFactors: moneyFactor.entities,
    currentMoneyFactor: moneyFactor.currentMoneyFactor,
  }
}

export default connect(
  mapStateToProps,
  null
)(MoneyFactorsIndex)
