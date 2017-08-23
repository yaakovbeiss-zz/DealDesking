import React from 'react';
import Dropzone from 'react-dropzone';

class Lead extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const id = this.props.id;
    this.props.destroyLead(id);
  }

  handleDrop() {

  }

  render() {
    return (
      <div className="lead-container">
        <section className="lead-info">
          <div>{this.props.name} </div><br/>
          <div>{this.props.email} </div><br/>
          <div>{this.props.phoneNumber} </div><br/>
          <div>{this.props.createdAt} </div><br/>
        </section>
      <button  className="delete-lead-button" onClick={this.handleClick}>Delete</button>
      </div>
    )
  }
}
export default Lead;
