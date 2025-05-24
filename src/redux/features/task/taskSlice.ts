import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { ITask } from "../../types";
import type { RootState } from "../../store";

interface InitialState {
  tasks: ITask[];
  filter: "ALL" | "Heigh" | "Medium" | "Low";
}

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return {
    id: nanoid(),
    isCompleted: false,
    ...taskData,
  };
};

const initialState: InitialState = {
  tasks: [
    {
      id: "01",
      title: "Frontend Development",
      description: "HTML,CSS,JavaScript",
      dueDate: new Date("2025-05-10"),
      isCompleted: false,
      priority: "Heigh",
    },
    {
      id: "02",
      title: "Backend Development",
      description: "Node,Express,MongoDB",
      dueDate: new Date("2025-05-10"),
      isCompleted: false,
      priority: "Medium",
    },
  ],
  filter: "ALL",
};



const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
  },
});



export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggleCompleteState, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
