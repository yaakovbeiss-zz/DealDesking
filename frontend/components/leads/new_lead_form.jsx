import React from 'react';

class NewLeadForm extends React.Component {
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
    this.props.toggleLeadForm();
  }

  render() {
    return (
      <div className="lead-container" onClick={this.props.toggleUpdateForm}>
        <form className="lead-info" onSubmit={this.handleSubmit}>
          <label>
            <input type="text"
              value={this.state.name}
              placeholder={this.state.name}
              onChange={this.update('name')}/>
          </label>
          <label>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}/>
          </label>
          <label>
            <input type="text"
              value={this.state.phone_number}
              onChange={this.update('phone_number')}/>
          </label>
          <label>
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

export default NewLeadForm;
