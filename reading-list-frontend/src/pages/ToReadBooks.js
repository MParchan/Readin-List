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
      .get("ToRead")
      .then((response) => {
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
        const sortBooks = [...books].sort((a, b) => a.priority - b.priority);
        console.log(sortBooks);
        setIsLoadin(false);
        setLoadedBooks(sortBooks);
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
        const { destination, source } = result;
        if (!destination) {
          return;
        }
        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        ) {
          return;
        }
        setIsLoadin(true);
        const newBookList = Array.from(loadedBooks);
        newBookList.splice(source.index, 1);
        newBookList.splice(destination.index, 0, {
          id: 0,
          bookId: Number(loadedBooks[source.index].bookId),
          author: loadedBooks[source.index].author,
          image: loadedBooks[source.index].image,
          title: loadedBooks[source.index].title,
          description: loadedBooks[source.index].description,
          toRead: loadedBooks[source.index].toRead,
          alreadyRead:loadedBooks[source.index].alreadyRead
        });
        for (let i = 0; i < loadedBooks.length; i++) {
          newBookList[i].id = String(i);
          newBookList[i].priority = i + 1 ;
          createAPIEndpoint(ENDPOINTS.books).put(newBookList[i].bookId, newBookList[i]);
        };
        const sortBooks = [...newBookList].sort((a, b) => a.priority - b.priority);
        console.log(sortBooks);
        setIsLoadin(false);
        setLoadedBooks(sortBooks);
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
