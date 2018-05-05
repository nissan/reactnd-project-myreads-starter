import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";
import Error404Page from './Error404Page';

class BooksApp extends React.Component {
  constructor() {
    super();
    this.state = {
      library: [],
      searchResults: [],
      currentQuery: ""
    };
    this.updateLibrary = this.updateLibrary.bind(this);
    this.search = this.search.bind(this);
    this.flushState = this.flushState.bind(this);
  }
  async componentDidMount() {
    this.setState({ library: await BooksAPI.getAll() });
  }

  async updateLibrary(book, shelf) {
    this.state.library.map(
      bookitem => (bookitem.id === book.id ? (bookitem.shelf = shelf) : "")
    );
    await BooksAPI.update(book, shelf);
    this.flushState();
    this.setState({ library: await BooksAPI.getAll() });
    await this.search(this.state.currentQuery);
  }

  async search(query) {
    // console.log("query: " + query);
    let resultsLibrary = [];
    if (query === null || query === "") {
      //console.log("empty query, flush state");
      this.flushState();
      this.setState({ currentQuery:"", searchResults: [] });
    } 
    else {
      this.flushState();
      this.setState({ library: await BooksAPI.getAll() });
      await BooksAPI.search(query).then(results => {
        //console.log(results);
        if (results && results.length>0) {
          resultsLibrary = results.map(
          result =>
            this.state.library.find(item => item.id === result.id)
              ? this.state.library.find(item => item.id === result.id)
              : result
        );
      }
        //console.log(resultsLibrary);
        //match results with library, add shelf if match
        this.setState({ currentQuery: query, searchResults: resultsLibrary });
      });
      //console.log(resultsLibrary);
      return resultsLibrary;
    }
  }

  flushState() {
    this.setState({ library: [], searchResults: [] });
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => (
              <ListBooks
                library={this.state.library}
                updateLibrary={this.updateLibrary}
                {...routeProps}
              />
            )}
          />
          <Route
            path="/search"
            render={routeProps => (
              <SearchBooks
                library={this.state.searchResults}
                search={this.search}
                updateLibrary={this.updateLibrary}
                {...routeProps}
              />
            )}
          />
          <Route component={Error404Page}/>
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
