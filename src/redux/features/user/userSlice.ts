import { RootState } from "@/redux/store";
import { IUser } from "@/types";
import { createSlice, nanoid } from "@reduxjs/toolkit";

interface InitialState {
  user: IUser[];
}

const initialState: InitialState = {
  user: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const user = {
        ...action.payload,
        id: nanoid(),
      };
      state.user.push(user);
    },

    deleteUser: (state, action) => {
      state.user = state.user.filter((item) => item?.id !== action.payload);
    },
  },
});

export const selectUser = (state: RootState) => {
  return state.users.user;
};

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
