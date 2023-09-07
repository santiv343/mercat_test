import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.amiiboapi.com/api/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `amiibo`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
