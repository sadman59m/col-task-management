/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import classes from "./CreateTeamForm.module.css";
import { teamsActions } from "../../store/teams-slice";
import { getUserData } from "../../util/userInfo";
import { getToken } from "../../util/auth";

const CreateTeamForm = ({ onClose }) => {
  const [hasError, setHasEror] = useState(false);
  const titleRef = useRef();
  const dispatch = useDispatch();

  // excuting the getToken() fn for the email and get user info uisng the email
  const userInfo = getUserData(getToken());

  //handle form submittion
  const onCloseHandler = () => {
    onClose();
  };

  const submitHandler = (e) => {
    //prevent synthetic events
    e.preventDefault();
    const teamTitle = titleRef.current.value;
    if (teamTitle.trim().length <= 0) {
      setHasEror(true);
      return;
    }

    // new team object to push into state
    const members = [];
    const singleMember = {
      email: userInfo.email,
      userName: userInfo.userName,
    };
    members.push(singleMember);
    const newTeamId = uuidv4();
    const newTeam = {
      id: newTeamId,
      title: teamTitle,
      creatorId: userInfo.email,
      creatorName: userInfo.userName,
      members: members,
      tasks: [],
    };
    // push into state
    dispatch(teamsActions.createNewTeam(newTeam));
    titleRef.current.value = "";
    onClose();
  };
  return (
    <form className={classes["team-form"]} onSubmit={submitHandler}>
      {hasError && (
        <p className={classes["error-msg"]}>
          Team title should be at least 5 character long
        </p>
      )}
      <p>
        <label htmlFor="title">Team Title</label>
        <input id="title" name="title" ref={titleRef} />
      </p>
      <div className={classes["team-action"]}>
        <button className={classes["btn-save"]}>Create</button>
        <button className={classes["btn-cancel"]} onClick={onCloseHandler}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CreateTeamForm;
