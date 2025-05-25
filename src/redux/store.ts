import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/task/taskSlice";
import userReduce from "./features/users/userSlice";

export const store = configureStore({
  reducer: {
    todo: taskReducer,
    user: userReduce,
  },
}); 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
