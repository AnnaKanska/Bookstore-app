import React, { Component } from "react";
import "./App.css";
import logo from "./img/temporary-logo.png";
import AllBooks from "./components/allbooks";
import Loading from "./components/loading";

class App extends Component {
  state = {
    currentGenre: "",
    genres: ["Non-fiction", "Comedy", "Sci-fi"],
    currentBook: {
      name: "",
      price: 0,
      genre: ""
    },
    books: [
      {
        name: "Biography of Anne Frank",
        price: 2.99,
        genre: "Non-fiction"
      },
      {
        name: "Encylopedia of Germany",
        price: 2.99,
        genre: "Non-fiction"
      },
      {
        name: "Jerry Seinfeld",
        price: 2.99,
        genre: "Comedy"
      }
    ],
    selectedGenreIndex: 0,
    loading: false
  };

  handleChange = event => {
    this.setState({
      currentGenre: event.target.value
    });
  };
  handleSubmit = genre => {
    genre.preventDefault();
    genre = this.state.currentGenre;
    this.setState({
      genres: [genre, ...this.state.genres],
      currentGenre: ""
    });
    this.fakeDelay();
  };
  handleDelete = toDelete => {
    this.setState({
      genres: this.state.genres.filter(genre => genre !== toDelete)
    });
    this.deleteBooksOfGenre(toDelete);
  };

  deleteBooksOfGenre = genrename => {
    let bookArray = this.state.books;
    bookArray = bookArray.filter(value => value.genre !== genrename);
    this.setState({
      books: bookArray
    });
  };

  loadGenre = i => {
    this.setState({
      selectedGenreIndex: i
    });
  };

  handleBookChange = e => {
    let current = this.state.currentBook;
    current[e.target.name] = e.target.value;

    this.setState({
      currentBook: current
    });
  };

  handleAddBook = book => {
    let clear = {
      name: "",
      price: 0,
      genre: ""
    };
    book.preventDefault();
    book = { ...this.state.currentBook };
    this.setState({
      books: [book, ...this.state.books],
      currentBook: clear
    });
    this.fakeDelay();
  };
  handleBookDelete = bookToDelete => {
    this.setState({
      books: this.state.books.filter(book => book !== bookToDelete)
    });
  };

  fakeDelay = () => {
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 500);
  };

  render() {
    return (
      <div>
        <header className="header">
          <div className="logo">
            <img src={logo} width="100" height="50" alt="two books" />
          </div>
          <div className="genre-input">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="genre"
                value={this.state.currentGenre}
                onChange={this.handleChange}
              />
              <button type="submit">Add</button>
            </form>
          </div>
          <div className="book-input">
            <form onSubmit={this.handleAddBook}>
              <input
                type="text"
                name="name"
                value={this.state.currentBook.name}
                onChange={e => this.handleBookChange(e)}
                placeholder="title"
              />
              <input
                type="number"
                name="price"
                value={this.state.currentBook.price}
                onChange={e => this.handleBookChange(e)}
              />
              <input
                type="text"
                name="genre"
                value={this.state.currentBook.genre}
                onChange={e => this.handleBookChange(e)}
                placeholder="genre"
              />
              <button type="submit">submit</button>
            </form>
          </div>
        </header>
        <div>
          {this.state.loading ? (
            <Loading />
          ) : (
            <div>
              <div className="all-genres">
                {this.state.genres.map((genre, i) => (
                  <div key={i} onClick={() => this.loadGenre(i)}>
                    {genre}
                    <button onClick={() => this.handleDelete(genre)}>
                      Delete
                    </button>
                  </div>
                ))}
              </div>
              <div className="book-container">
                Books by genre:
                <div>
                  <h1>{this.state.genres[this.state.selectedGenreIndex]}</h1>
                  {this.state.books
                    .filter(
                      book =>
                        book.genre ===
                        this.state.genres[this.state.selectedGenreIndex]
                    )
                    .map((book, i) => (
                      <div key={i}>
                        {book.name}
                        <button onClick={() => this.handleBookDelete(book)}>
                          Delete book
                        </button>
                      </div>
                    ))}
                </div>
              </div>
              <div className="all-books">
                <AllBooks books={this.state.books} />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default App;
