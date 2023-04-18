import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
};

const topUpSlice = createSlice({
  name: "topup",
  initialState,
  reducers: {
    setModal: (state, action) => {
      state.modal = action.payload;
    },
  },
});

export const { setModal } = topUpSlice.actions;
export default topUpSlice.reducer;
