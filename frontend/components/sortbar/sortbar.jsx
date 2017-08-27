import React from 'react';

class SortBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.sortLeads();
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
