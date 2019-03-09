import React, { Component } from "react";

class AllBooks extends Component {
  render() {
    return (
      <div>
        <h3>All books:</h3>
        {this.props.books.map((book, i) => (
          <div key={i}>
            <h4>{book.name}</h4>
            <p>{book.price}</p>
            <p>({book.genre})</p>
          </div>
        ))}
      </div>
    );
  }
}

export default AllBooks;
