import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + action.payload;
    },

    deccrement: (state, action) => {
      state.count = state.count - action.payload;
    },
  },
});

export const { increment, deccrement } = counterSlice.actions;

export default counterSlice.reducer;
