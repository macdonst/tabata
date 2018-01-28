import React, { Component } from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 20,
  padding: 20
};

const btnStyle = {
  display: 'flex',
  flexDirection: 'row',
  flex: '1 1 auto',
  margin: '20px'
};

const divStyle = {
  textAlign: 'center',
  textTransform: 'uppercase'
};

class Tabata extends Component {
  constructor() {
    super();
    this.progress = this.progress.bind(this);
    this.togglePause = this.togglePause.bind(this);
    this.createWorkout = this.createWorkout.bind(this);
    this.state = {
      color: '#000',
      alpha: 0.9,
      paused: true,
      phase: 'warmup',
      completedSets: 0,
      completedReps: 0
    };
  }

  componentDidMount() {
    console.log(this.props.tabata);
    this.workout = this.createWorkout(this.props.tabata);
    this.setState(this.workout.shift());
  }

  createWorkout(tabata) {
    const workout = [];
    workout.push({
      color: '#800080',
      phase: 'warmup',
      seconds: tabata.warmupTime
    });
    for (let i = 0; i < tabata.sets; i++) {
      for (let j = 0; j < tabata.reps; j++) {
        workout.push({
          color: '#0f0',
          phase: 'workout',
          seconds: tabata.workoutTime + 0.0000001
        });
        workout.push({
          color: '#f00',
          phase: 'rest',
          seconds: tabata.restTime + 0.0000002
        });
      }
      workout.push({
        color: '#00f',
        phase: 'break',
        seconds: tabata.breakTime + 0.0000003
      });
    }
    workout.push({
      color: '#800080',
      phase: 'cooldown',
      seconds: tabata.cooldownTime + 0.0000004
    });
    return workout;
  }

  progress() {
    this.setState(this.workout.shift());
  }

  togglePause() {
    this.setState({
      paused: !this.state.paused
    });
  }

  render() {
    return (
      <React.Fragment>
        <Paper style={style} zDepth={1}>
          <ReactCountdownClock
            seconds={this.state.seconds}
            color={this.state.color}
            alpha={this.state.alpha}
            size={300}
            paused={this.state.paused}
            onComplete={this.progress}
          />
          <h1 style={divStyle}>{this.state.phase}</h1>
        </Paper>
        <RaisedButton
          label="Start"
          primary={true}
          disabled={!this.state.paused}
          style={btnStyle}
          onClick={this.togglePause}
        />
        <RaisedButton
          label="Pause"
          secondary={true}
          disabled={this.state.paused}
          style={btnStyle}
          onClick={this.togglePause}
        />
      </React.Fragment>
    );
  }
}

export default Tabata;
