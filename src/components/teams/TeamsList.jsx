/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";

import classes from "./TeamsList.module.css";
import { useState } from "react";
import ModalPrimary from "../UI/ModalPrimary";
import CreateTeamForm from "./CreateTeamForm";

const TeamsList = () => {
  const [openCreateTeam, setOpenCreateTeam] = useState(false);
  // fetch all teams from redux state
  // dispatch to handle actions
  const allTeams = useSelector((state) => state.teams);
  //   const dispatch = useDispatch();
  console.log(allTeams);
  const openCreateTeamHandler = () => {
    setOpenCreateTeam((prevState) => !prevState);
  };
  return (
    <>
      <div className={classes["teamlist-container"]}>
        {!openCreateTeam && (
          <button
            className={classes["newteam-btn"]}
            onClick={openCreateTeamHandler}
          >
            Create New Team
          </button>
        )}
        {openCreateTeam && (
          <ModalPrimary onClose={openCreateTeamHandler}>
            <CreateTeamForm onClose={openCreateTeamHandler} />
          </ModalPrimary>
        )}
        <h2>Your teams</h2>
        <ul className={classes["teamlist-ul"]}>
          <li className={classes["teamlist-li"]}>Team1</li>
          <li className={classes["teamlist-li"]}>Team2</li>
        </ul>
      </div>
    </>
  );
};

export default TeamsList;
