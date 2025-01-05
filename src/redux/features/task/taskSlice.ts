import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  task: ITask[];
  filter: "all" | "height" | "medium" | "low";
}

const initialState: InitialState = {
  task: [
    {
      id: "fadfkasdfkasdf",
      title: "Initialize Frontend",
      description: "Create Home Page and Routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "fadfkasdfkasdfDAS",
      title: "Create Gihub Repo",
      description: "Create Home Page and Routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Low",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.task;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
