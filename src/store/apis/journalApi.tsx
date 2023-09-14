import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const journalApi = createApi({
  reducerPath: 'journal',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
  }),
  endpoints(builder) {
    return {
      removeEntry: builder.mutation({
        invalidatesTags: ['Entry'],
        query: (id) => {
          return {
            url: `/journal/${id}`,
            method: 'DELETE',
          };
        },
      }),
      addEntry: builder.mutation({
        invalidatesTags: ['Entry'],
        query: (description) => {
          return {
            url: '/journal/create',
            method: 'POST',
            body: {
              description: description,
            },
          };
        },
      }),
      patchEntry: builder.mutation({
        invalidatesTags: ['Entry'],
        query: (args) => {
          const {editID, description} = args;
          return {
            url:`/journal/${editID}`,
            method: 'PATCH',
            body: {
              description: description,
            },
          };
        },
      }),
      fetchEntries: builder.query({
        providesTags: ['Entry'],
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

export const {
  useAddEntryMutation,
  useFetchEntriesQuery,
  useRemoveEntryMutation,
  usePatchEntryMutation,
} = journalApi;
export const {
  endpoints: { addEntry, patchEntry },
} = journalApi;
export { journalApi };
