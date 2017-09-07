import React from 'react';
import Model from './model';

class ModelsIndex extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    const models = this.props.models;
    return (
      <models className="container models"><span>Models</span>
        {models.map((model) => <Model name={model.name} trims={model.trims} selected={false} key={model.id} /> ) }
      </models>
    )
  }

}

export default ModelsIndex;
