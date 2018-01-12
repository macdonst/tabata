import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import NotFound from './components/NotFound';
import CreateTabata from './components/CreateTabata';
import Tabata from './components/Tabata';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    // CRUD
    this.addTabata = this.addTabata.bind(this);
    this.updateTabata = this.updateTabata.bind(this);
    this.removeTabata = this.removeTabata.bind(this);
    this.getTabata = this.getTabata.bind(this);

    this.state = {
      tabatas: {}
    };
  }

  componentWillMount() {
    const localStorageRef = JSON.parse(localStorage.getItem('tabatas'));

    if (localStorageRef) {
      this.setState({
        tabatas: localStorageRef
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('tabatas', JSON.stringify(nextState.tabatas));
  }

  addTabata(tabata) {
    console.log(`add ${tabata}`);
    const tabatas = { ...this.state.tabatas };
    const timestamp = Date.now();
    tabatas[`tabata-${timestamp}`] = tabata;
    this.setState({ tabatas: tabatas });
  }

  updateTabata(key, updatedTabata) {
    const tabatas = { ...this.state.tabatas };
    tabatas[key] = updatedTabata;
    this.setState({ tabatas: tabatas });
  }

  removeTabata(key) {
    const tabatas = { ...this.state.tabatas };
    tabatas[key] = null;
    this.setState({ tabatas: tabatas });
  }

  getTabata(key) {
    const tabatas = { ...this.state.tabatas };
    return tabatas[key];
  }

  render() {
    return (
      <BrowserRouter basename="catch-of-the-day">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Main tabatas={this.state.tabatas} />}
          />
          <Route
            path="/create"
            render={() => <CreateTabata addTabata={this.addTabata} />}
          />
          <Route
            path="/tabata/:id"
            render={props => <Tabata getTabata={this.getTabata} {...props} />}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
