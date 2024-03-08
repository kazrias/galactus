import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: []
}

export const favoritesSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload)
    },
    deleteFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(({ id }) => id !== action.payload.id)
    }
  }

})
export const { addToFavorites, deleteFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer