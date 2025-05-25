import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "../../types";
import type { RootState } from "../../store";

interface InitialState {
  users: IUser[];
}

type DraftUser = Pick<IUser, "name">;

const createUser = (userData: DraftUser): IUser => {
  return {
    id: nanoid(),
    ...userData,
  };
};
const initialState: InitialState = {
  users: [
    {
      id: "8jusDJW2a08rSTSbcSfZG",
      name: "MD Khairul Islam",
    },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUsers = (state: RootState) => {
  return state.user.users;
};

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
