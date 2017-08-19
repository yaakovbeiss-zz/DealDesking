import React from 'react';
import Lead from './lead';

class LeadsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestLeads();
  }

  render() {
    const leads = this.props.leads;

    return (
      <ul>
        {leads.map( (lead) => <Lead key={lead.id} name={lead.name} email={lead.email}
          phoneNumber={lead.phone_number} address={lead.address} userId={lead.user_id} />
          )}
      </ul>
    )
  }
}

export default LeadsIndex;
