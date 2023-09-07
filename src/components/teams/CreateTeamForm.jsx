/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import classes from "./CreateTeamForm.module.css";

const CreateTeamForm = ({ onClose }) => {
  //handle form submittion
  const onCloseHandler = () => {
    onClose();
  };
  const submitHandler = (e) => {
    //prevent synthetic events
    e.preventDefault();
    onClose();
  };
  return (
    <form className={classes["team-form"]} onSubmit={submitHandler}>
      <p>
        <label htmlFor="title">Team Title</label>
        <input id="title" name="title" />
      </p>
      <div className={classes["team-action"]}>
        <button>Create</button>
        <button onClick={onCloseHandler}>Cancel</button>
      </div>
    </form>
  );
};

export default CreateTeamForm;
