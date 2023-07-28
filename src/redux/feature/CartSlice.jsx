import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success("Item added !", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast-message",
        });
      }
    },

    removeFromCart(state, action) {
      const filteredCartItem = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = filteredCartItem;
      toast.error("Item removed !", {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast-message",
      });
    },

    getCartSubTotal: (state) => {
      let { totalQuantity, totalAmount } = state.cartItems.reduce(
        (cartTotalAcc, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotalAcc.totalAmount += itemTotal;
          cartTotalAcc.totalQuantity += cartQuantity;
          return cartTotalAcc;
        },
        {
          totalAmount: 0,
          totalQuantity: 0,
        }
      );
      state.cartTotalAmount = totalAmount;
      state.cartTotalQuantity = totalQuantity;
    },
    increaseCartItem: (state, action) =>  {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } 
    },
    decreaseCartItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      }else {
        // If the cart quantity is 1, remove the item from the cart
        state.cartItems.splice(itemIndex, 1);
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      toast.error("Cart cleared !", {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast-message",
      });
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  getCartSubTotal,
  decreaseCartItem,
  clearCart, 
  increaseCartItem
} = cartSlice.actions;

export default cartSlice.reducer;
