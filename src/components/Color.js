import React from "react";

class Color extends React.Component {
  //define state
  state = {
    color: "#000",
    text: "Some colored text"
  };
  //handle the element change
  colorChange = event => {
    //check the current color to add the color toggle functionality
    if (this.state.color === "#000") {
      //get the new color from API endpoint
      fetch("http://www.colr.org/json/color/random")
        .then(result => result.json())
        .then(data => {
          let newColor = data.colors[0].hex;
          this.setState({ color: "#" + newColor });
        });
    } else {
      this.setState({ color: "#000" });
    }
  };
  //catch the input and set it to state
  textChange = event => {
    event.preventDefault();
    this.setState({ text: event.target.value });
  };
  render() {
    return (
      <div>
        <p style={{ color: this.state.color }} onClick={this.colorChange}>
          {this.state.text}
        </p>
        <input type="text" onChange={this.textChange} />
      </div>
    );
  }
}
export default Color;
