import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    increment: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.items[index].quantity = state.items[index].quantity + 1;
        state.total =
          state.items[index].price * state.items[index].quantity;
      } else {
        state.items = [...state.items, action.payload];
      }
    },
    decrement: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        if (state.items[index].quantity !== 1) {
          state.items[index].quantity = state.items[index].quantity - 1;
          state.total =
            state.items[index].price -
            state.items[index].price * state.items[index].quantity;
        }
      } else {
        console.log("item not found");
      }
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        // exist item in basket
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove item (id:${action.payload.id} as its not in cart)`
        );
      }
      state.items = newBasket;
    },
  },
});

export const { increment, removeFromBasket, decrement } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  (state.basket.items.reduce(
    (total, item) => total + item.price * 72 * item.quantity,
    0
  ));;

export default basketSlice.reducer;
