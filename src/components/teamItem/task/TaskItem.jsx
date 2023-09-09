/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import classes from "./TaskItem.module.css";
import ModalPrimary from "../../UI/ModalPrimary";
import NewTaskForm from "./NewTaskForm";
import { teamsActions } from "../../../store/teams-slice";
import { useDispatch } from "react-redux";

const TaskItem = ({
  taskId,
  title,
  description,
  dueDate,
  priority,
  status,
  teamId,
}) => {
  const [openUpdateTask, setOpenUpdateTask] = useState(false);
  const dispatch = useDispatch();

  const openUpdateTaskHandler = () => {
    setOpenUpdateTask((prevState) => !prevState);
  };

  // to delete a task
  const deleteTaskHander = () => {
    const taskInfo = {
      taskId: taskId,
      teamId: teamId,
    };
    const confirmDelete = window.confirm("Cofirm Delete?");
    if (confirmDelete) {
      dispatch(teamsActions.removeTask(taskInfo));
    }
    return;
  };

  let statusColor, isCompleted, colorUderline;
  if (status === "Pending") {
    statusColor = classes.red;
    colorUderline = classes.redUnderline;
  } else if (status === "In progress") {
    statusColor = classes.orange;
    colorUderline = classes.orangeUnderline;
  } else if (status === "Completed") {
    statusColor = classes.green;
    isCompleted = classes.completed;
    colorUderline = classes.greenUnderline;
  }

  let prioColor;
  if (priority === "High") {
    prioColor = classes.red;
  } else if (priority === "Medium") {
    prioColor = classes.orange;
  } else if (priority === "Low") {
    prioColor = classes.green;
  }

  return (
    <li className={`${classes["taskitem-list"]} ${colorUderline}`}>
      <div className={`${classes["taskitem-content"]} ${isCompleted}`}>
        <p className={`${classes["taskitem-content-title"]} ${statusColor}`}>
          {title}
        </p>
        <p className={classes["taskitem-content-description"]}>{description}</p>
      </div>
      <div className={`${classes["taskitem-detail"]} ${isCompleted}`}>
        <div className={classes["taskitem-detail-content"]}>
          <p>{`Due: `}</p>
          <p className={classes["due-date"]}>{dueDate}</p>
        </div>
        <div className={classes["taskitem-detail-content"]}>
          <p>{`Priority: `}</p>
          <p className={`${classes.priority} ${prioColor}`}>{priority}</p>
        </div>
        <div className={classes["taskitem-detail-content"]}>
          <p>{`Status: `}</p>
          <p className={`${classes.status} ${statusColor}`}>{status}</p>
        </div>
      </div>
      <div className={classes["taskitem-action"]}>
        {!openUpdateTask && (
          <button
            className={classes["update-btn"]}
            onClick={openUpdateTaskHandler}
          >
            Update Task Status
          </button>
        )}
        {openUpdateTask && (
          <ModalPrimary
            className={classes["task-modal"]}
            onClose={openUpdateTaskHandler}
          >
            <NewTaskForm
              onClose={openUpdateTaskHandler}
              taskId={taskId}
              teamId={teamId}
              title={title}
              description={description}
              priority={priority}
              dueDate={dueDate}
              status={status}
              newTaskReference={false}
              updateTaskReference={true}
            />
          </ModalPrimary>
        )}
        <button className={classes["delete-btn"]} onClick={deleteTaskHander}>
          Delete Task
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
