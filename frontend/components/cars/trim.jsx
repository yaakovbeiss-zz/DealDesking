import React from 'react';

class Trim extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const name = this.props.name;
    return (
      <div>
        {name}
      </div>
    )
  }
}

export default Trim;
