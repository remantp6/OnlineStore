import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from '../services/ProductApi.jsx'
import cartReducer from './feature/CartSlice';


export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(productsApi.middleware),
});