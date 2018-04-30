import React from "react";
import Book from "./Book";

const BookShelf = props => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {props.shelf === "currentlyReading"
          ? "Currently Reading"
          : props.shelf === "wantToRead"
            ? "Want to Read"
            : props.shelf === "read"
              ? "Read"
              : "Books"}
      </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books !== undefined &&
          props.books !== null &&
          props.books.length
            ? props.books.map((book, key) => (
                <li key={key}>
                  <Book book={book} updateLibrary={props.updateLibrary} />
                </li>
              ))
            : ""}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
