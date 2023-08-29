import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { name: "have coffee", status: "incomplete" },
    { name: "finish PDF", status: "incomplete" },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      //   console.log(current(state));
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      //   console.log(action);
      state.todos = state.todos.filter((todo, index) => {
        console.log(action);
        if (index === action.payload) return false;
        return true;
      });
    },
  },
});

console.log(todoSlice.actions);

export const { add, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
