import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../utils/axios";

export const getDataUserById = createAsyncThunk(
  "user/getDataUserById",
  async (userId) => {
    const response = await axiosClient.get(`user/profile/${userId}`);
    return response.data.data;
  }
);

export const updateImage = createAsyncThunk(
  "user/updateImage",
  async (payload) => {
    const response = await axiosClient.patch(
      `user/image/${payload.userId}`,
      payload.image
    );
    return response.data.msg;
  }
);

export const updatePassword = createAsyncThunk(
  "user/updatePassword",
  async ({ userId, form }) => {
    const response = await axiosClient.patch(`user/password/${userId}`, form);
    return response.data.msg;
  }
);

export const checkPin = createAsyncThunk("user/checkPin", async (pin) => {
  const response = await axiosClient.get(`user/pin/${pin}`);
  return response.data.msg;
});

export const updatePin = createAsyncThunk("user/updatePin", async (payload) => {
  const response = await axiosClient.patch(
    `user/pin/${payload.userId}`,
    payload.data
  );
  return response.data.msg;
});

export const updatePhone = createAsyncThunk(
  "user/updatePhone",
  async (payload) => {
    const response = await axiosClient.patch(
      `user/profile/${payload.userId}`,
      payload.form
    );
    return response.data.msg;
  }
);

const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  message: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDataUserById.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = "";
      })
      .addCase(getDataUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getDataUserById.rejected, (state) => {
        state.isLoading = false;
        state.data = {};
      })
      .addCase(updateImage.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = "";
      })
      .addCase(updateImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = action.payload;
      })
      .addCase(updateImage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(updatePassword.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = "";
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = action.payload;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(checkPin.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = "";
      })
      .addCase(checkPin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = action.payload;
      })
      .addCase(checkPin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(updatePin.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = "";
      })
      .addCase(updatePin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = action.payload;
      })
      .addCase(updatePin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(updatePhone.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = "";
      })
      .addCase(updatePhone.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = action.payload;
      })
      .addCase(updatePhone.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      });
  },
});

export default userSlice.reducer;
