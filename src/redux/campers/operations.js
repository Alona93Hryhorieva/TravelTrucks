import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

// Встановлення базового URL для axios з `/campers`
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

// Отримати список кемперів
export const getCampers = createAsyncThunk(
  "catalog/getCampers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/");
      toast.success("Camper list successfully loaded!");
      return response.data;
    } catch (error) {
      toast.error("Failed to load camper list. Please try again!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Отримати деталі окремого кемпера за його ID
export const getCamperById = createAsyncThunk(
  "catalog/getCamperById",
  async (camperId, thunkAPI) => {
    try {
      const response = await axios.get(`/${camperId}`);
      toast.success("Camper details successfully loaded!");
      return response.data;
    } catch (error) {
      toast.error("Failed to load camper details. Please try again!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
