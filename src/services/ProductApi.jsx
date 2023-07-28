import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'product',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => 'products',
    }),
    getProductById: builder.query({
        query: (id) => `products/${id}`,
      }),
  }),
})

export const { useGetAllProductQuery, useGetProductByIdQuery } = productsApi;