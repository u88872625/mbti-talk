import { configureStore } from "@reduxjs/toolkit";
import userStore from "./modules/user";

export const store = configureStore({
  reducer: {
    user: userStore,
  },
});
