/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import classes from "./Error.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className={classes["error-content"]}>
      <h3>Something went wrong. Try again later.</h3>
    </div>
  );
};

export default ErrorMessage;
