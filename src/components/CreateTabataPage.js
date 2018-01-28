import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import NumberSelectField from './NumberSelectField';

const style = {
  margin: 20
};

class CreateTabataPage extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  saveTabata() {
    console.log('save tabata');
    console.log(this.warmupTime);
    const tabata = {
      name: this.workoutName.input.value,
      warmupTime: this.warmupTime.state.value,
      workoutTime: this.workoutTime.state.value,
      restTime: this.restTime.state.value,
      breakTime: this.breakTime.state.value,
      cooldownTime: this.cooldownTime.state.value,
      reps: this.reps.input.value,
      sets: this.sets.input.value
    };
    this.props.addTabata(tabata);
    this.context.router.history.goBack();
  }

  render() {
    return (
      <React.Fragment>
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
            <NumberSelectField
              floatingLabelText="Warm Up"
              floatingLabelFixed={true}
              ref={input => {
                this.warmupTime = input;
              }}
            />
            <NumberSelectField
              floatingLabelText="Work Out"
              floatingLabelFixed={true}
              ref={input => {
                this.workoutTime = input;
              }}
            />
            <NumberSelectField
              floatingLabelText="Rest"
              floatingLabelFixed={true}
              ref={input => {
                this.restTime = input;
              }}
            />
            <NumberSelectField
              floatingLabelText="Break"
              floatingLabelFixed={true}
              ref={input => {
                this.breakTime = input;
              }}
            />
            <NumberSelectField
              floatingLabelText="Cool Down"
              floatingLabelFixed={true}
              ref={input => {
                this.cooldownTime = input;
              }}
            />
            <TextField
              floatingLabelText="Rounds"
              floatingLabelFixed={true}
              ref={input => {
                this.reps = input;
              }}
              type="number"
            />
            <TextField
              floatingLabelText="Sets"
              floatingLabelFixed={true}
              ref={input => {
                this.sets = input;
              }}
              type="number"
            />
          </div>
        </Paper>
      </React.Fragment>
    );
  }
}

export default CreateTabataPage;
