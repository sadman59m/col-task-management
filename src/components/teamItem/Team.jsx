/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./team.module.css";
import { setTeams } from "../../store/teams-action";

const Team = ({ team }) => {
  const stateTeams = useSelector((state) => state.teams);
  const dispatch = useDispatch();

  useEffect(() => {
    if (stateTeams.changed) {
      dispatch(setTeams(stateTeams.teams));
    }
  }, [stateTeams, dispatch]);

  return (
    <div className={classes.team}>
      {team.title} {team.id}
    </div>
  );
};

export default Team;
