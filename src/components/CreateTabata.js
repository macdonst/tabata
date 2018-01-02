import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { List } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const style = {
  margin: 20
};

class CreateTabata extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Create Tabata"
            iconElementLeft={
              <IconButton onClick={this.context.router.history.goBack}>
                <NavigationArrowBack />
              </IconButton>
            }
            iconElementRight={<FlatButton label="Save" />}
          />
          <Paper style={style} zDepth={1}>
            <div style={style}>
              <TextField
                floatingLabelText="Workout Name"
                floatingLabelFixed={true}
              />
              <TextField
                floatingLabelText="Warm Up"
                floatingLabelFixed={true}
              />
              <TextField
                floatingLabelText="Work Out"
                floatingLabelFixed={true}
              />
              <TextField floatingLabelText="Relax" floatingLabelFixed={true} />
              <TextField floatingLabelText="Break" floatingLabelFixed={true} />
              <TextField
                floatingLabelText="Cool Down"
                floatingLabelFixed={true}
              />
              <TextField floatingLabelText="Reps" floatingLabelFixed={true} />
              <TextField floatingLabelText="Sets" floatingLabelFixed={true} />
            </div>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default CreateTabata;
