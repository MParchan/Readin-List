import { BASE_URL } from "../../api";
import ReadBookItem from "./ReadBookItem";
import classes from "./BookList.module.css";

function ReadBookList(props) {
  return (
    <ul className={classes.list}>
      {props.books.map((book) => (
        <ReadBookItem
          key={book.bookId}
          id={book.bookId}
          title={book.title}
          author={book.author}
          description={book.description}
          imageName={
            book.imageName == null
              ? null
              : BASE_URL + "/images/" + book.imageName
          }
          alreadyRead={book.alreadyRead}
          priority={book.priority}
          toRead={book.toRead}
          book={book}
        />
      ))}
    </ul>
  );
}

export default ReadBookList;
