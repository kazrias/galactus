import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  path: 'home',
  products: [],
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changePath: (state, action) => {
      state.path = action.payload.path;
    },
    addProducts: (state, action) => {
      state.products = action.payload.products;
    }

  }

})
export const { changePath, addProducts } = appSlice.actions;
export default appSlice.reducer