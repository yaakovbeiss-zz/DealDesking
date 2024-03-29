import React from 'react';
import TrimsIndex from '../cars/trims_index_container';

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
    const quote = {model: this.props.name, model_id: this.props.id, trim_id: null, trim: ''}
    this.props.receiveQuote(quote);
    this.setState({ hideTrims: !this.state.hideTrims })
  };

  trims() {
    const trims = this.props.trims;

    return this.props.currentQuote.model_id === this.props.id ?
    <TrimsIndex trims={trims} /> :
    <div></div>
  }

  render() {
    const name = this.props.name;

    return (
      <model onClick={this.toggleTrims} className={this.props.className}>
        <span>{name}</span>
        {this.trims()}
      </model>
    )
  }
}

export default Model;
