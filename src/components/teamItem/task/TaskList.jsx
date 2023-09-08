/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import classes from "./TaskList.module.css";
import ModalPrimary from "../../UI/ModalPrimary";
import NewTaskForm from "./NewTaskForm";

const TaskList = ({ tasks, teamId }) => {
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
            className={classes["task-modal"]}
            onClose={openNewTaskHandler}
          >
            {/* <CreateTeamForm onClose={openNewTaskHandler} /> */}
            <NewTaskForm onClose={openNewTaskHandler} teamId={teamId} />
          </ModalPrimary>
        )}
        <h2>Tasks</h2>
        {tasks && tasks.length <= 0 && <h3>No available tasks to show.</h3>}
        <ul className={classes["teamlist-ul"]}>
          {tasks.length > 0 &&
            tasks.map((item, index) => {
              return (
                // <TeamItem
                //   className={classes["teamlist-li"]}
                //   key={index}
                //   id={item.id}
                //   title={item.title}
                //   creator={item.creatorName}
                //   memberNumber={item.members.length}
                //   taskNumber={item.tasks.length}
                // />
                <h1 key={index}>Task</h1>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
