import { createSlice } from "@reduxjs/toolkit";
import { GetSneakers } from "./sneakersActions";

const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState: {
    loading: false,
    sneakers: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(GetSneakers.pending, (state) => {
      state.loading = true;
    })
    .addCase(GetSneakers.fulfilled, (state, action) => {
      state.loading = false;
      state.sneakers = action.payload.data
    })
    .addCase(GetSneakers.rejected, (state, action) => {
      state.loading = false;
    })
  }
})



export default sneakersSlice.reducer;