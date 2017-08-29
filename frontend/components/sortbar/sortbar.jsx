import React from 'react';

class SortBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: false,
      email: false,
      phone_number: false,
      created_at: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(field) {
    return e => {
        const payload = { field: field, reverse: !this.state[field]}
        this.props.sortLeads(payload);
        this.setState({ [field]: !this.state[field] })
    }
  }

  render() {
    return (
      <div className="lead-container sortbar">
        <section className="lead-info">
          <div onClick={this.handleClick('name')}>Name</div><br/>
          <div onClick={this.handleClick('email')}>Email</div><br/>
          <div>Phone</div><br/>
          <div onClick={this.handleClick('created_at')}>Date</div><br/>
        </section>
      </div>
    )
  }
}

export default SortBar;
