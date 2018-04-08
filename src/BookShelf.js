import React from 'react';
import Book from './Book';

const BookShelf = (props) => {
    return (
        <div className="bookshelf">
                  <h2 className="bookshelf-title">{props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {props.books.map( (book, key) => (
                          <li key={key}>
                          <Book {...book} />
                          </li>
                      ))}
                    </ol>
                  </div>
                </div>
    )
}

export default BookShelf;