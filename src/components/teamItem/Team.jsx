/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import classes from "./team.module.css";

const Team = ({ teamId }) => {
  const allTeams = useSelector((state) => state.teams);
  console.log(allTeams);
  const team = allTeams.teams.find((team) => team.id === teamId);
  if (team) {
    console.log(team);
  } else {
    throw new Error("invalid");
  }
  return <div className={classes.team}>{teamId}</div>;
};

export default Team;
