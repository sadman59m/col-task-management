/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import classes from "./NewTaskForm.module.css";
import { v4 as uuidv4 } from "uuid";
import { teamsActions } from "../../../store/teams-slice";
import { useDispatch } from "react-redux";

const NewTaskForm = ({ onClose, teamId }) => {
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();
  const prioRef = useRef();
  const statusRef = useRef();
  const [titleError, setTitleError] = useState(false);
  const [descError, setDescError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const dispatch = useDispatch();
  console.log(teamId);

  // for showing error message
  let errorContent;

  const submitHandler = (e) => {
    e.preventDefault();
    const taskTitle = titleRef.current.value.trim();
    const taskDesc = descRef.current.value.trim();
    const taskDate = dateRef.current.value.trim();
    const taskPrio = prioRef.current.value.trim();
    const taskStatus = statusRef.current.value.trim();

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

    const newTaskId = uuidv4();
    //construct new task object
    const newTask = {
      id: newTaskId,
      teamId: teamId,
      title: taskTitle,
      description: taskDesc,
      dueDate: taskDate,
      priorityLevel: taskPrio,
      status: taskStatus,
    };

    // sent the to the redux state to be saved
    dispatch(teamsActions.addNewTask(newTask));

    //set form values to emply and close the modal
    titleRef.current.value = "";
    descRef.current.value = "";
    dateRef.current.value = "";
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
      <div>
        <label htmlFor="title">Task Title</label>
        <input id="title" name="title" ref={titleRef} />
        {titleError && titleErrorContent}
      </div>
      <div>
        <label htmlFor="description">Task Description</label>
        <input id="description" name="description" ref={descRef} />
        {descError && descErrorContent}
      </div>
      <div>
        <label htmlFor="duedate">Due Date</label>
        <input id="duedate" name="duedate" type={"date"} ref={dateRef} />
        {dateError && dateErrorContent}
      </div>
      <div>
        <label htmlFor="priority">Priority Level</label>
        <select ref={prioRef}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div>
        <label htmlFor="Status">Status</label>
        <select ref={statusRef}>
          <option value="Idle">Idle</option>
          <option value="In progress">In progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className={classes["task-action"]}>
        <button className={classes["btn-save"]}>Create</button>
        <button className={classes["btn-cancel"]} onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NewTaskForm;
