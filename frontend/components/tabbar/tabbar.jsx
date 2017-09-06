import React from 'react';
import { Route, Switch } from 'react-router-dom';

const TabBar = (...Tabs) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.buttons = this.buttons.bind(this);
      this.tabs = this.tabs.bind(this);
    }

    toggleTab(tab) {
      return e => this.props.history.push(`${tab[0].WrappedComponent.name}`)
    }

    buttons() {
      return Tabs.map((tab) => {
        return <button key={tab[1]} onClick={this.toggleTab(tab)}>{tab[1]}</button>
      })
    }

    tabs() {
      return Tabs.map((tab) => {
        return <Route key={tab[1]} exact path={'/' + tab[0].WrappedComponent.name} component={tab[0]} />
      })
    }

    render() {
      return (
        <div>
          {this.buttons()}
          <Switch>
            {this.tabs()}
            <Route component={Tabs[0][0]} />
          </Switch>
        </div>
      )
    }

  }
}

export default TabBar;
