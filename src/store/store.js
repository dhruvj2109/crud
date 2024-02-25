import { configureStore } from "@reduxjs/toolkit";
import  userDetails  from "../feature/UserDetailSlice";

export const store = configureStore({
    reducer: {
      [userDetails.name] : userDetails.reducer
  },
});