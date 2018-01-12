import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import { Route } from 'react-router-dom';

const style = {
  margin: 20
};

class TabataList extends Component {
  constructor() {
    super();
    this.renderTabatas = this.renderTabatas.bind(this);
  }

  renderTabatas(key) {
    const tabata = this.props.tabatas[key];
    return (
      <Route
        key={key}
        render={({ history }) => (
          <ListItem
            onClick={event => {
              console.log('list item clicked ' + key);
              history.push(`/tabata/${key}`);
            }}
          >
            {tabata.name}
          </ListItem>
        )}
      />
    );
  }

  render() {
    return (
      <Paper style={style} zDepth={1}>
        <List>{Object.keys(this.props.tabatas).map(this.renderTabatas)} </List>
      </Paper>
    );
  }
}

TabataList.propTypes = {
  tabatas: PropTypes.object.isRequired
};

export default TabataList;
