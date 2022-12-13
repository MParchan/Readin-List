import { useState } from "react";

import Card from "../ui/Card";
import classes from "./BookItem.module.css";
import { createAPIEndpoint, ENDPOINTS } from "../../api";
import { Draggable } from "react-beautiful-dnd";

function ToReadBookItem(props) {
  const [visible, setVisible] = useState(true);
  function RemoveToReadBookHandler() {
    props.book.toRead = false;
    props.book.priority = 0;
    createAPIEndpoint(ENDPOINTS.books).put(props.id, props.book);
    setVisible(false);
  }

  return (
    <Draggable draggableId={String(props.id)} index={props.index}>
      {(provider) => (
        <li
          className={classes.item}
          {...provider.dragHandleProps}
          {...provider.draggableProps}
          ref={provider.innerRef}
        >
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
                <div
                  className={classes.actions}
                  onClick={RemoveToReadBookHandler}
                >
                  <button>Remove from books to read</button>
                </div>
              </div>
            </Card>
          )}
        </li>
      )}
    </Draggable>
  );
}

export default ToReadBookItem;
