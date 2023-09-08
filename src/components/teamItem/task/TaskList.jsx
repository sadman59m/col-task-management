/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import classes from "./TaskList.module.css";
import ModalPrimary from "../../UI/ModalPrimary";
import NewTaskForm from "./NewTaskForm";
import TaskItem from "./TaskItem";

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
            <NewTaskForm
              onClose={openNewTaskHandler}
              teamId={teamId}
              newTaskReference={true}
              updateTaskReference={false}
            />
          </ModalPrimary>
        )}
        <h2>All Tasks</h2>
        {tasks.length <= 0 && <h3>No available tasks to show.</h3>}
        <ul className={classes["tasklist-ul"]}>
          {tasks.length > 0 &&
            tasks.map((item, index) => {
              return (
                <TaskItem
                  key={index}
                  taskId={item.id}
                  title={item.title}
                  description={item.description}
                  priority={item.priorityLevel}
                  dueDate={item.dueDate}
                  status={item.status}
                  teamId={teamId}
                />
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
