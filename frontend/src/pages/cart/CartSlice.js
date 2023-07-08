import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [], totalqty: 0, cartvalue: 0, totalprice: 0 }
const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    incCartvalue(state, action) {
      state.totalprice = state.totalprice + action.payload.price;
      state.totalqty = state.totalqty + 1;
      let findproduct = state.products.find((product) => product?._id === action?.payload?._id);
      findproduct.qty= findproduct.qty+1;
    },
    decCartvalue(state, action) {
      if (action.payload.qty > 1) {
        state.totalprice = state.totalprice - action.payload.price;
        state.totalqty = state.totalqty - 1;
        let findproduct = state.products.find((product) => product?._id === action?.payload?._id);
      findproduct.qty= findproduct.qty-1;
      }
    },
    addTocart(state, action) {
      let productAvailable = state.products.find((product) => product?._id === action?.payload?._id)
      if (productAvailable) {
        productAvailable.qty = productAvailable?.qty + action.payload.qty
      } else {
        state.products.push(action.payload)

      }
      state.cartvalue = state.products?.length
      state.totalprice = action.payload.qty * action.payload.price + state.totalprice
      state.totalqty = state.totalqty + action.payload.qty

    },
    removesingleProduct(state, action) {
      let product = state.products.filter(product => product?._id !== action?.payload?._id)
      state.products =product
      state.totalprice = state.totalprice -action.payload.qty *action.payload.price
      state.totalqty = state.totalqty - action.payload.qty
      state.cartvalue =state.cartvalue -1
    },
  },
})
export const { incCartvalue, decCartvalue, addTocart, removesingleProduct } = cartSlice.actions
export const cartSlicevalue = cartSlice.reducer
export const cartStore = state=>state.cart