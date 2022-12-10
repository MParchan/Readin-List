import { useState, useEffect } from "react";

import { createAPIEndpoint, ENDPOINTS } from "../api";
import BookList from "../components/books/BookList";

function AllBooksPage() {
  const [isLoadnig, setIsLoadin] = useState(true);
  const [loadedBooks, setLoadedBooks] = useState([]);

  useEffect(() => {
    setIsLoadin(true);
    createAPIEndpoint(ENDPOINTS.books)
      .get("")
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .then((data) => {
        const books = [];
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
      <h1>All Books Page</h1>
      <BookList books={loadedBooks} />
    </section>
  );
}

export default AllBooksPage;
