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
      <makes className="container makes">
        {makes.map((make) => <Make name={make.name} year={make.year} models={make.models} key={make.id}/>)}
      </makes>
    )
  }
}

export default MakesIndex;
