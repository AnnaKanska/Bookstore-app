import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Genres from "./components/genres";

class App extends Component {
  state = {
    genres: []
  };

  addGenre = genre => {
    this.setState({
      genres: [genre, ...this.state.genres]
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="books-block" />
        <div className="genres-block">
          <Genres onSubmit={this.addGenre} />
          {JSON.stringify(this.state.genres)}
        </div>
      </div>
    );
  }
}

export default App;
