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

class Tabata extends Component {
  constructor() {
    super();
    this.progress = this.progress.bind(this);
    this.togglePause = this.togglePause.bind(this);
    this.state = {
      color: '#000',
      alpha: 0.9,
      paused: true,
      phase: 'warmup'
    };
  }

  componentDidMount() {
    console.log(this.props.tabata);
    this.setState({ seconds: this.props.tabata.warmupTime });
  }

  progress() {
    console.log('ack');
    switch (this.state.phase) {
      case 'warmup':
        this.setState({
          color: '#f00',
          alpha: 0.9,
          paused: false,
          phase: 'workout',
          seconds: this.props.tabata.workoutTime
        });
        break;
      default:
        console.log('default');
    }
  }

  togglePause() {
    this.setState({
      paused: !this.state.paused
    });
  }

  render() {
    return (
      <div>
        <Paper style={style} zDepth={1}>
          <ReactCountdownClock
            seconds={this.state.seconds}
            color={this.state.color}
            alpha={this.state.alpha}
            size={300}
            paused={this.state.paused}
            onComplete={this.progress}
          />
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
      </div>
    );
  }
}

export default Tabata;
