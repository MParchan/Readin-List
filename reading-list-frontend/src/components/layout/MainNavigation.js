import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Reading List</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Booklist</Link>
          </li>
          <li>
            <Link to="/new-book">Add book</Link>
          </li>
          <li>
            <Link to="/read-books">Books read</Link>
          </li>
          <li>
            <Link to="/to-read-books">Books to read</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
