import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed'
};

class Tabata extends Component {
  constructor() {
    super();
  }

  render() {
    const tabata = this.props.getTabata(this.props.match.params.id);
    console.log(tabata);
    console.log(this.props.match.params.id);
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title={tabata.name} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Tabata;
