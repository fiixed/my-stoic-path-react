import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const journalApi = createApi({
  reducerPath: 'journal',
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

export const { useFetchEntriesQuery } = journalApi;
export { journalApi };
