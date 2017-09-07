import React from 'react';
import TrimsIndex from '../cars/trims_index';

class Model extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hideTrims: true
    }
    this.toggleTrims = this.toggleTrims.bind(this)
  }

  toggleTrims(e) {
    e.stopPropagation();
    const quote = {model: this.props.name, model_id: this.props.id}
    this.props.receiveQuote(quote);
    this.setState({ hideTrims: !this.state.hideTrims })
  };

  trims() {
    const trims = this.props.trims;
    return this.state.hideTrims ? <div></div> :
    <TrimsIndex trims={trims} />
  }

  render() {
    const name = this.props.name;

    return (
      <model onClick={this.toggleTrims} className="model">
        <span>{name}</span>
        {this.trims()}
      </model>
    )
  }
}

export default Model;
