import { createSlice } from "@reduxjs/toolkit";

type CartSliceType = {
  sum_price: number;
  items: CartItemType[];
};

type CartItemType = {
  product_id: number;
  qty: number;
  total_price: number;
  product: ProductType;
};

type ProductType = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

const initialState: CartSliceType = {
  items: [
    {
      product_id: 1,
      product: {
        id: 1,
        imageUrl: "",
        name: "Test",
        price: 20,
      },
      qty: 5,
      total_price: 100,
    },
    {
      product_id: 2,
      product: {
        id: 2,
        imageUrl: "",
        name: "Test 2",
        price: 20,
      },
      qty: 2,
      total_price: 40,
    },
  ],

  sum_price: 140,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      // payload bu product object kelishi kerak
    },
  },
});

export const { addToCart } = cartSlice.actions;
