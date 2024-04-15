import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    loadTasks: (state, action) => {
      return [...state, ...action.payload];
    },
    addTask: (state, action) => {
      state.push({
        title: action.payload.title,
        task: action.payload.task,
        isChecked: false,
      });
    },
    deleteTask: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state[action.payload];
      task.isChecked = !task.isChecked;
    },
  },
});

export const { loadTasks, addTask, deleteTask, toggleTask } =
  tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;
