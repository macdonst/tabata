import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed'
};

class Main extends Component {
  createTabata(event) {
    console.log(this.context);
    this.context.router.transitionTo(`/create`);
  }

  constructor() {
    super();
    this.renderFAB = this.renderFAB.bind(this);
  }

  renderFAB() {
    return (
      <Route
        render={({ history }) => (
          <FloatingActionButton secondary={true} style={style}>
            <ContentAdd
              onClick={event => {
                history.push('/create');
              }}
            />
          </FloatingActionButton>
        )}
      />
    );
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Tabata" />
          {this.renderFAB()}
        </div>
      </MuiThemeProvider>
    );
  }
}

Main.contextTypes = {
  router: PropTypes.object
};

export default Main;
