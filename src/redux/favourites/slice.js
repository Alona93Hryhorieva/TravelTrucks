import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    setFavourite(state, action) {
      const camperId = action.payload;
      const index = state.items.indexOf(camperId);
      if (index !== -1) {
        state.items.splice(index, 1);
      } else {
        state.items.push(camperId);
      }
    },
  },
});

export const { setFavourite } = favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;
