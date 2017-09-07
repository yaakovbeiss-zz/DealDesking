import React from 'react';
import ModelsIndex from '../cars/models_index';

class Make extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: this.props.selected,
      hideModels: true
    }
    this.toggleModels = this.toggleModels.bind(this);
  }

  toggleModels(e) {
    this.props.toggleParentClass(e);
    this.props.receiveQuote({make: this.props.name, year: this.props.year, make_id: this.props.id});
    this.setState({ hideModels: !this.state.hideModels })
  }

  models() {
    return this.state.hideModels ? <div></div> :
    <ModelsIndex models={this.props.models} />
  }

  render() {
    return (
      <make onClick={this.toggleModels} className="make">
          <span >{this.props.name} {this.props.year}</span>
          {this.models()}
      </make>
    )
  };
}

export default Make;
