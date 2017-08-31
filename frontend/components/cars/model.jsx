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
      <div>
        <button onClick={this.toggleTrims}>{name}</button>
        {this.trims()}
      </div>
    )
  }
}

export default Model;
