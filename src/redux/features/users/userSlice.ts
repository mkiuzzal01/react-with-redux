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
    isDeleted: false,
    ...userData,
  };
};
const initialState: InitialState = {
  users: [
    {
      id: "01",
      name: "MD Khairul Islam",
      isDeleted: false,
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
    deleteUser: (state, action: PayloadAction<IUser>) => {
      state.users.filter((Item) => Item.id !== action.payload.id);
    },
  },
});

export const selectUsers = (state: RootState) => {
  return state.user.users;
};

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
