import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counter";
import taskReducer from "./features/task/taskSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
