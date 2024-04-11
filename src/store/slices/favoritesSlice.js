import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  loading: true,
};

export const favoritesSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    deleteFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        ({ id }) => id !== action.payload.id,
      );
    },
    updateFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    changeFavsLoading: (state, action) => {
      state.loading = action.payload.loading;
    },
  },
});
export const {
  addToFavorites,
  deleteFromFavorites,
  updateFavorites,
  changeFavsLoading,
} = favoritesSlice.actions;
export default favoritesSlice.reducer;
