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
      <div>
        Name: {this.props.name} <br/>
        Email: {this.props.email} <br/>
        Phone: {this.props.phoneNumber} <br/>
        Address: {this.props.address} <br/>
        <button onClick={this.handleClick}></button>
      </div>
    )
  }
}
export default Lead;
