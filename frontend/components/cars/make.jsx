import React from 'react';
import ModelsIndex from '../cars/models_index_container';

class Make extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hideModels: true
    }
    this.toggleModels = this.toggleModels.bind(this);
  }

  toggleModels(e) {
    this.setState({ hideModels: !this.state.hideModels })
    this.props.receiveQuote({make: this.props.name, year: this.props.year, make_id: this.props.id,
      model_id: null, model: '', trim_id: null, trim: '' });
  }

  models() {
    return this.props.currentQuote.make_id === this.props.id ?
    <ModelsIndex models={this.props.models} />  :
     <div></div>
  }

  render() {
    return (
      <make onClick={this.toggleModels} className={this.props.className}>
          <span >{this.props.name} {this.props.year}</span>
          {this.models()}
      </make>
    )
  };
}

export default Make;
