import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import logo from './logo.svg';
import './App.css';

const style = {};

class App extends Component {
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

export default App;
