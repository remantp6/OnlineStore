import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from '../services/productApi';
import cartReducer from './feature/CartSlice';


export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(productsApi.middleware),
});