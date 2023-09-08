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
    addNewTask(state, action) {
      const newTaskItem = action.payload;
      const teamId = newTaskItem.teamId;

      const targetTeam = state.teams.findIndex((team) => team.id === teamId);
      console.log(state.teams[targetTeam].tasks);

      // adding new task to the task array of the target team
      state.teams[targetTeam].tasks =
        state.teams[targetTeam].tasks.concat(newTaskItem);
      state.changed = true;
    },
  },
});

export const teamsActions = teamsSlice.actions;
export default teamsSlice;
