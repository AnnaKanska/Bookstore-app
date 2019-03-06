import React, { Component } from "react";

class Genres extends Component {
  state = {
    name: ""
  };

  render() {
    return (
      <div>
        <ul>
          <li>{this.props.name}</li>
        </ul>
      </div>
    );
  }
}

export default Genres;
