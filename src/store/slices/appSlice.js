import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  path: 'home',
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changePath: (state, action) => {
      state.path = action.payload.path;
    }
  }

})
export const { changePath } = appSlice.actions;
export default appSlice.reducer