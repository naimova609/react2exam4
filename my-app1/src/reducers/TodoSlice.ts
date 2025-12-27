import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"; 

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

interface ITodo {
  id: number,
  title: string,
  pricePerHour: number,
  description: string,
  color: string,
  
}

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export const {  } = TodoSlice.actions;

export default TodoSlice.reducer;
