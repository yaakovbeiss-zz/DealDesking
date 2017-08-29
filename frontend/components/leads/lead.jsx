import React from 'react';
import Calculator from '../calculator/calculator';
import UpdateLeadForm from './update_lead_form_container';

class Lead extends React.Component {
  constructor(props) {
    super(props);``
    this.state = {
      hideCalc: true,
      hideUpdateForm: true
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.toggleCalc = this.toggleCalc.bind(this)
    this.toggleUpdateForm = this.toggleUpdateForm.bind(this)
  }

  handleDelete() {
    if (window.confirm("Are you sure you want to delete this lead?")) {
      const id = this.props.id;
      this.props.destroyLead(id);
    }
  }

  toggleUpdateForm() {
    this.setState({ hideUpdateForm: !this.state.hideUpdateForm })
  }

  toggleCalc() {
    this.setState({ hideCalc: !this.state.hideCalc })
  }

  calculator() {
    return this.state.hideCalc ? <div></div> :
    <Calculator />
  }

  render() {
    if (this.state.hideUpdateForm){
      return (
        <div className="lead-container" onClick={this.toggleCalc}>
          <section  className="lead-info">
            <div onClick={this.toggleUpdateForm}>{this.props.name} </div><br/>
            <div onClick={this.toggleUpdateForm}>{this.props.email} </div><br/>
            <div onClick={this.toggleUpdateForm}>{this.props.phoneNumber} </div><br/>
            <div>{this.props.createdAt} </div><br/>
          </section>
          <section className="icon-container">
            <img className="lead-icon" src={window.images.edit_icon} onClick={this.toggleUpdateForm} />
            <img className="lead-icon" src={window.images.delete_icon} onClick={this.handleDelete} />
          </section>
        </div>
      )
    } else {
      return (
        <UpdateLeadForm id={this.props.id} toggleLeadForm={this.toggleUpdateForm}
          name={this.props.name} email={this.props.email} phone_number={this.props.phoneNumber}
          createdAt={this.props.createdAt}
          />
      )
    }
  }
}
export default Lead;
