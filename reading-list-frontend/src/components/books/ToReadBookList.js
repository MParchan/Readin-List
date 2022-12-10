import { BASE_URL } from "../../api";
import ToReadBookItem from "./ToReadBookItem";
import classes from "./BookList.module.css";
import { Droppable } from "react-beautiful-dnd";

function ToReadBookList(props) {
  return (
    <Droppable droppableId="ToReadBookList ">
      {(provided) => (
        <ul
          className={classes.list}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {props.books.map((book, index) => (
            <ToReadBookItem
              key={book.bookId}
              id={book.bookId}
              title={book.title}
              author={book.author}
              description={book.description}
              image={
                book.image == null ? null : BASE_URL + "/images/" + book.image
              }
              alreadyRead={book.alreadyRead}
              toRead={book.toRead}
              priority={book.priority}
              book={book}
              index={index}
            />
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}

export default ToReadBookList;
