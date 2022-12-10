import { useState, useEffect } from "react";

import { createAPIEndpoint, ENDPOINTS } from "../api";
import ReadBookList from "../components/books/ReadBookList";

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
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Read Books Page</h1>
      <ReadBookList books={loadedBooks} />
    </section>
  );
}

export default ReadBooksPage;
