import React from 'react';
import Lead from './lead_container';
import Header from '../header/header';
import Calculator from '../calculator/calculator';
import LeadForm from './lead_form_container';

class LeadsIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hideLeadForm: true
    }
    this.toggleLeadForm = this.toggleLeadForm.bind(this)
  }

  componentDidMount() {
      this.props.requestLeads();
  }

  toggleLeadForm() {
    this.setState({ hideLeadForm: !this.state.hideLeadForm})
  }

  leadForm() {
     return this.state.hideLeadForm ?  <div></div> : <LeadForm toggleLeadForm={this.toggleLeadForm}/>
  }

  render() {
    const leads = this.props.leads;

    if (leads) {
      return (
        <div>
          <Header />
          <section className="leads-index-container">
            <Calculator />
            <h2>Leads</h2>
            <button onClick={this.toggleLeadForm}>New Lead</button>
            {this.leadForm()}
            <ul>
              {leads.map( (lead) => <Lead key={lead.id} id={lead.id} name={lead.name} email={lead.email}
              phoneNumber={lead.phone_number} address={lead.address} userId={lead.user_id} createdAt={lead.created_at}/>
                )}
            </ul>
          </section>
        </div>
      )
    } else { return null }
      }

  }

export default LeadsIndex;
