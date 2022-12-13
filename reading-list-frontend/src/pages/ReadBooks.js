import { useState, useEffect } from "react";

import { createAPIEndpoint, ENDPOINTS } from "../api";
import ReadBookList from "../components/books/ReadBookList";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import classes from "./Pages.module.css";

function ReadBooksPage() {
  const [isLoadnig, setIsLoadin] = useState(true);
  const [loadedBooks, setLoadedBooks] = useState([]);

  useEffect(() => {
    setIsLoadin(true);
    createAPIEndpoint(ENDPOINTS.books)
      .get("AlreadyRead")
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .then((data) => {
        let books = [];
        for (const key in data) {
          const book = {
            id: key,
            ...data[key],
          };
          books.push(book);
        }
        setIsLoadin(false);
        setLoadedBooks(books);
      });
  }, []);

  if (isLoadnig) {
    return (
      <section className={classes.textCenter}>
        <LoadingSpinner />
      </section>
    );
  }

  return (
    <section>
      <h1 className={classes.textCenter}>Booklist read</h1>
      <ReadBookList books={loadedBooks} />
    </section>
  );
}

export default ReadBooksPage;
