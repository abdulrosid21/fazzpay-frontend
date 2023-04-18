import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../utils/axios";

export const getDataHistory = createAsyncThunk(
  "history/getDataHistory",
  async () => {
    const response = await axiosClient.get(
      `transaction/history?page=1&limit=4&filter=WEEK`
    );
    return response.data;
  }
);

const initialState = {
  data: {},
  pagination: {},
  isLoading: false,
  isError: false,
  message: "",
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDataHistory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.data = {};
        state.pagination = {};
        state.message = "";
      })
      .addCase(getDataHistory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
        state.pagination = action.payload.pagination;
      })
      .addCase(getDataHistory.rejected, (state) => {
        state.isLoading = false;
        state.data = {};
        state.pagination = {};
        state.isError = true;
      });
  },
});

export default historySlice.reducer;
