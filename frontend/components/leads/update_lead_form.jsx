import React from 'react';

class UpdateLeadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      name: this.props.name,
      email: this.props.email,
      phone_number: this.props.phone_number,
      address: this.props.address,
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

    this.props.updateLead(lead)
    this.props.toggleLeadForm();
  }

  render() {
    return (
      <div className="lead-container" onClick={this.props.toggleUpdateForm}>
        <form className="lead-info" onSubmit={this.handleSubmit}>
          <label>
            <input type="text"
              value={this.state.name}
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
          <div>{this.props.createdAt} </div><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default UpdateLeadForm;
