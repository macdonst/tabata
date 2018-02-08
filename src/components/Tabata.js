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
  textTransform: 'uppercase',
  fontSize: '150%',
  fontWeight: 'bold'
};

class Tabata extends Component {
  constructor() {
    super();
    this.progress = this.progress.bind(this);
    this.togglePause = this.togglePause.bind(this);
    this.createWorkout = this.createWorkout.bind(this);
    this.renderRounds = this.renderRounds.bind(this);
    this.handleSecond = this.handleSecond.bind(this);
    this.state = {
      color: '#000',
      alpha: 0.9,
      paused: true,
      phase: 'warmup',
      completedRounds: 0
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
      for (let j = 0; j < tabata.rounds; j++) {
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
    const current = this.workout.shift();
    if (current.phase === 'workout') {
      const rounds = this.state.completedRounds + 1;
      this.setState({ completedRounds: rounds });
    } else if (current.phase === 'break') {
      this.setState({ completedRounds: 0 });
    }
    this.setState(current);
  }

  handleSecond(second) {
    if (second <= 3 && second >= 1) {
      this.beep.play();
    } else if (second === 0) {
      this.chime.play();
    }
  }

  togglePause() {
    this.setState({
      paused: !this.state.paused
    });
  }

  renderRounds() {
    const currentPhase = this.state.phase;
    if (currentPhase && currentPhase !== 'workout' && currentPhase !== 'rest') {
      return <span>&nbsp;</span>;
    } else {
      return (
        <span>
          {this.state.completedRounds} of {this.props.tabata.rounds}
        </span>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <Paper style={style} zDepth={1}>
          <div style={{ width: '300px', height: '300px', margin: '0 auto' }}>
            <ReactCountdownClock
              seconds={this.state.seconds}
              color={this.state.color}
              alpha={this.state.alpha}
              size={300}
              paused={this.state.paused}
              onComplete={this.progress}
              onSecond={this.handleSecond}
              showMilliseconds="false"
            />
          </div>
          <p style={divStyle}>
            {this.state.phase}
            <br />
            {this.renderRounds()}
          </p>
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
        <audio
          src="/audio/beep.mp3"
          ref={audio => {
            this.beep = audio;
          }}
        >
          Your browser does not support the audio element.
        </audio>
        <audio
          src="/audio/chime.mp3"
          ref={audio => {
            this.chime = audio;
          }}
        >
          Your browser does not support the audio element.
        </audio>
      </React.Fragment>
    );
  }
}

export default Tabata;
