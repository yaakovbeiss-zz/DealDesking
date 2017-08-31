import React from 'react';
import Trim from './trim';

class TrimsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const trims = this.props.trims;
    return (
      <div>
        {trims.map((trim) => <Trim name={trim.name} key={trim.id} /> ) }
      </div>
    )
  }
}

export default TrimsIndex;
