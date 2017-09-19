import { connect } from 'react-redux';
import QuoteExpanded from './quote_expanded';
import { createQuote, receiveQuote } from '../../actions/quote_actions';
import { receiveTerm, receiveTerms } from '../../actions/term_actions';
import { receiveMoneyFactor, receiveMoneyFactors } from '../../actions/money_factor_actions';
import { receiveRebate, receiveRebates } from '../../actions/rebate_actions';
import { receiveResidual, receiveResiduals } from '../../actions/residual_actions';
import { receiveMileage, receiveMileages } from '../../actions/mileage_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ quote, modal, term, moneyFactor }) => {
  return {
    currentQuote: quote.currentQuote,
    openQuoteModalId: modal.id,
    term: term,
    moneyFactor: moneyFactor
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createQuote: (quote) => dispatch(createQuote(quote)),
    receiveQuote: (quote) => dispatch(receiveQuote(quote)),

    receiveTerm: (term) => dispatch(receiveTerm(term)),
    receiveTerms: (terms) => dispatch(receiveTerms(terms)),

    receiveMoneyFactor: (moneyFactor) => dispatch(receiveMoneyFactor(moneyFactor)),
    receiveMoneyFactors: (moneyFactors) => dispatch(receiveMoneyFactors(moneyFactors)),

    receiveRebate: (rebate) => dispatch(receiveRebate(rebate)),
    receiveRebates: (rebates) => dispatch(receiveRebates(rebates)),

    receiveResidual: (residual) => dispatch(receiveResidual(residual)),
    receiveResiduals: (residuals) => dispatch(receiveResiduals(residuals)),

    receiveMileage: (mileage) => dispatch(receiveMileage(mileage)),
    receiveMileages: (mileages) => dispatch(receiveMileages(mileages)),
    
    openModal: (id) => dispatch(openModal(id)),
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteExpanded);
