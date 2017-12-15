import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {};

class Main extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar title="Tabata" />
        <FloatingActionButton secondary={true} style={style}>
          <ContentAdd />
        </FloatingActionButton>
      </MuiThemeProvider>
    );
  }
}

export default Main;
