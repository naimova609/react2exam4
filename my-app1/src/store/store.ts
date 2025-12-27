import  TodoSlice  from "@/reducers/TodoSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {todos: TodoSlice},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;