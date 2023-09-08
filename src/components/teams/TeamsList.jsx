/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";

import classes from "./TeamsList.module.css";
import { useEffect, useState } from "react";
import ModalPrimary from "../UI/ModalPrimary";
import CreateTeamForm from "./CreateTeamForm";
import TeamItem from "./TeamItem";
import { getToken } from "../../util/auth";
import { getTeams, setTeams } from "../../store/teams-action";
import { useNavigate } from "react-router-dom";

const TeamsList = () => {
  const [openCreateTeam, setOpenCreateTeam] = useState(false);
  const dispatch = useDispatch();
  // fetch all teams from redux state
  // dispatch to handle actions
  const stateTeams = useSelector((state) => state.teams);
  const allTeams = stateTeams.teams;
  const token = getToken();

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  useEffect(() => {
    if (stateTeams.changed) {
      dispatch(setTeams(stateTeams.teams));
    }
  }, [stateTeams, dispatch]);

  const adminTeams = allTeams.filter((team) => team.creatorId === token);
  const memberTeams = [];

  // find all the teams where current user is part of

  allTeams.forEach((team) => {
    if (team.creatorId !== token) {
      team.members.forEach((member) => {
        if (member.email === token) {
          memberTeams.push(team);
        }
      });
    }
  });
  console.log(memberTeams);
  const teams = adminTeams.concat(memberTeams);
  console.log(teams);

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
          <ModalPrimary
            className={classes["teamlist-modal"]}
            onClose={openCreateTeamHandler}
          >
            <CreateTeamForm onClose={openCreateTeamHandler} />
          </ModalPrimary>
        )}
        <h2>{`Your Teams (${teams.length})`}</h2>
        {teams && teams.length <= 0 && <h3>No available teams to show.</h3>}
        <ul className={classes["teamlist-ul"]}>
          {teams.length > 0 &&
            teams.map((item, index) => {
              return (
                <TeamItem
                  className={classes["teamlist-li"]}
                  key={index}
                  id={item.id}
                  title={item.title}
                  creator={item.creatorName}
                  memberNumber={item.members.length}
                  taskNumber={item.tasks.length}
                />
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default TeamsList;
