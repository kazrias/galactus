import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: []
}

export const favoritesSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    
  }

})
export const { addToCart } = favoritesSlice.actions;
export default favoritesSlice.reducer