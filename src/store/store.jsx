import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../reducers/reducer";
import ArticlesSlice from "../reducers/ArticlesSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    article: ArticlesSlice
  },
  devTools:process.env.NODE_ENV !== "production"
});
export default store;
