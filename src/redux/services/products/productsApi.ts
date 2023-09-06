// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.amiiboapi.com/api/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `amiibo`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
