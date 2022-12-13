import { useNavigate } from "react-router-dom";

import { createAPIEndpoint, ENDPOINTS } from "../api";
import NewBookForm from "../components/books/NewBookForm";
import classes from "./Pages.module.css";

function NewBook() {
  const navigate = useNavigate();
  function addBookHandler(formData) {
    createAPIEndpoint(ENDPOINTS.books)
      .post(formData)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  }
  return (
    <section>
      <h1 className={classes.textCenter}>Add new book</h1>
      <NewBookForm onAddBook={addBookHandler} />
    </section>
  );
}

export default NewBook;
