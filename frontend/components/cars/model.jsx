import React from 'react';
import TrimsIndex from '../cars/trims_index';

class Model extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    const name = this.props.name;
    const trims = this.props.trims;
    return (
      <div>
        {name}
        <TrimsIndex trims={trims} />
      </div>
    )
  }
}

export default Model;
