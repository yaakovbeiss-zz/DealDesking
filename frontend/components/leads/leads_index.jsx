import React from 'react';
import Lead from './lead_container';
import Header from '../header/header';
import Calculator from '../calculator/calculator';
import SortBar from '../sortbar/sortbar_container';
import NewLeadForm from './new_lead_form_container';
import SearchBar from '../searchbar/search_bar_container';

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
     return this.state.hideLeadForm ?  <div></div> : <NewLeadForm toggleLeadForm={this.toggleLeadForm} props={null}/>
  }

  render() {
    const leads = this.props.leads;

      return (
        <div>
          <section className="leads-index-container">
            <h2>Leads</h2>
            <SearchBar />
            <SortBar />
            <button onClick={this.toggleLeadForm}>New Lead</button>
            {this.leadForm()}
            <ul>
              {leads.map((lead) => <Lead key={lead.id} id={lead.id} name={lead.name} email={lead.email}
              phoneNumber={lead.phone_number} address={lead.address} userId={lead.user_id} createdAt={lead.created_at}/>
                )}
            </ul>
          </section>
        </div>
      )
    }
  }

export default LeadsIndex;
