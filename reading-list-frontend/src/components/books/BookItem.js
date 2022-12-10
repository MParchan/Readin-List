import React, { useState } from "react";

import Card from "../ui/Card";
import classes from "./BookItem.module.css";
import { createAPIEndpoint, ENDPOINTS } from "../../api";

function BookItem(props) {
  const [read, setRead] = useState(props.alreadyRead);
  const [toRead, setToRead] = useState(props.toRead);

  function toggleAlredyReadBooksHandler() {
    props.book.alreadyRead = props.book.alreadyRead ? false : true;
    createAPIEndpoint(ENDPOINTS.books).put(props.id, props.book);
    setRead(props.book.alreadyRead);
  }

  function toggleToReadBooksHandler() {
    props.book.toRead = props.book.toRead ? false : true;
    setToRead(props.book.toRead);
    if(props.book.toRead === false){
    props.book.priority = 0;
    createAPIEndpoint(ENDPOINTS.books).put(props.id, props.book);
    } else {
      createAPIEndpoint(ENDPOINTS.books)
      .get("ToRead")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        props.book.priority = data.length + 1;
        createAPIEndpoint(ENDPOINTS.books).put(props.id, props.book);
      });
    }
    
  }

  return (
    <li className={classes.item}>
      <Card>
        {props.image == null ? null : (
          <div className={classes.image}>
            <img src={props.image} alt={props.title} />
          </div>
        )}

        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.author}</p>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleAlredyReadBooksHandler}>
            {read ? "Unmark the book as read" : "Mark the book as read"}
          </button>
          <button onClick={toggleToReadBooksHandler}>
            {toRead ? "Remove the book from to read" : "Add the book to read"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default BookItem;
