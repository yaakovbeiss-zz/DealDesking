import React from 'react';
import Make from './make';

class MakesIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestMakes();
  }

  render() {
    const makes = this.props.makes;
    return (
      <div>
        {makes.map((make) => <Make name={make.name} models={make.models} key={make.id}/>)}
      </div>
    )
  }
}

export default MakesIndex;
