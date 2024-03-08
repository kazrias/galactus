import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  path: 'home',
  category:'Clothes',
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
    },
    changeCategory:(state,action)=>{
      state.category=action.payload.category;
    }
  }

})
export const { changePath, addProducts,changeCategory } = appSlice.actions;
export default appSlice.reducer