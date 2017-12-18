import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import PropTypes from 'prop-types';

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
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default CreateTabata;
