import React from 'react';
import TrimsIndex from '../cars/trims_index';

class Model extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hideTrims: true
    }
    this.toggleTrims = this.toggleTrims.bind(this);
  }

  toggleTrims() {
    this.setState({ hideTrims: !this.state.hideTrims })
  }

  trims() {
    const trims = this.props.trims;
    return this.state.hideTrims ? <div></div> :
    <TrimsIndex trims={trims} />
  }

  render() {
    const name = this.props.name;

    return (
      <model className="model">
        <span onClick={this.toggleTrims}>{name}</span>
        {this.trims()}
      </model>
    )
  }
}

export default Model;
