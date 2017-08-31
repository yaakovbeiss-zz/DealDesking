import React from 'react';
import Model from './model';

class ModelsIndex extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    const models = this.props.models;
    return (
      <div>
        {models.map((model) => <Model name={model.name} trims={model.trims} key={model.id} /> ) }
      </div>
    )
  }

}

export default ModelsIndex;
