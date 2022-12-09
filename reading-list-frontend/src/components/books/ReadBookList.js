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
          image={book.image == null ? null : BASE_URL + "/images/" + book.image}
          alreadyRead={book.alreadyRead}
          toRead={book.toRead}
          book={book}
        />
      ))}
    </ul>
  );
}

export default ReadBookList;
