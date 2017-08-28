import React from 'react';
import LeadsIndex from '../leads/leads_index_container';
import QuotesIndex from '../quotes/quotes_index_container';

class TabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openTab: 'LeadsIndex'
    }
    // this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(tab) {
    return e => this.setState({
      openTab: tab
    })
  }

  renderTab() {
    let openTab;
    switch (this.state.openTab) {
      case 'LeadsIndex':
        return <LeadsIndex />
        break;
      case 'QuotesIndex':
        return <QuotesIndex />
        break;
      default:
        return <LeadsIndex />
    }
  }

  render() {
    return (
      <div>
        This is the tab bar.
        <button onClick={this.toggleTab('LeadsIndex')}>Leads</button>
        <button onClick={this.toggleTab('QuotesIndex')}>Quotes</button>
        {this.renderTab()}
      </div>
    )
  }
}

export default TabBar;
