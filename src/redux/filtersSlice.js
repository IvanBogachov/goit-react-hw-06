import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Експортуємо екшен
export const { changeFilter } = filtersSlice.actions;

// Селектор для отримання значення фільтра
export const selectNameFilter = (state) => state.filters.name;

// Експортуємо редюсер для store
export default filtersSlice.reducer;
