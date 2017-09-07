import React from 'react';

class Trim extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const quote = {trim: this.props.name}
    this.props.receiveQuote(quote);
  }

  render() {
    const name = this.props.name;
    return (
      <trim onClick={this.handleClick} className="car trim">
        <span>{name}</span>
      </trim>
    )
  }
}

export default Trim;
