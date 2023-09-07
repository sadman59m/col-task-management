/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const teamsSlice = createSlice({
  name: "teams",
  initialState: {
    teams: [],
    changed: false,
  },
  reducers: {
    replaceTeams(state, action) {
      const teams = action.payload;
      state.teams = teams;
      state.changed = false;
    },
    createNewTeam(state, action) {
      const newTeamItem = action.payload;
      state.teams = state.teams.concat(newTeamItem);
      state.changed = true;
    },
  },
});

export const teamsActions = teamsSlice.actions;
export default teamsSlice;
