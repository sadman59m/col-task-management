/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom";
import classes from "./ModalPrimary.module.css";

const ModalPrimary = ({ children, onClose, className }) => {
  const onCloseHandler = () => {
    onClose();
  };
  return ReactDOM.createPortal(
    <>
      <div className={classes.backdrop} onClick={onCloseHandler}></div>
      <div className={`${classes["modal-contailer"]} ${className}`}>
        <div className={classes["modal-content"]}>{children}</div>
      </div>
    </>,
    document.getElementById("overlay")
  );
};

export default ModalPrimary;
