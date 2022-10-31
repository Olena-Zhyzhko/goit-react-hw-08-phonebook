import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = '';

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    filter(_, action) {
        return action.payload
          },
    },
  },
);

// Експортуємо генератори екшенів та редюсер
export const { filter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;