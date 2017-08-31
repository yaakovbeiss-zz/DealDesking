import React from 'react';
import ModelsIndex from '../cars/models_index';

class Make extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hideModels: true
    }
    this.toggleModels = this.toggleModels.bind(this);
  }

  toggleModels() {
    this.setState({ hideModels: !this.state.hideModels })
  }

  models() {
    return this.state.hideModels ? <div></div> :
    <ModelsIndex models={this.props.models} />
  }

  render() {
    return (
      <make className="make">
        <span onClick={this.toggleModels}>{this.props.name} {this.props.year}</span>
        {this.models()}
      </make>
    )
  };
}

export default Make;
