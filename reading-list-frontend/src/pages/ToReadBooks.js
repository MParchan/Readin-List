import { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { createAPIEndpoint, ENDPOINTS } from "../api";
import ToReadBookList from "../components/books/ToReadBookList";

function ToReadBooksPage() {
  const [isLoadnig, setIsLoadin] = useState(true);
  const [loadedBooks, setLoadedBooks] = useState([]);

  useEffect(() => {
    setIsLoadin(true);
    createAPIEndpoint(ENDPOINTS.books)
      .get()
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
          books = books.filter((book) => {
            return book.toRead === true;
          });
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
    <DragDropContext
      onDragEnd={(result) => {
        const { destination, source, draggableId } = result;
        if (!destination) {
          return;
        }
        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        ) {
          return;
        }

        const newBookList = Array.from(loadedBooks);
        const book = loadedBooks[draggableId];
        newBookList.splice(source.index, 1);
        newBookList.splice(destination.index, 0, book);
        console.log(newBookList);
        setLoadedBooks(newBookList);
      }}
    >
      <section>
        <h1>Read Books Page</h1>
        <ToReadBookList books={loadedBooks} />
      </section>
    </DragDropContext>
  );
}

export default ToReadBooksPage;
