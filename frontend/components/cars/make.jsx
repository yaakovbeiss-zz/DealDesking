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
      <div>
        <button onClick={this.toggleModels}>{this.props.name}</button>
        {this.models()}
      </div>
    )
  };
}

export default Make;
