import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import NotFound from './components/NotFound';

import logo from './logo.svg';
import './App.css';

const style = {};

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="catch-of-the-day">
        <Switch>
          <Route exactly pattern="/" component={Main} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
