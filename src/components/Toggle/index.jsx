import React, { Component } from "react";
import Switch from "react-switch";

class Toggle extends Component {
  constructor() {
    super();
    this.state = { checked: true };
  }

  handleChange = checked => {
    this.setState({ checked });
  };

  render() {
    return (
      <label htmlFor="normal-switch">
        <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          id="normal-switch"
          uncheckedIcon={false}
          checkedIcon={false}
        />
      </label>
    );
  }
}

export default Toggle;
