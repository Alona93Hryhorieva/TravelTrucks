import { createSlice } from "@reduxjs/toolkit";

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

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { location, form, features } = action.payload;

      // Перевірка та присвоєння значень лише тоді, коли вони є в payload
      if (location) state.filters.location = location;
      if (form) state.filters.form = form;
      if (features) state.filters.features = features;
    },
  },
});

export const { setFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
