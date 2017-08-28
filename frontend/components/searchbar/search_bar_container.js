import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchSearch } from '../../actions/search_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearch: (query) => dispatch(fetchSearch(query)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
