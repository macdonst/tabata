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

  constructor() {
    super();
    this.state = {
      id: null,
      tabata: {
        name: '',
        warmupTime: 0,
        workoutTime: 0,
        restTime: 0,
        breakTime: 0,
        cooldownTime: 0,
        rounds: '',
        sets: ''
      }
    };
  }

  componentWillMount() {
    if (this.context.router.route.location.state) {
      this.setState({
        id: this.context.router.route.location.state.id || null,
        tabata: {
          name: this.context.router.route.location.state.tabata.name || '',
          warmupTime:
            this.context.router.route.location.state.tabata.warmupTime || 0,
          workoutTime:
            this.context.router.route.location.state.tabata.workoutTime || 0,
          restTime:
            this.context.router.route.location.state.tabata.restTime || 0,
          breakTime:
            this.context.router.route.location.state.tabata.breakTime || 0,
          cooldownTime:
            this.context.router.route.location.state.tabata.cooldownTime || 0,
          rounds: this.context.router.route.location.state.tabata.rounds || '',
          sets: this.context.router.route.location.state.tabata.sets || ''
        }
      });
    }
  }

  saveTabata() {
    console.log('save tabata');
    const tabata = {
      name: this.workoutName.input.value,
      warmupTime: this.warmupTime.state.value,
      workoutTime: this.workoutTime.state.value,
      restTime: this.restTime.state.value,
      breakTime: this.breakTime.state.value,
      cooldownTime: this.cooldownTime.state.value,
      rounds: this.rounds.input.value,
      sets: this.sets.input.value
    };
    if (this.state.id) {
      this.props.updateTabata(this.state.id, tabata);
    } else {
      this.props.addTabata(tabata);
    }
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
              value={this.state.tabata.name}
              onChange={e =>
                this.setState({ tabata: { name: e.target.value } })
              }
            />
            <NumberSelectField
              floatingLabelText="Warm Up"
              floatingLabelFixed={true}
              ref={input => {
                this.warmupTime = input;
              }}
              value={this.state.tabata.warmupTime}
            />
            <NumberSelectField
              floatingLabelText="Work Out"
              floatingLabelFixed={true}
              ref={input => {
                this.workoutTime = input;
              }}
              value={this.state.tabata.workoutTime}
            />
            <NumberSelectField
              floatingLabelText="Rest"
              floatingLabelFixed={true}
              ref={input => {
                this.restTime = input;
              }}
              value={this.state.tabata.restTime}
            />
            <NumberSelectField
              floatingLabelText="Break"
              floatingLabelFixed={true}
              ref={input => {
                this.breakTime = input;
              }}
              value={this.state.tabata.breakTime}
            />
            <NumberSelectField
              floatingLabelText="Cool Down"
              floatingLabelFixed={true}
              ref={input => {
                this.cooldownTime = input;
              }}
              value={this.state.tabata.cooldownTime}
            />
            <TextField
              floatingLabelText="Rounds"
              floatingLabelFixed={true}
              ref={input => {
                this.rounds = input;
              }}
              type="number"
              value={this.state.tabata.rounds}
              onChange={e =>
                this.setState({ tabata: { rounds: e.target.value } })
              }
            />
            <TextField
              floatingLabelText="Sets"
              floatingLabelFixed={true}
              ref={input => {
                this.sets = input;
              }}
              type="number"
              value={this.state.tabata.sets}
              onChange={e =>
                this.setState({ tabata: { sets: e.target.value } })
              }
            />
          </div>
        </Paper>
      </React.Fragment>
    );
  }
}

export default CreateTabataPage;
