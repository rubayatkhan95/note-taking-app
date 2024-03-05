import { configureStore } from "@reduxjs/toolkit"
import CounterReducer from "../features/counter/CounterSlice"
import ToDoReducer from "../features/todoList/ToDoListSlice"

export const store = configureStore({
  reducer: {
    counter : CounterReducer,
    todo: ToDoReducer
  },
})