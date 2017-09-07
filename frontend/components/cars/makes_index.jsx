import React from 'react';
import Make from './make';

class MakesIndex extends React.Component {
  constructor(props){
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
  }

  componentDidMount() {
    this.props.requestMakes();
  }

  toggleClass(e) {
    $(e.currentTarget).siblings('make')[0].className.includes("opaque") ?
    $(e.currentTarget).siblings('.make').removeClass('opaque') :
    $(e.currentTarget).siblings('.make').addClass("opaque");
  }

  render() {
    const makes = this.props.makes;
    return (
      <section>
        <makes className="container makes"><span>Makes</span>
          {makes.map((make) => <Make name={make.name} year={make.year} models={make.models}
            selected={false} toggleParentClass={this.toggleClass} key={make.id}/>)}
        </makes>
      </section>
    )
  }
}

export default MakesIndex;
