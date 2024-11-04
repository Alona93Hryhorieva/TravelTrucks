import { createSlice } from "@reduxjs/toolkit";
import { getCampers, getCamperById } from "../campers/operations.js";
// import { logout } from "../auth/operations";

const initialState = {
  name: "campers",
  items: [],
  loading: false,
  error: null,
  selectedCamper: null,
  //   modal: { isOpen: false, contactId: "66ae27f9c495ed6e25f3175e" },
};

const contactsSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    clearSelectedCamper: (state) => {
      state.selectedCamper = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Отримання списку кемперів
      .addCase(getCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.campers = action.payload;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Отримання деталей окремого кемпера
      .addCase(getCamperById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCamper = action.payload;
      })
      .addCase(getCamperById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSelectedCamper } = campersSlice.actions;

export default campersSlice.reducer;
