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
        {!openUpdateTask && (
          <button
            className={classes["update-btn"]}
            onClick={openUpdateTaskHandler}
          >
            Update Task
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
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
