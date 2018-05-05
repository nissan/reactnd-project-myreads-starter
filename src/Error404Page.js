import React from "react";
import { Link } from "react-router-dom";

export const Error404Page = props => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <header>
          These aren't the droids your looking for. Maybe check back the{" "}
          <Link to="/">Homepage</Link> and try again?
        </header>
      </div>
    </div>
  </div>
);

export default Error404Page;
