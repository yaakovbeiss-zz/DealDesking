import React from 'react';

class Trim extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();
    const quote = {trim: this.props.name, trim_id: this.props.id}
    this.props.receiveQuote(quote);
  }

  render() {
    const name = this.props.name;
    return (
      <trim onClick={this.handleClick} className="detail">
        <span>{name}</span>
      </trim>
    )
  }
}

export default Trim;
