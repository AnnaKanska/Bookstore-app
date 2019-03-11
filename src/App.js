import React, { Component } from "react";
import "./App.css";
import logo from "./img/temporary-logo.png";
import AllBooks from "./components/allbooks";
import Loading from "./components/loading";

class App extends Component {
  state = {
    currentGenre: "",
    genres: ["Classics", "Comedy", "Nonfiction"],
    currentBook: {
      name: "",
      price: 0,
      genre: ""
    },
    books: [
      {
        name: "1984",
        price: 5.99,
        genre: "Classics"
      },
      {
        name: "Pride and Prejudice",
        price: 2.99,
        genre: "Classics"
      },
      {
        name: "The Cactus",
        price: 7.99,
        genre: "Comedy"
      }
    ],
    selectedGenreIndex: 0,
    loading: false,
    allBooks: false
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
      selectedGenreIndex: i,
      allBooks: false
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

  onAllBooks = () => {
    this.setState({
      allBooks: true
    });
  };

  render() {
    return (
      <div>
        <header className="header">
          <div className="logo">
            <img src={logo} alt="two books" />
          </div>
          <div className="header-blocks-container">
            <div className="header-block-1">
              <form
                className="genre-grid-container"
                onSubmit={this.handleSubmit}
              >
                <h2 className="add-genre-title">Add Genre</h2>
                <p className="add-genre-text">new genre</p>
                <input
                  className="input-genre"
                  type="text"
                  name="genre"
                  required
                  value={this.state.currentGenre}
                  onChange={this.handleChange}
                  placeholder="..."
                />
                <button className="submit-genre" type="submit">
                  add
                </button>
              </form>
            </div>
            <div className="header-block-2">
              <form
                className="input-book-grid-container"
                onSubmit={this.handleAddBook}
              >
                <h2 className="add-book-title">Add Book</h2>
                <p className="title-text">title</p>
                <input
                  className="input-book-title"
                  type="text"
                  name="name"
                  required
                  value={this.state.currentBook.name}
                  onChange={e => this.handleBookChange(e)}
                  placeholder="..."
                />
                <br />
                <p className="price-text">price</p>
                <input
                  className="input-book-price"
                  type="number"
                  min="0"
                  step=".10"
                  name="price"
                  value={this.state.currentBook.price}
                  onChange={e => this.handleBookChange(e)}
                />
                <br />
                <p className="genre-text">genre</p>
                <input
                  className="input-book-genre"
                  type="text"
                  name="genre"
                  required
                  value={this.state.currentBook.genre}
                  onChange={e => this.handleBookChange(e)}
                  placeholder="..."
                />
                <button className="submit-book" type="submit">
                  add
                </button>
              </form>
            </div>
          </div>
        </header>
        <div className="main-content-container">
          {this.state.loading ? (
            <Loading />
          ) : (
            <div className="content-container">
              <div className="genre-container">
                <h2>Browse by genre</h2>
                {this.state.genres.map((genre, i) => (
                  <div
                    className="each-genre"
                    key={i}
                    onClick={() => this.loadGenre(i)}
                  >
                    <h4>{genre}</h4>
                    <button
                      className="delete-btn"
                      onClick={() => this.handleDelete(genre)}
                    >
                      delete
                    </button>
                  </div>
                ))}
                {this.state.allBooks ? null : (
                  <div>
                    <button
                      className="showAll-btn"
                      onClick={() => this.onAllBooks()}
                    >
                      Show All Books
                    </button>
                  </div>
                )}
              </div>
              <div className="book-container">
                {this.state.allBooks ? (
                  <AllBooks books={this.state.books} />
                ) : (
                  <div>
                    <h2>{this.state.genres[this.state.selectedGenreIndex]}</h2>
                    <div className="book-grid">
                      {this.state.books
                        .filter(
                          book =>
                            book.genre ===
                            this.state.genres[this.state.selectedGenreIndex]
                        )
                        .map((book, i) => (
                          <div className="book-grid-item" key={i}>
                            <h4>{book.name}</h4>
                            <p>price: {book.price} €</p>
                            <p>{book.genre}</p>
                            <hr />
                            <button
                              className="delete-btn"
                              onClick={() => this.handleBookDelete(book)}
                            >
                              Delete
                            </button>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default App;
