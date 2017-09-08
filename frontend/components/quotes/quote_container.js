import { connect } from 'react-redux';
import Quote from './quote';
import { createQuote, receiveQuote } from '../../actions/quote_actions';
import { openModal } from '../../actions/modal_actions';

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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quote);
