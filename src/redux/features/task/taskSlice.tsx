import { createSlice } from "@reduxjs/toolkit";
import type { ITask } from "../../types";

interface InitialState {
  task: ITask[];
}

const initialState: InitialState = {
  task: [
    {
      id: "01",
      title: "hello",
      description: "hi,brother. how are you",
      isCompleted: false,
      priority: "Heigh",
    },
    {
      id: "02",
      title: "hi",
      description: "hi,brother. how are you",
      isCompleted: false,
      priority: "Heigh",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
