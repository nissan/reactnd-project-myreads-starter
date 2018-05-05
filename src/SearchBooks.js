import React, { Component } from "react";
import { Link } from "react-router-dom";
import DebounceInput from "react-debounce-input";
import BookShelf from "./BookShelf";

class SearchBooks extends Component {
  constructor(props) {
    super(props);
    this.onTextChanged = this.onTextChanged.bind(this);
    this.state = {
      library: []
    };
  }
  async onTextChanged(event) {
    let results = await this.props.search(event.target.value)
    this.setState({ library: results });
  }
  componentDidMount() {
    this.setState({ library: [] });
    //console.log("Search page mounted");
  }

  componentWillUnmount() {
    this.setState({ library: [] });
    //console.log("Unmounting search page");
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
          <DebounceInput
          placeholder="Search by title or author"
          minLength={2}
          debounceTimeout={300}
          onChange={this.onTextChanged} />
          </div>
        </div>
        <div className="search-books-results">
          <BookShelf
            books={this.state.library ? this.state.library : []}
            shelf="none"
            updateLibrary={this.props.updateLibrary}
          />
        </div>
      </div>
    );
  }
}

export default SearchBooks;
