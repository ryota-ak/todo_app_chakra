import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Task, TaskState } from "./types";

export const initialState: TaskState = {
  tasks: [],
  editedTask: { id: 0, title: "", completed: false },
  taskCount: 0,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask = {
        id: state.taskCount + 1,
        title: action.payload,
        completed: false,
      };
      state.tasks = [...state.tasks, newTask];
      state.taskCount = state.taskCount + 1;
      state.editedTask = initialState.editedTask;
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      state.editedTask = initialState.editedTask;
    },
    deleteTask: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    editTask(state, action: PayloadAction<Task>){
      state.editedTask = action.payload;
    },
  },
});

export const { addTask, updateTask, editTask, deleteTask } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.task.tasks;
export const selectEditedTask = (state: RootState) => state.task.editedTask;

export default taskSlice.reducer;
