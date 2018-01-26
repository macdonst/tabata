import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Route } from 'react-router-dom';
import TabataList from './TabataList';
import PropTypes from 'prop-types';

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed'
};

class MainPage extends Component {
  constructor() {
    super();
    this.renderFAB = this.renderFAB.bind(this);
  }

  renderFAB() {
    return (
      <Route
        render={({ history }) => (
          <FloatingActionButton secondary={true} style={style}>
            <ContentAdd
              onClick={event => {
                history.push('/create');
              }}
            />
          </FloatingActionButton>
        )}
      />
    );
  }

  render() {
    return (
      <div>
        <AppBar title="Tabata" />
        <TabataList tabatas={this.props.tabatas} />
        {this.renderFAB()}
      </div>
    );
  }
}

MainPage.propTypes = {
  tabatas: PropTypes.object.isRequired
};

export default MainPage;
