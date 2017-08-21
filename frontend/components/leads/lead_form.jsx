import React from 'react';

class LeadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone_number: '',
      address: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const lead = this.state;
    this.props.createLead(lead);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name
            <input type="text"
              value={this.state.name}
              onChange={this.update('name')}/>
          </label>
          <label>Email
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}/>
          </label>
          <label>Phone Number
            <input type="text"
              value={this.state.phone_number}
              onChange={this.update('phone_number')}/>
          </label>
          <label>Address
            <input type="text"
              value={this.state.address}
              onChange={this.update('address')}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default LeadForm;
