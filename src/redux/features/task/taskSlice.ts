import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";


interface InitialState {
  task: ITask[];
  filter: "all" | "height" | "medium" | "low";
}

const initialState: InitialState = {
  task: [],
  filter: "all",
};


type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return {
    id: nanoid(),
    isCompleted: false,
    ...taskData
  }
}

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload)
      state.task.push(taskData);
    },
    toggleCompleted:(state, action)=>{
       state.task.forEach(item => item?.id === action?.payload ? item.isCompleted = !item.isCompleted : item);
    },

    deleteTask:(state, action) =>{
        state.task = state.task.filter(item => item?.id !== action.payload);
    }
  },
});

export const { addTask, toggleCompleted,deleteTask } = taskSlice.actions;

export const selectTasks = (state: RootState) => {
  return state.todo.task;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
