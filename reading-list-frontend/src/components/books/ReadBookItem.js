import { useState } from "react";

import Card from "../ui/Card";
import classes from "./BookItem.module.css";
import { createAPIEndpoint, ENDPOINTS } from "../../api";

function ReadBookItem(props) {
  const [visible, setVisible] = useState(true);
  function RemoveReadBookHandler() {
    props.book.alreadyRead = false;
    createAPIEndpoint(ENDPOINTS.books).put(props.id, props.book);
    setVisible(false);
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
            <div className={classes.content}>
              <h3>{props.title}</h3>
              <p>{props.author}</p>
            </div>
            <div className={classes.description}>
              <p>{props.description}</p>
            </div>
            <div className={classes.actions} onClick={RemoveReadBookHandler}>
              <button>Remove from read books</button>
            </div>
          </div>
        </Card>
      )}
    </li>
  );
}

export default ReadBookItem;
