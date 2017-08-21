import React from 'react';
import Lead from './lead_container';
import Header from '../header/header';
import Calculator from '../calculator/calculator';
import LeadForm from './lead_form_container';

class LeadsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
      this.props.requestLeads();
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
            <ul>
              {leads.map( (lead) => <Lead key={lead.id} id={lead.id} name={lead.name} email={lead.email}
              phoneNumber={lead.phone_number} address={lead.address} userId={lead.user_id} />
                )}
            </ul>
            <LeadForm />
          </section>
        </div>
      )
    } else { return null }
      }

  }

export default LeadsIndex;
