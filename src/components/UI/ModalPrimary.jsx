/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom";
import classes from "./ModalPrimary.module.css";

const ModalPrimary = ({ children, onClose }) => {
  const onCloseHandler = () => {
    onClose();
  };
  return ReactDOM.createPortal(
    <>
      <div className={classes.backdrop} onClick={onCloseHandler}></div>
      <div className={classes["modal-contailer"]}>
        <div className={classes["modal-content"]}>{children}</div>
        <div className={classes["modal-action"]}>
          <button>save</button>
          <button onClick={onCloseHandler}>close</button>
        </div>
      </div>
    </>,
    document.getElementById("overlay")
  );
};

export default ModalPrimary;
