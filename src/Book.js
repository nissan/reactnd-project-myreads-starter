import React, { Component } from "react";

class Book extends Component {
  state = {
    shelf:"none",
  }
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  async handleChange(event) {
    event.preventDefault();
    const shelf = event.target.value;
    await this.setState({shelf});
    await this.props.updateLibrary(this.props.book, shelf);
  }
  async componentDidMount(){
    await this.setState({shelf:this.props.book.shelf});
  }
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${
                this.props.book.imageLinks !== null &&
                this.props.book.imageLinks !== undefined
                  ? this.props.book.imageLinks.smallThumbnail !== null &&
                    this.props.book.imageLinks.smallThumbnail !== undefined
                    ? this.props.book.imageLinks.smallThumbnail
                    : this.props.book.imageLinks.thumbnail !== null &&
                      this.props.book.imageLinks.thumbnail !== undefined
                      ? this.props.book.imageLinks.thumbnail
                      : ""
                  : ""
              })`
            }}
          />

          <div className="book-shelf-changer">
            <select
              value={this.state.shelf ? this.state.shelf : "none"}
              onChange={this.handleChange}
            >
              <option value="zero" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{Array.isArray(this.props.book.authors)?this.props.book.authors.join(', '):''}</div>
      </div>
    );
  }
}

export default Book;
