import React from 'react';
import Model from './model';

class ModelsIndex extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    const models = this.props.models;
    return (
      <models className="container model">
        {models.map((model) => <Model name={model.name} trims={model.trims} key={model.id} /> ) }
      </models>
    )
  }

}

export default ModelsIndex;
