import { createSlice } from "@reduxjs/toolkit";
import { getCampers, getCamperById } from "../campers/operations.js";

const initialState = {
  campers: [],
  camper: {
    name: "",
    rating: 0,
    reviews: [],
    location: "",
    price: 0,
    gallery: [],
    description: "",
  },
  isLoading: false,
  error: null,
  filters: {
    features: [],
    form: "",
    location: "",
  },
  favourites: [],
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // Якщо items відсутнє, встановіть порожній масив
        state.campers = Array.isArray(action.payload.items)
          ? action.payload.items
          : [];
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCamperById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.camper = action.payload;
      })
      .addCase(getCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// const camperReducer = (state = { campers: [], isLoading: false }, action) => {
//   switch (action.type) {
//     case "FETCH_CAMPERS_REQUEST":
//       return { ...state, isLoading: true };
//     case "FETCH_CAMPERS_SUCCESS":
//       return { ...state, isLoading: false, campers: action.payload };
//     case "FETCH_CAMPERS_FAILURE":
//       return { ...state, isLoading: false };
//     default:
//       return state;
//   }
// };
export const camperReducer = campersSlice.reducer;
