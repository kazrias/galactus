import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  path: 'home',
  category: 'Clothes',
  products: [],
  loggedUser: {
    logged: false,
    data: ''
  }
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
    },
    changeCategory: (state, action) => {
      state.category = action.payload.category;
    },
    loginUser: (state, action) => {
      state.loggedUser.logged = action.payload.logged;
      state.loggedUser.data = action.payload.data;
    }
  }

})
export const { changePath, addProducts, changeCategory, loginUser } = appSlice.actions;
export default appSlice.reducer