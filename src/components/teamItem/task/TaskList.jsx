/* eslint-disable no-unused-vars */
import { useState } from "react";
import classes from "./TaskList.module.css";
import ModalPrimary from "../../UI/ModalPrimary";

const TaskList = () => {
  const [openNewTask, setOpneNewTask] = useState(false);

  const openNewTaskHandler = () => {
    setOpneNewTask((prevState) => !prevState);
  };
  return (
    <>
      <div className={classes["task-container"]}>
        {!openNewTask && (
          <button
            className={classes["newtask-btn"]}
            onClick={openNewTaskHandler}
          >
            Create New Task
          </button>
        )}
        {openNewTask && (
          <ModalPrimary
            className={classes["teamlist-modal"]}
            onClose={openNewTaskHandler}
          >
            {/* <CreateTeamForm onClose={openNewTaskHandler} /> */}
            <h1>New Task Form</h1>
          </ModalPrimary>
        )}
      </div>
    </>
  );
};

export default TaskList;
