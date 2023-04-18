import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../utils/axios";
import moment from "moment";

export const createTransfer = createAsyncThunk(
  "transfer/createTransfer",
  async (data) => {
    const response = await axiosClient.post("/transaction/transfer", data);
    return response.data;
  }
);

const transferSlice = createSlice({
  name: "transfer",
  initialState: {
    user: {},
    detailTransfer: {},
    dateTimeTransfer: "",
    isError: false,
    loadingPage: true,
  },
  reducers: {
    // loadingPage: (state) => {
    //   state.loadingPage = true;
    // },
    // finishLoadingPage: (state) => {
    //   state.loadingPage = false;
    // },
    detailUser: (state, action) => {
      state.user = action.payload;
    },
    transferData: (state, action) => {
      state.detailTransfer = action.payload;
      state.dateTimeTransfer = moment().format("MMM DD, YYYY - kk:mm");
    },
    resetTransferData: (state) => {
      state.user = {};
      state.detailTransfer = {};
      state.dateTimeTransfer = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTransfer.pending, (state) => {
        state.isError = false;
        // state.loadingPage = true;
      })
      .addCase(createTransfer.fulfilled, (state) => {
        state.isError = false;
        // state.loadingPage = false;
      })
      .addCase(createTransfer.rejected, (state) => {
        state.isError = true;
        // state.loadingPage = false;
      });
  },
});

export const {
  loadingPage,
  finishLoadingPage,
  detailUser,
  transferData,
  resetTransferData,
} = transferSlice.actions;

export default transferSlice.reducer;
