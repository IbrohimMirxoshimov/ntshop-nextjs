import { createSlice } from "@reduxjs/toolkit";

type CartSliceType = {
  items: ProductType[];
};

type ProductType = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

const initialState: CartSliceType = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {},
});
