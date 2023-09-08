/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import classes from "./TaskItem.module.css";

const TaskItem = ({ title, description, dueDate, priority, status }) => {
  return (
    <li className={classes["taskitem-list"]}>
      <div className={classes["taskitem-content"]}>
        <p className={classes["taskitem-content-title"]}>{title}</p>
        <p className={classes["taskitem-content-description"]}>{description}</p>
      </div>
      <div className={classes["taskitem-detail"]}>
        <div className={classes["taskitem-detail-content"]}>
          <p>{`Due: `}</p>
          <p className={classes["due-date"]}>{dueDate}</p>
        </div>
        <div className={classes["taskitem-detail-content"]}>
          <p>{`Priority: `}</p>
          <p className={classes.priority}>{priority}</p>
        </div>
        <div className={classes["taskitem-detail-content"]}>
          <p>{`Status: `}</p>
          <p className={classes.status}>{status}</p>
        </div>
      </div>
      <div className={classes["taskitem-action"]}>
        <button className={classes["update-btn"]}>Update</button>
        <button className={classes["delete-btn"]}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
