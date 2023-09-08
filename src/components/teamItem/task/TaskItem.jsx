/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import classes from "./TaskItem.module.css";

const TaskItem = ({ title, description, dueDate, priority, status }) => {
  return (
    <li className={classes["taskitem-list"]}>
      <div className={classes["taskitem-content"]}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={classes["taskitem-details"]}>
        <p>{dueDate}</p>
        <p>{priority}</p>
        <p>{status}</p>
      </div>
      <div className={classes["taskitem-actions"]}>
        <button>Update</button>
        <button>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
