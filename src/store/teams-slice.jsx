/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const teamsSlice = createSlice({
  name: "teams",
  initialState: {
    members: [],
    tasks: [],
    creator: "",
    changed: false,
  },
  reducers: {
    createTeam(state, action) {
      //func body
      return null;
    },
  },
});

export const teamsAction = teamsSlice.actions;
export default teamsSlice;
