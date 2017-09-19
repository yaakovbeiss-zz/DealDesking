import { connect } from 'react-redux';
import TermsIndex from './terms_index';
import { receiveMoneyFactor, receiveMoneyFactors } from '../../actions/money_factor_actions';
import { receiveTerm, receiveTerms } from '../../actions/term_actions';

const mapStateToProps = ({ term }) => {
  return {
    terms: term.entities,
    currentTerm: term.currentTerm,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    receiveMoneyFactor: (moneyFactor) => dispatch(receiveMoneyFactor(moneyFactor)),
    receiveMoneyFactors: (moneyFactors) => dispatch(receiveMoneyFactor(moneyFactors)),
    receiveTerm: (term) => dispatch(receiveTerm(term)),
    receiveTerms: (terms) => dispatch(receiveTerms(terms)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TermsIndex)
