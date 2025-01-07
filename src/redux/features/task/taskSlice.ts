import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { deleteUser } from "../user/userSlice";

interface InitialState {
  task: ITask[];
  filter: "all" | "heigh" | "medium" | "low";
}

const initialState: InitialState = {
  task: [],
  filter: "all",
};

type DraftTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority" | "assignTo"
>;

const createTask = (taskData: DraftTask): ITask => {
  return {
    ...taskData,
    id: nanoid(),
    isCompleted: false,
    assignTo: taskData?.assignTo ? taskData?.assignTo : null,
  };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);
      state.task.push(taskData);
    },
    toggleCompleted: (state, action) => {
      state.task.forEach((item) =>
        item?.id === action?.payload
          ? (item.isCompleted = !item.isCompleted)
          : item
      );
    },

    deleteTask: (state, action) => {
      state.task = state.task.filter((item) => item?.id !== action.payload);
    },

    updateFilter: (
      state,
      action: PayloadAction<"all" | "heigh" | "medium" | "low">
    ) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteUser, (state, action) => {
      state.task.forEach((item) =>
        item?.assignTo === action?.payload ? (item.assignTo = null) : item
      );
    });
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "low") {
    return state.todo.task.filter((item) => item.priority === "low");
  } else if (filter === "medium") {
    return state.todo.task.filter((item) => item.priority === "medium");
  } else if (filter === "heigh") {
    return state.todo.task.filter((item) => item.priority === "heigh");
  } else {
    return state.todo.task;
  }
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggleCompleted, deleteTask, updateFilter } =
  taskSlice.actions;

export default taskSlice.reducer;
