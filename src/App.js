import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import NotFound from './components/NotFound';
import CreateTabata from './components/CreateTabata';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="catch-of-the-day">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/create" component={CreateTabata} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
