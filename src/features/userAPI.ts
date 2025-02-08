/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api', // Your base API URL for JWT validation
  }),
  endpoints: (builder) => ({
    getUser: builder.query<any, void>({
      query: () => 'user', // Endpoint for fetching user details
    }),
  }),
});

export const { useGetUserQuery } = userApi;
