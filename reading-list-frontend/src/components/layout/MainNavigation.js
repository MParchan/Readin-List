import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Reading List</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Books</Link>
          </li>
          <li>
            <Link to="/new-book">Add New Book</Link>
          </li>
          <li>
            <Link to="/read-books">Read Books</Link>
          </li>
          <li>
            <Link to="/to-read-books">To Read Books</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
