import React from 'react';
import ModelsIndex from '../cars/models_index';

class Make extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.name}
        <ModelsIndex models={this.props.models} />
      </div>
    )
  };
}

export default Make;
