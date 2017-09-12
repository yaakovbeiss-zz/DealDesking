import React from 'react';
import { withRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

const TabBar = (...Tabs) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selected: Tabs[0][1],
      }
      this.buttons = this.buttons.bind(this);
      this.tabs = this.tabs.bind(this);
    }

    toggleTab(tab) {

      return e =>  {
        this.setState({ selected: tab[1]})
        this.props.history.push(`${tab[1]}`)
      }
    }

    className(tab) {
      if (this.props.location.pathname.split("/")[1] === tab[1]) {
        return "tab-selected";
      } else {
        return "tab";
      }
    }

    buttons() {
      return Tabs.map((tab) => {
        return <border key={tab[1]} className={this.className(tab)}>
            <button key={tab[1]} onClick={this.toggleTab(tab)}>{tab[1]}</button>
          </border>
      })
    }

    tabs() {
      return Tabs.map((tab) => {
        return <Route key={tab[1]} exact path={'/' + tab[1]} component={tab[0]} />
      })
    }

    render() {
      return (
        <div>
          <tabs className="tabs">
            {this.buttons()}
            <section className="component-container">&nbsp;
            </section>
          </tabs>
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
