import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const entriesApi = createApi({
  reducerPath: 'entries',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
  }),
  endpoints(builder) {
    return {
      fetchEntries: builder.query({
        query: () => {
          return {
            url: '/journal',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchEntriesQuery } = entriesApi;
export { entriesApi };
