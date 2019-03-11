import React, { Component } from "react";

class AllBooks extends Component {
  render() {
    return (
      <div>
        <h2>All books</h2>
        <div className="all-book-display">
          {this.props.books.map((book, i) => (
            <div className="all-book-item" key={i}>
              <h5>{book.name}</h5>
              <p>price: {book.price} €</p>
              <p>({book.genre})</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AllBooks;
