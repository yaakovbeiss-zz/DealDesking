import React from 'react';

class Lead extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const id = this.props.id;
    this.props.destroyLead(id);
  }

  render() {

    return (
      <div className="lead-container">
        <p>
          <div>Name: {this.props.name} </div><br/>
          <div>Email: {this.props.email} </div><br/>
          <div>Phone: {this.props.phoneNumber} </div><br/>
          <div>Address: {this.props.address} </div><br/>
        </p>
      <button  className="delete-lead-button" onClick={this.handleClick}>Delete</button>
      </div>
    )
  }
}
export default Lead;
