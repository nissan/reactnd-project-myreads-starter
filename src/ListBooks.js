import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

const ListBooks = (props) => {
  return (
    <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              <BookShelf books={props.library? props.library.filter(books =>
    							  books.shelf==='currentlyReading'):[]}
  						 shelf="currentlyReading" updateLibrary={props.updateLibrary}
              />
              <BookShelf books={props.library? props.library.filter(books =>
                          books.shelf==='wantToRead'):[]}
                    shelf="wantToRead" updateLibrary={props.updateLibrary}
              />
              <BookShelf books={props.library? props.library.filter(books =>
                          books.shelf==='read'):[]}
                    shelf="read" updateLibrary={props.updateLibrary}
              />
    		  </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
)};

export default ListBooks