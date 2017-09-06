import React from 'react';
import LeadsIndex from '../leads/leads_index_container';

class SortBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: false,
      email: false,
      created_at: true,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(field) {
    const otherFields = Object.keys(this.state).filter((k) => k !== field)

    return e => {
      const payload = { field: field, reverse: !this.state[field]}
      this.props.sortLeads(payload);
      this.setState({ [field]: !this.state[field] })
      const reverse = !this.state[field];
      otherFields.forEach((field) => {
        this.setState({ [field]: !reverse})
      });
    }
  }

  sortArrow(field) {
    return this.state[field] ? window.images.down_arrow_icon :
    window.images.up_arrow_icon
  }

  render() {
    return (
      <div className="lead-container sortbar">
        <section className="lead-info">
          <div onClick={this.handleClick('name')}>Name
          <img src={this.sortArrow('name')} /></div>
          <br/>
          <div onClick={this.handleClick('email')}>Email
          <img src={this.sortArrow('email')} /></div>
          <br/>
          <div>Phone</div><br/>

          <div onClick={this.handleClick('created_at')}>Date
          <img src={this.sortArrow('created_at')} /></div>
          <br/>
        </section>
      </div>
    )
  }
}

export default SortBar;
