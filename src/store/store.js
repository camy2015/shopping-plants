import { configureStore } from "@reduxjs/toolkit";
import { CreatSlice } from "./CreatSlice";

export const store = configureStore({
  reducer: {
    cart: CreatSlice.reducer,
  },
});
