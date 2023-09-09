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
      // adding new task to the task array of the target team
      state.teams[targetTeam].tasks =
        state.teams[targetTeam].tasks.concat(newTaskItem);
      state.changed = true;
    },
    updateTask(state, action) {
      const updatedTaskItem = action.payload;
      const taskId = updatedTaskItem.id;
      const teamId = updatedTaskItem.teamId;
      // serach for the target team and then the target task to be updated
      const targetTeamIndex = state.teams.findIndex(
        (team) => team.id === teamId
      );
      const targetTaskIndex = state.teams[targetTeamIndex].tasks.findIndex(
        (task) => task.id === taskId
      );
      // we can directly replace the item
      // redux will do the copy and replace for us
      state.teams[targetTeamIndex].tasks[targetTaskIndex] = updatedTaskItem;
      state.changed = true;
    },
    removeTask(state, action) {
      const taskId = action.payload.taskId;
      const teamId = action.payload.teamId;
      console.log(taskId);
      console.log(teamId);
      const targetTeamIndex = state.teams.findIndex(
        (team) => team.id === teamId
      );
      // remove the task item from the target team
      state.teams[targetTeamIndex].tasks = state.teams[
        targetTeamIndex
      ].tasks.filter((task) => task.id !== taskId);
      state.changed = true;
    },
    addMember(state, action) {
      const memberItem = action.payload;
      const teamId = memberItem.teamId;
      const newMemberItem = {
        email: memberItem.email,
        userName: memberItem.userName,
      };
      const targetTeamIndex = state.teams.findIndex(
        (team) => team.id === teamId
      );
      state.teams[targetTeamIndex].members =
        state.teams[targetTeamIndex].members.concat(newMemberItem);
      state.changed = true;
    },
    removeMemberFromTeam(state, action) {
      const removeMemberIteam = action.payload;
      const teamId = removeMemberIteam.teamId;
      const eamil = removeMemberIteam.email;
      const targetTeamIndex = state.teams.findIndex(
        (team) => team.id === teamId
      );
      state.teams[targetTeamIndex].members = state.teams[
        targetTeamIndex
      ].members.filter((member) => member.email !== eamil);
      state.changed = true;
    },
    removeTeam(state, action) {
      const teamId = action.payload;
      console.log(teamId);
      state.teams = state.teams.filter((team) => team.id !== teamId);
      state.changed = true;
    },
  },
});

export const teamsActions = teamsSlice.actions;
export default teamsSlice;
