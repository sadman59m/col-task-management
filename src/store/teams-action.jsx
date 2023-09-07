/* eslint-disable no-unused-vars */
import { teamsActions } from "./teams-slice";

export const getTeams = () => {
  return (dispatch) => {
    const teams = JSON.parse(localStorage.getItem("teams")) || [];
    dispatch(teamsActions.replaceTeams(teams));
  };
};

export const setTeams = (teams) => {
  return (dispatch) => {
    localStorage.setItem("teams", JSON.stringify(teams));
  };
};
