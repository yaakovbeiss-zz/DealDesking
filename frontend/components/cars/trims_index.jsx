import React from 'react';
import Trim from './trim_container';

class TrimsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const trims = this.props.trims;
    return (
      <trims className="container detail-list"><span>Trims</span>
        {trims.map((trim) => <Trim name={trim.name} id={trim.id} key={trim.id} /> ) }
      </trims>
    )
  }
}

export default TrimsIndex;
