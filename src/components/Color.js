import React from "react";

class Color extends React.Component {
  //define state
  state = {
    color: "#000",
    text: "Some colored text"
  };
  //handle the element change

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
      </div>
    );
  }
}
export default Color;
