import { BASE_URL } from "../../api";
import BookItem from "./BookItem";
import classes from "./BookList.module.css";

function BookList(props) {
  return (
    <ul className={classes.list}>
      {props.books.map((book) => (
        <BookItem
          key={book.bookId}
          id={book.bookId}
          title={book.title}
          author={book.author}
          description={book.description}
          image={book.image == null ? null : BASE_URL + "/images/" + book.image}
          alreadyRead={book.alreadyRead}
          toRead={book.toRead}
          priority={book.priority}
          book={book}
        />
      ))}
    </ul>
  );
}

export default BookList;
