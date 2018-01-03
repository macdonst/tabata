import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const style = {
  margin: 20
};

class CreateTabata extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  saveTabata() {
    console.log('save tabata');
    const tabata = {
      name: this.workoutName.input.value,
      warmupTime: this.warmupTime.input.value,
      workoutTime: this.workoutTime.input.value,
      restTime: this.restTime.input.value,
      breakTime: this.breakTime.input.value,
      cooldownTime: this.cooldownTime.input.value,
      reps: this.reps.input.value,
      sets: this.sets.input.value
    };
    this.props.addTabata(tabata);
    this.context.router.history.goBack();
  }

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
            iconElementRight={
              <FlatButton label="Save" onClick={e => this.saveTabata(e)} />
            }
          />
          <Paper style={style} zDepth={1}>
            <div style={style}>
              <TextField
                floatingLabelText="Workout Name"
                floatingLabelFixed={true}
                ref={input => {
                  this.workoutName = input;
                }}
              />
              <TextField
                floatingLabelText="Warm Up"
                floatingLabelFixed={true}
                ref={input => {
                  this.warmupTime = input;
                }}
              />
              <TextField
                floatingLabelText="Work Out"
                floatingLabelFixed={true}
                ref={input => {
                  this.workoutTime = input;
                }}
              />
              <TextField
                floatingLabelText="Rest"
                floatingLabelFixed={true}
                ref={input => {
                  this.restTime = input;
                }}
              />
              <TextField
                floatingLabelText="Break"
                floatingLabelFixed={true}
                ref={input => {
                  this.breakTime = input;
                }}
              />
              <TextField
                floatingLabelText="Cool Down"
                floatingLabelFixed={true}
                ref={input => {
                  this.cooldownTime = input;
                }}
              />
              <TextField
                floatingLabelText="Reps"
                floatingLabelFixed={true}
                ref={input => {
                  this.reps = input;
                }}
              />
              <TextField
                floatingLabelText="Sets"
                floatingLabelFixed={true}
                ref={input => {
                  this.sets = input;
                }}
              />
            </div>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default CreateTabata;
