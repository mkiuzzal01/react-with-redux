import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { ITask } from "../../types";
import type { RootState } from "../../store";
import { deleteUser } from "../users/userSlice";

interface InitialState {
  tasks: ITask[];
  filter: "ALL" | "Heigh" | "Medium" | "Low";
}

type DraftTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority" | "assignedUser"
>;

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
      assignedUser: null,
    },
    {
      id: "02",
      title: "Backend Development",
      description: "Node,Express,MongoDB",
      dueDate: new Date("2025-05-10"),
      isCompleted: false,
      priority: "Medium",
      assignedUser: null,
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

    updateFilter: (
      state,
      action: PayloadAction<"ALL" | "Heigh" | "Medium" | "Low">
    ) => {
      state.filter = action.payload;
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteUser, (state, action) => {
      state.tasks.forEach((task) =>
        task.assignedUser && task.assignedUser === action.payload
          ? (task.assignedUser = null)
          : task.assignedUser
      );
    });
  },
});

export const selectTask = (state: RootState) => {
  const filter = state.todo.filter;
  console.log(filter);
  if (filter === "Low") {
    return state.todo.tasks.filter((item) => item.priority === "Low");
  } else if (filter === "Medium") {
    return state.todo.tasks.filter((item) => item.priority === "Medium");
  } else if (filter === "Heigh") {
    return state.todo.tasks.filter((item) => item.priority === "Heigh");
  } else {
    return state.todo.tasks;
  }
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggleCompleteState, updateFilter, deleteTask } =
  taskSlice.actions;
export default taskSlice.reducer;
