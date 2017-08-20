import React from 'react';
import Lead from './lead';
import Logout from '../login/logout';

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
          <Logout />
          <ul>
            {leads.map( (lead) => <Lead key={lead.email} name={lead.name} email={lead.email}
            phoneNumber={lead.phone_number} address={lead.address} userId={lead.user_id} />
              )}
          </ul>
        </div>
      )
    } else { return null }
      }

  }

export default LeadsIndex;
