import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

class SearchBooks extends Component {
  constructor(props) {
    super(props);
    this.onTextChanged = this.onTextChanged.bind(this);
  }
  onTextChanged(event) {
    this.props.search(event.target.value);
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
  
            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
            <input
              type="text"
              onChange={this.onTextChanged}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookShelf
            books={this.props.library ? this.props.library : []}
            shelf="none"
            updateLibrary={this.props.updateLibrary}
          />
        </div>
      </div>
    );
  }
}

export default SearchBooks;
