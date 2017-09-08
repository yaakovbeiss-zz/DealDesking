import { connect } from 'react-redux';
import QuoteExpanded from './quote_expanded';
import { createQuote, receiveQuote } from '../../actions/quote_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ quote, modal }) => {
  return {
    currentQuote: quote.currentQuote,
    openQuoteModalId: modal.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createQuote: (quote) => dispatch(createQuote(quote)),
    receiveQuote: (quote) => dispatch(receiveQuote(quote)),
    openModal: (id) => dispatch(openModal(id)),
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteExpanded);
