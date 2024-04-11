import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  loading: true,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    updateOrders: (state, action) => {
      state.orders = action.payload;
    },
    changeOrdersLoading: (state, action) => {
      state.loading = action.payload.loading;
    },
  },
});
export const { updateOrders, changeOrdersLoading } = ordersSlice.actions;
export default ordersSlice.reducer;
