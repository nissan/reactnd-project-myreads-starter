import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI';

class ListBooks extends Component {
    state = {
        booksCurrentlyReading: [],
        booksWantToRead:[],
        booksRead:[],
      }
    async componentDidMount() {
        const library = await BooksAPI.getAll();
        this.setState({booksCurrentlyReading:library.filter(
          book => book.shelf==='currentlyReading'
        )});
        this.setState({booksWantToRead:library.filter(
          book => book.shelf==='wantToRead'
        )});
        this.setState({booksRead:library.filter(
          book => book.shelf==='read'
        )});
      }
    render() {
    return (
    <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              <BookShelf title='Currently Reading' books={this.state.booksCurrentlyReading} />
              <BookShelf title='Want to Read' books={this.state.booksWantToRead} />
              <BookShelf title='Read' books={this.state.booksRead} />
              </div>
            </div>
            <div className="open-search">
                <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )
    }
}

export default ListBooks;