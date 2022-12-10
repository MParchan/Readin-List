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
    setVisible((prev) => !prev);
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
              {/*props.image == null ? null : (
                <div className={classes.image}>
                  <img src={props.image} alt={props.title} />
                </div>
              )*/}
              <div className={classes.content}>
                <h3>
                  {props.title} {props.id}
                </h3>
                <p>{props.author}</p>
                <p>{props.description}</p>
              </div>
              <div
                className={classes.actions}
                onClick={RemoveToReadBookHandler}
              >
                <button>Remove from read books</button>
              </div>
            </Card>
          )}
        </li>
      )}
    </Draggable>
  );
}

export default ToReadBookItem;
