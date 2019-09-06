import React, { Component } from "react";
class MinimumLength extends Component {
  constructor(props) {
    super(props);
    //store the current value of the input item in the state:
    // add the value of the input to the state
    this.state = { input: "" };

    this.handleChange = this.handleChange.bind(this);
  }


  // e is the standard DOM event object
handleChange(e) {
    // e.currentTarget: DOM element we attached the event handler to
    // use the value property to read its current value
    this.setState({ input: e.currentTarget.value });
}





  render() {
    return (
      <div className="form-group jumbotron">
        <h3>MinimumLength</h3>
        <input
          onChange={ this.handleChange }
          value={ this.state.input }
          name={ this.props.name }
          className="form-control"
        />

        <p handleChange={ this.handleChange } style = {{ color: "red" }}>{ this.state.input.length < 30  ? "Too short!" : "" }</p>
      </div> 
    );
  } 
}



export default MinimumLength;