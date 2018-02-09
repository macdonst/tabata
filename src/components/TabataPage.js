import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import Dialog from 'material-ui/Dialog';
import Tabata from './Tabata';
import { Route } from 'react-router-dom';

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed'
};

class TabataPage extends Component {
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
      id: null,
      tabata: null
    };
  }

  componentWillMount() {
    this.setState({ id: this.props.id, tabata: this.props.tabata });
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
      <React.Fragment>
        <AppBar
          iconElementLeft={
            <IconButton onClick={this.context.router.history.goBack}>
              <NavigationArrowBack />
            </IconButton>
          }
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
              <MenuItem primaryText="Delete" onClick={this.handleOpen} />
              <Route
                key={this.state.tabata.key}
                render={({ history }) => (
                  <MenuItem
                    primaryText="Edit"
                    onClick={event => {
                      console.log('ack');
                      console.log(this.state.tabata);
                      history.push({
                        pathname: '/create',
                        state: { id: this.state.id, tabata: this.state.tabata }
                      });
                    }}
                  />
                )}
              />
            </IconMenu>
          }
          title={this.state.tabata.name}
        />
        <Tabata tabata={this.state.tabata} />
        <Dialog
          title="Delete Tabata"
          modal={true}
          open={this.state.open}
          actions={actions}
        >
          Are you sure you want to remove this Tabata?
        </Dialog>
      </React.Fragment>
    );
  }
}

export default TabataPage;
