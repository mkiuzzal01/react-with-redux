import { createSlice } from "@reduxjs/toolkit";
import type { ITask } from "../../types";
import type { RootState } from "../../store";

interface InitialState {
  tasks: ITask[];
  filter: "ALL" | "Heigh" | "Medium" | "Low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "01",
      title: "Frontend Development",
      description: "HTML,CSS,JavaScript",
      dueDate: "2025-05-10",
      isCompleted: false,
      priority: "Heigh",
    },
    {
      id: "02",
      title: "Backend Development",
      description: "Node,Express,MongoDB",
      dueDate: "2026-05-10",
      isCompleted: false,
      priority: "Medium",
    },
  ],
  filter: "ALL",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
