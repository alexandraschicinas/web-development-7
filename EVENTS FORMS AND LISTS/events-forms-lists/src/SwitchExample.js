import React from "react";
import Switch from "react-switch";

export default class SwitchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false,
    };
  }
  handleChange=(checked) => {
      this.setState({
          isToggled:checked
,     
 })
  }
//   un toggle are ca parametru checked in loc de true opusul lui false. Acest parametru este cerut;

  render() {
    return (
      <label>
        <span> Press to toggle </span>
        <Switch onChanche={this.handleChange} checked={this.state.isToggled} />
      </label>
    );
  }
}
// alt+shift+v
// control + ,