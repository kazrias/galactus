import { createSlice,current } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    updateOrders: (state, action) => {
      state.orders = action.payload;
      console.log(current(state).orders,'here');
    },
  },
});
export const { updateOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
