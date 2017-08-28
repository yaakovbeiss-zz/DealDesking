import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    return e => {
      this.setState({ query: e.currentTarget.value });
      this.props.fetchSearch(e.currentTarget.value);
    }
  }

  render() {
    return (
      <div>
        search bar
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            value={this.state.query}
            onChange={this.handleChange()}
            />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default SearchBar;
