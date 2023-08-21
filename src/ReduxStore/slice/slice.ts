import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface addProductType {
  user_id: string;
  product_id: string;
  size: string;
  quantity: number;
  price: number;
  title: string;
  product_image: string;
  generic_name: string;
};

export interface removeProductType {
  index: number,
  quantity: number,
  price:number,
}

export interface initialStateType {
  items: addProductType[] & removeProductType[];
  totalAmount: number;
  totalQuantity: number;
}

const initialState: initialStateType = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<addProductType>) {
      state.items.push(action.payload);
      console.log("action.payload from cartslice", action.payload);
      state.totalQuantity += action.payload.quantity;
      state.totalAmount += action.payload.quantity * action.payload.price;
    },
    removeProduct(state, action: PayloadAction<removeProductType>) {
      state.items.splice(action.payload.index,1);
      console.log(
        "removeproduct action.payload from cartslice",
        action.payload
      );
      state.totalQuantity -= action.payload.quantity;
      state.totalAmount -= action.payload.quantity * action.payload.price;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
