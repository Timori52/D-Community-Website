import { createSlice } from "@reduxjs/toolkit";

const storedUserType = localStorage.getItem("userType");

const initialUserType = {
  userIsDeveloper: storedUserType === "developer" ? true : false,
  userIsClient: storedUserType === "client" ? true : false,
  userIsVendor: storedUserType === "vendor" ? true : false,
  userIsAdmin: storedUserType === "admin" ? true : false,
};

const userTypeSlice = createSlice({
  name: "User Type Slice",
  initialState: initialUserType,
  reducers: {
    defineUserType(state, action) {
      switch (action.payload) {
        case "developer":
          state.userIsDeveloper = true;
          state.userIsClient = false;
          state.userIsVendor = false;
          state.userIsAdmin = false;
          localStorage.setItem("userType", action.payload);
          break;
        case "client":
          state.userIsClient = true;
          state.userIsDeveloper = false;
          state.userIsVendor = false;
          state.userIsAdmin = false;
          localStorage.setItem("userType", action.payload);
          break;
        case "vendor":
          state.userIsVendor = true;
          state.userIsClient = false;
          state.userIsDeveloper = false;
          state.userIsAdmin = false;
          localStorage.setItem("userType", action.payload);
          break;
        case "admin":
          state.userIsAdmin = true;
          state.userIsVendor = false;
          state.userIsClient = false;
          state.userIsDeveloper = false;
          localStorage.setItem("userType", action.payload);
          break;
        default:
          break;
      }
    },
  },
});

export const userTypeSliceActions = userTypeSlice.actions;

export default userTypeSlice;
