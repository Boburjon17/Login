import { createSlice } from "@reduxjs/toolkit";
import { SetItem } from "../helpers/persistance-storage";

const initialState = {
  isLoading: false,
  isLogenIn: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userStart: (state) => {
      state.isLoading = true;
    },
    userSuccess: (state, actions) => {
      (state.isLoading = false), 
      (state.isLogenIn = true);
      state.user = actions.payload;

      SetItem("token", actions.payload.token);
      state.error = null;
    },
    userError: (state, actions) => {
      (state.isLoading = false), 
      (state.isLogenIn = false);
      state.error = actions.payload;
    },
    logoutUser: (state) => {
      (state.isLogenIn = false),
       (state.user = null);
    },
  },
});
export const { userStart, userSuccess, userError, logoutUser } =
  authSlice.actions;
export default authSlice.reducer;
