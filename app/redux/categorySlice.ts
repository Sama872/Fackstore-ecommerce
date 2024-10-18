import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


type ICategory = string;

interface ICategoryState {
  categories: ICategory[];
  isLoading: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ICategoryState = {
  categories: [],
  isLoading: "idle",
  error: null,
};

// Async thunk to fetch categories
export const getAllCategory = createAsyncThunk("category/getAllCategory", async () => {
  const response = await axios.get("https://fakestoreapi.com/products/categories");
  return response.data;
});

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategory.pending, (state) => {
        state.isLoading = "loading";
        state.error = null;
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.isLoading = "succeeded";
        state.categories = action.payload;
        state.error = null;
      })
      .addCase(getAllCategory.rejected, (state, action) => {
        state.isLoading = "failed";
        state.error = action.payload as string
      });
  },
});

export default categorySlice.reducer;
