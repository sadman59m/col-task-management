/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import classes from "./NewTaskForm.module.css";
import { v4 as uuidv4 } from "uuid";
import { teamsActions } from "../../../store/teams-slice";
import { useDispatch } from "react-redux";

const NewTaskForm = ({
  onClose,
  teamId,
  taskId,
  title,
  description,
  dueDate,
  priority,
  status,
  newTaskReference,
  updateTaskReference,
}) => {
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();
  const prioRef = useRef();
  const statusRef = useRef();
  const [titleError, setTitleError] = useState(false);
  const [descError, setDescError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const dispatch = useDispatch();

  // for showing error message
  let errorContent;

  const submitHandler = (e) => {
    e.preventDefault();
    const taskStatus = statusRef.current.value.trim();
    if (newTaskReference) {
      const taskTitle = titleRef.current.value.trim();
      const taskDesc = descRef.current.value.trim();
      const taskDate = dateRef.current.value.trim();
      const taskPrio = prioRef.current.value.trim();

      // validate input data
      if (taskTitle.length < 3) {
        setTitleError(true);
        return;
      }
      setTitleError(false);

      if (taskDesc.length < 5) {
        setDescError(true);
        return;
      }
      setDescError(false);

      const currentDate = new Date();
      const today = currentDate.toISOString().split("T")[0];

      if (!taskDate || taskDate < today) {
        setDateError(true);
        return;
      }
      setDateError(false);

      // if all the validation passed

      // for new task creation
      if (newTaskReference) {
        const newTaskId = uuidv4();
        //construct new task object
        const newTaskItem = {
          id: newTaskId,
          teamId: teamId,
          title: taskTitle,
          description: taskDesc,
          dueDate: taskDate,
          priorityLevel: taskPrio,
          status: taskStatus,
        };

        // sent the to the redux state to be saved
        dispatch(teamsActions.addNewTask(newTaskItem));
      }
    }
    if (updateTaskReference) {
      const updatedTaskItem = {
        id: taskId,
        teamId: teamId,
        title: title,
        description: description,
        dueDate: dueDate,
        priorityLevel: priority,
        status: taskStatus,
      };
      dispatch(teamsActions.updateTask(updatedTaskItem));
    }

    //set form values to emply and close the modal
    if (newTaskReference) {
      titleRef.current.value = "";
      descRef.current.value = "";
      dateRef.current.value = "";
    }
    onClose();
  };

  //all the error contents
  const titleErrorContent = titleError ? (
    <p className={classes["error-msg"]}>
      Title must be at least 3 characters long
    </p>
  ) : null;
  const descErrorContent = descError ? (
    <p className={classes["error-msg"]}>
      Description must be at least 5 characters long
    </p>
  ) : null;
  const dateErrorContent = dateError ? (
    <p className={classes["error-msg"]}>Please, Enter a valid date.</p>
  ) : null;

  return (
    <form className={classes["task-form"]} onSubmit={submitHandler}>
      {newTaskReference && (
        <>
          <div>
            <label htmlFor="title">Task Title</label>
            <input
              id="title"
              name="title"
              ref={titleRef}
              defaultValue={title ? title : null}
              readOnly={title ? true : false}
            />
            {titleError && titleErrorContent}
          </div>
          <div>
            <label htmlFor="description">Task Description</label>
            <textarea
              id="description"
              type=""
              name="description"
              ref={descRef}
              defaultValue={description ? description : null}
              readOnly={description ? true : false}
            />
            {descError && descErrorContent}
          </div>
          <div>
            <label htmlFor="duedate">Due Date</label>
            <input
              id="duedate"
              name="duedate"
              type={"date"}
              ref={dateRef}
              defaultValue={dueDate ? dueDate : null}
              readOnly={dueDate ? true : false}
            />
            {dateError && dateErrorContent}
          </div>
          <div>
            <label htmlFor="priority">Priority Level</label>
            <select
              ref={prioRef}
              defaultValue={priority ? priority : "Low"}
              disabled={priority ? true : false}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </>
      )}
      <div>
        <label htmlFor="Status">Status</label>
        <select ref={statusRef} defaultValue={status ? status : "Idel"}>
          <option value="Idle">Idle</option>
          <option value="In progress">In progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className={classes["task-action"]}>
        <button className={classes["btn-save"]}>
          {newTaskReference ? "Create" : "Update"}
        </button>
        <button className={classes["btn-cancel"]} onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NewTaskForm;
