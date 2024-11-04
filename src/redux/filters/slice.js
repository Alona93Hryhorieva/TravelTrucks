import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  vehicleType: [],
  vehicleEquipment: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setVehicleType: (state, action) => {
      state.vehicleType = action.payload;
    },
    setVehicleEquipment: (state, action) => {
      state.vehicleEquipment = action.payload;
    },

    resetFilters: (state) => {
      state.location = "";
      state.vehicleType = [];
      state.vehicleEquipment = [];
    },
  },
});

export const {
  setLocation,
  setVehicleType,
  setVehicleEquipment,
  resetFilters,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
