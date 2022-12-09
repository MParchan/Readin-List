import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewBookForm.module.css";

function NewBookForm(props) {
  const titleInputRef = useRef();
  const authorInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredAuthor = authorInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const bookData = {
      title: enteredTitle,
      author: enteredAuthor,
      description: enteredDescription,
      alredyRead: false,
      toRead: false,
      priority: 0,
    };
    props.onAddBook(bookData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Book Title</label>
          <input type="text" required={true} id="tittle" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input type="text" required={true} id="author" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required={true}
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Book</button>
        </div>
      </form>
    </Card>
  );
}
export default NewBookForm;
