import React from 'react';
import ModelsIndex from '../cars/models_index';

class Make extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: this.props.selected,
      hideModels: true
    }
    this.toggleModels = this.toggleModels.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass(e) {
    return this.state.hideModels ?  'make' : 'make expanded'
  }

  toggleModels(e) {
    this.props.toggleParentClass(e);
    this.setState({ selected: !this.state.selected,
      hideModels: !this.state.hideModels })
  }

  models() {
    return this.state.hideModels ? <div></div> :
    <ModelsIndex models={this.props.models} />
  }

  render() {
    return (
      <make onClick={this.toggleModels} className={this.toggleClass()}>
        <span >{this.props.name} {this.props.year}</span>
        {this.models()}
      </make>
    )
  };
}

export default Make;
