import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/UsersSlice";
import productSlice from "./reducers/ProductsSlice";
import cartSlice from "./reducers/CartsSlice";
export const store = configureStore({
  reducer: {
    productReducer: productSlice,
    cartReducer: cartSlice,
  },
});
