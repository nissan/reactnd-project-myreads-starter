import React from 'react'
import {Switch, Route} from 'react-router-dom';
import './App.css'
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';

class BooksApp extends React.Component {
  
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' render={(routeProps) => (
            <ListBooks {...routeProps} />
          )}   
          />
          <Route path='/search' component={SearchBooks} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
