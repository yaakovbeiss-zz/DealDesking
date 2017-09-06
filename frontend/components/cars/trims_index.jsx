import React from 'react';
import Trim from './trim';

class TrimsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const trims = this.props.trims;
    return (
      <trims className="container trim">
        {trims.map((trim) => <Trim name={trim.name} key={trim.id} /> ) }
      </trims>
    )
  }
}

export default TrimsIndex;
