// src/app/Redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import categorySlice from './categorySlice';

// Create the Redux store
export const store = configureStore({
  reducer: {
    productSlice,
    categorySlice,
  },
});

// Infer the type of the store
export type AppStore = typeof store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
