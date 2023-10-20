import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import signupSlice from "./signupSlice";

const store = configureStore({
  reducer: {
    login: loginSlice,
    signup: signupSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
