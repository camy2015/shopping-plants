import { createSlice } from "@reduxjs/toolkit";

export const CreatSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, { payload }) => {
      const { name, image, cost } = payload;
      const existItem = state.items.find((item) => item.name === name);

      if (existItem) {
        existItem.quantify++;
      } else {
        state.items.push({ name, image, cost, quantify: 1 });
      }
    },
    removeItem: (state, { payload }) => {
      state.items = state.items.filter((item) => item.name !== payload.name);
    },
    incrementQuantity: (state, { payload }) => {
      const { name } = payload;
      const existItem = state.items.find((item) => item.name === name);

      if (existItem) {
        existItem.quantify++;
      }
    },
    decrementQuantity: (state, { payload }) => {
      const { name } = payload;
      const existItem = state.items.find((item) => item.name === name);

      if (existItem) {
        existItem.quantify--;
      }
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } =
  CreatSlice.actions;
