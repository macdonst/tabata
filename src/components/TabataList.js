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
    let list = null;
    let keys = Object.keys(this.props.tabatas);
    if (keys.length > 0) {
      list = <List>{keys.map(this.renderTabatas)}</List>;
    } else {
      list = <span>Create a tabata</span>;
    }
    return (
      <Paper style={style} zDepth={1}>
        {list}
      </Paper>
    );
  }
}

TabataList.propTypes = {
  tabatas: PropTypes.object.isRequired
};

export default TabataList;
