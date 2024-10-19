import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: {
    rate: number;
  };
}
interface IProductsState {
  products: Product[];
  allProducts: Product[];
  isLoading: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: IProductsState = {
  products: [],
  allProducts: [], 
  isLoading: "idle",
  error: null,
};

export const getAllProducts = createAsyncThunk("products/getAllProducts", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFilteredProducts(state, action) {
      const selectedCategory = action.payload;
      if (selectedCategory) {
        state.products = state.allProducts.filter(product => product.category === selectedCategory);
      } else {
        state.products = state.allProducts;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = "loading";
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = "succeeded";
        state.allProducts = action.payload;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { setFilteredProducts } = productSlice.actions;

export default productSlice.reducer;
