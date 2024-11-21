import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Встановлення базового URL для axios
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

// Функція для отримання списку кемперів
export const getCampers = createAsyncThunk(
  "catalog/getCampers",
  async (filters, { rejectWithValue }) => {
    try {
      const response = await axios.get("/campers");
      // console.log("Response data:", response.data);

      if (!Array.isArray(response.data.items)) {
        // console.log("Data format:", typeof response.data, response.data);
        throw new Error("Invalid data format");
      }
      return response.data.items; //
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCamperById = createAsyncThunk(
  "catalog/getCamperById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      // console.log("Response data:", response.data);
      if (typeof response.data !== "object" || response.data === null) {
        // console.log("Data format:", typeof response.data, response.data);
        throw new Error("Invalid data format");
      }
      // console.log("Response data:", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
