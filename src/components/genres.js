import React, { Component } from "react";
import shortid from "shortid";

class Genres extends Component {
  state = {
    name: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  submitGenre = event => {
    event.preventDefault();
    this.props.onSubmit({
      name: this.state.name,
      id: shortid.generate()
    });
    this.setState({
      name: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitGenre}>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="new genre"
          />
          <button onClick={this.submitGenre}>Add</button>
        </form>
      </div>
    );
  }
}

export default Genres;
