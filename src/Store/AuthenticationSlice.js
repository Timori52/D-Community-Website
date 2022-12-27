import { createSlice } from "@reduxjs/toolkit";

const initialIdToken = localStorage.getItem("idToken");

const initialUserLogInState = {
  idToken: initialIdToken,
  isLoggedIn: !!initialIdToken,
};

const authenticationSlice = createSlice({
  name: "User LogIn Slice",
  initialState: initialUserLogInState,
  reducers: {
    logIn(state, action) {
      state.idToken = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("idToken", action.payload);
    },
    logOut(state) {
      state.idToken = "";
      state.isLoggedIn = false;
      localStorage.removeItem("idToken");
      localStorage.removeItem("userType");
    },
  },
});

export const authenticationSliceActions = authenticationSlice.actions;

export default authenticationSlice;
