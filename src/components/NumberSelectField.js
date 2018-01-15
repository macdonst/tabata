import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class NumberSelectField extends SelectField {
  state = {
    value: 0
  };

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <SelectField
        floatingLabelText={this.props.floatingLabelText}
        value={this.state.value}
        onChange={this.handleChange}
      >
        <MenuItem value={60} primaryText="1 minute" />
        <MenuItem value={55} primaryText="55 seconds" />
        <MenuItem value={50} primaryText="50 seconds" />
        <MenuItem value={45} primaryText="45 seconds" />
        <MenuItem value={40} primaryText="40 seconds" />
        <MenuItem value={35} primaryText="35 seconds" />
        <MenuItem value={30} primaryText="30 seconds" />
        <MenuItem value={25} primaryText="25 seconds" />
        <MenuItem value={20} primaryText="20 seconds" />
        <MenuItem value={15} primaryText="15 seconds" />
        <MenuItem value={10} primaryText="10 seconds" />
        <MenuItem value={5} primaryText="5 seconds" />
        <MenuItem value={0} primaryText="0 seconds" />
      </SelectField>
    );
  }
}

export default NumberSelectField;
