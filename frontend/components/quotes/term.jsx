import React from 'react';

class Term extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span className="detail">{this.props.months}</span>
      </div>
    )
  }
}

export default Term;
