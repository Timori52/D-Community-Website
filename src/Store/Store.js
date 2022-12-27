import { configureStore } from "@reduxjs/toolkit";

import authenticationSlice from "./AuthenticationSlice";
import userTypeSlice from "./UserTypeSlice";

const store = configureStore({
  reducer: {
    authentication: authenticationSlice.reducer,
    userType: userTypeSlice.reducer,
  },
});

export default store;
