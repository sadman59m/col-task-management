/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const teamsSlice = createSlice({
  name: "teams",
  initialState: {
    teams: [],
    changed: false,
  },
  reducers: {
    createTeam(state, action) {
      const newTeamItem = action.payload;
      console.log(newTeamItem);
      state.teams = state.teams.concat(newTeamItem);
      state.changed = true;
    },
  },
});

export const teamsActions = teamsSlice.actions;
export default teamsSlice;
