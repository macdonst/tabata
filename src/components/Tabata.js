import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import Dialog from 'material-ui/Dialog';

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed'
};

class Tabata extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor() {
    super();
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.deleteTabata = this.deleteTabata.bind(this);
    this.state = {
      open: false,
      tabata: null
    };
  }

  componentWillMount() {
    this.setState({ tabata: this.props.tabata });
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  deleteTabata() {
    this.handleClose();
    this.context.router.history.goBack();
    this.props.removeTabata(this.props.match.params.id);
  }

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton label="OK" primary={true} onClick={this.deleteTabata} />
    ];

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            iconElementLeft={
              <IconButton onClick={this.context.router.history.goBack}>
                <NavigationArrowBack />
              </IconButton>
            }
            iconElementRight={
              <IconButton onClick={this.handleOpen}>
                <DeleteIcon />
              </IconButton>
            }
            title={this.state.tabata.name}
          />
          <Dialog
            title="Delete Tabata"
            modal={true}
            open={this.state.open}
            actions={actions}
          >
            Are you sure you want to remove this Tabata?
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Tabata;
