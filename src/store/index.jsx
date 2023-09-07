import { configureStore } from "@reduxjs/toolkit";

import teamsSlice from "./teams-slice";

const store = configureStore({
  reducer: {
    teams: teamsSlice.reducer,
  },
});

export default store;
