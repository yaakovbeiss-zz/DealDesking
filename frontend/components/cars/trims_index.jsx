import React from 'react';
import Trim from './trim_container';

class TrimsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  className(id) {
    if (this.props.currentQuote.trim_id) {
      if (this.props.currentQuote.trim_id === id) {
        return "detail selected"
      } else {
        return "detail opaque";
      }
    } else {
      return "detail"
    }
  }

  render() {
    const trims = this.props.trims;
    return (
      <trims className="container detail-list"><span>Trims</span>
        {trims.map((trim) => <Trim name={trim.name} id={trim.id} key={trim.id} className={this.className(trim.id)} /> ) }
      </trims>
    )
  }
}

export default TrimsIndex;
