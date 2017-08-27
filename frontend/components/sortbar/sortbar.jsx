import React from 'react';

class SortBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameSorted: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.nameSorted){
      this.props.sortLeads(true);
      this.setState({ nameSorted: false })
    } else {
      this.props.sortLeads(false);
      this.setState({ nameSorted: true })
    }
  }

  render() {
    return (
      <div className="lead-container">
        <section className="lead-info">
          <div onClick={this.handleClick}>Name</div><br/>
          <div>Email</div><br/>
          <div>Phone</div><br/>
          <div>Date</div><br/>
        </section>
      </div>
    )
  }
}

export default SortBar;
