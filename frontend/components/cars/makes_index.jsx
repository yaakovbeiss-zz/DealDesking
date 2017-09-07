import React from 'react';
import Make from './make_container';

class MakesIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestMakes();
  }

  className(make_id) {
    if (this.props.currentQuote.make_id) {
      if (this.props.currentQuote.make_id === make_id) {
        return "detail"
      } else {
        return "detail opaque";
      }
    } else {
      return "detail"
    }
  }

  render() {
    const makes = this.props.makes;
    return (
      <section>
        <makes className="container detail-list makes"><span>Makes</span>
          {makes.map((make) => <Make name={make.name} year={make.year} models={make.models}
            id={make.id} key={make.id} className={this.className(make.id)} />)}
        </makes>
      </section>
    )
  }
}

export default MakesIndex;
