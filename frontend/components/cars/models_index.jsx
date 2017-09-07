import React from 'react';
import Model from './model_container';

class ModelsIndex extends React.Component {
  constructor(props){
    super(props);

  }

  className(id) {
    if (this.props.currentQuote.model_id) {
      if (this.props.currentQuote.model_id === id) {
        return "detail"
      } else {
        return "detail opaque";
      }
    } else {
      return "detail"
    }
  }

  render() {
    const models = this.props.models;
    return (
      <models className="container detail-list"><span>Models</span>
        {models.map((model) => <Model name={model.name} trims={model.trims}
        id={model.id} key={model.id} className={this.className(model.id)} /> ) }
      </models>
    )
  }

}

export default ModelsIndex;
