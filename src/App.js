import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Genres from "./components/genres";

class App extends Component {
  state = {
    current: "",
    genres: ["Non-ficton", "Comedy", "Sci-fi"]
  };

  handleChange = event => {
    this.setState({
      current: event.target.value
    });
  };
  handleSubmit = genre => {
    genre.preventDefault();
    genre = this.state.current;
    this.setState({
      genres: [genre, ...this.state.genres],
      current: ""
    });
  };
  handleDelete = i => {
    this.setState({
      genres: this.state.genres.filter(genre => genre !== i)
    });
  };

  render() {
    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="genre"
            value={this.state.current}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
        <div>
          {this.state.genres.map((genre, i) => (
            <div key={i}>
              {<Genres name={genre} />}
              <button onClick={() => this.handleDelete(genre)}>x</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;
