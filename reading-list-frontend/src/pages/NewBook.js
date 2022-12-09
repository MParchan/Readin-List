import { useNavigate } from "react-router-dom";

import { createAPIEndpoint, ENDPOINTS } from "../api";
import NewBookForm from "../components/books/NewBookForm";

function NewBook() {
  const navigate = useNavigate();
  function addBookHandler(bookData) {
    createAPIEndpoint(ENDPOINTS.books)
      .post(bookData)
      .then(() => {
        navigate("/");
      });
  }
  return (
    <section>
      <h1>Add New Book</h1>
      <NewBookForm onAddBook={addBookHandler} />
    </section>
  );
}

export default NewBook;
