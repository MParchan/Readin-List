import React, { useState } from "react";

import Backdrop from "../ui/Backdrop";
import Modal from "../ui/Modal";
import Card from "../ui/Card";
import classes from "./BookItem.module.css";
import { createAPIEndpoint, ENDPOINTS } from "../../api";

function BookItem(props) {
  const [read, setRead] = useState(props.alreadyRead);
  const [toRead, setToRead] = useState(props.toRead);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  function deleteConfirmHandler() {
    setModalIsOpen(false);
    setVisible(false);
  }

  function toggleAlredyReadBooksHandler() {
    props.book.alreadyRead = props.book.alreadyRead ? false : true;
    createAPIEndpoint(ENDPOINTS.books).put(props.id, props.book);
    setRead(props.book.alreadyRead);
  }

  function toggleToReadBooksHandler() {
    props.book.toRead = props.book.toRead ? false : true;
    setToRead(props.book.toRead);
    if (props.book.toRead === false) {
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
      {visible && (
        <Card>
          <div className={classes.card}>
            {props.imageName == null ? null : (
              <div className={classes.image}>
                <img src={props.imageName} alt={props.title} />
              </div>
            )}
            {props.imageName == null ? (
              <div className={classes.contentNoImg}>
                <div className={classes.close} onClick={deleteHandler}></div>
                <h3>{props.title}</h3>
                <p>{props.author}</p>
              </div>
            ) : (
              <div className={classes.content}>
                <div className={classes.close} onClick={deleteHandler}></div>
                <h3>{props.title}</h3>
                <p>{props.author}</p>
              </div>
            )}
            <div className={classes.description}>
              <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
              <button onClick={toggleAlredyReadBooksHandler}>
                {read ? "Unmark the book as read" : "Mark the book as read"}
              </button>
              <button onClick={toggleToReadBooksHandler}>
                {toRead
                  ? "Remove the book from to read"
                  : "Add the book to read"}
              </button>
            </div>
          </div>
        </Card>
      )}
      {modalIsOpen && (
        <Modal
          onCancel={closeModalHandler}
          id={props.id}
          onConfirm={deleteConfirmHandler}
        />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </li>
  );
}

export default BookItem;
