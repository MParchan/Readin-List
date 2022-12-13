import classes from "./Modal.module.css";

import { createAPIEndpoint, ENDPOINTS } from "../../api";

function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
    createAPIEndpoint(ENDPOINTS.books).delete(props.id);
  }

  return (
    <div className={classes.modal}>
      <p>Are you sure you want to delete the book?</p>
      <button className={classes.btn} onClick={cancelHandler}>
        Cancel
      </button>
      <button className={classes.btn} onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
