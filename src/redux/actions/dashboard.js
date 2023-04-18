import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../utils/axios";

export const getDataDashboard = createAsyncThunk(
  "dashboard/getDataDashboard",
  async (userId) => {
    const response = await axiosClient.get(`dashboard/${userId}`);
    return response.data.data;
  }
);

const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  message: "",
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDataDashboard.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = "";
      })
      .addCase(getDataDashboard.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getDataDashboard.rejected, (state) => {
        state.data = {};
        state.isLoading = false;
      });
  },
});

export default dashboardSlice.reducer;
