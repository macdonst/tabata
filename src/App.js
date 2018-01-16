import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import NotFound from './components/NotFound';
import CreateTabataPage from './components/CreateTabataPage';
import TabataPage from './components/TabataPage';

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
    delete tabatas[key];
    this.setState({ tabatas: tabatas });
  }

  getTabata(key) {
    const tabatas = { ...this.state.tabatas };
    return tabatas[key];
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <MainPage tabatas={this.state.tabatas} />}
          />
          <Route
            path="/create"
            render={() => <CreateTabataPage addTabata={this.addTabata} />}
          />
          <Route
            path="/tabata/:id"
            render={props => {
              const tabata = this.getTabata(props.match.params.id);
              return (
                <TabataPage
                  tabata={tabata}
                  removeTabata={this.removeTabata}
                  updateTabata={this.updateTabata}
                  {...props}
                />
              );
            }}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
