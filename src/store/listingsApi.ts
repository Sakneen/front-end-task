// src/store/listingsApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PropertyListing, APIResponse } from '@/types';

type QueryArgs = {
  page?: number;
  limit?: number;
  sort?: 'unit_id' | 'unit_type' | 'total_price';
  order?: 'asc' | 'desc';
  search?: string;          // unit_id search
  statuses?: string[];      // ['available','sold',...]
  unitType?: string[];      // multi-select unit types
};

export const listingsApi = createApi({
  reducerPath: 'listingsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    getListings: builder.query<APIResponse, QueryArgs>({
      query: ({
        page = 1,
        limit = 10,
        sort = 'unit_id',
        order = 'asc',
        search = '',
        statuses = [],
        unitType = [],
      }) => {
        const params = new URLSearchParams();
        params.set('_page', String(page));
        params.set('_limit', String(limit));
        params.set('_sort', sort);
        params.set('_order', order);

        if (search) params.set('unit_id_like', search);

        // OR across multiple statuses via regex
        if (statuses.length) {
          params.set('status_like', statuses.map(s => s.toLowerCase()).join('|'));
        }

        // OR across multiple unit types via regex
        if (unitType.length) {
          params.set('unit_type_like', unitType.map(s => s.toLowerCase()).join('|'));
        }

        return `listings?${params.toString()}`;
      },
      transformResponse: (response: PropertyListing[], meta): APIResponse => {
        const total = Number(meta?.response?.headers.get('X-Total-Count')) || response.length;
        const url = new URL(meta!.response!.url);
        const page = Number(url.searchParams.get('_page')) || 1;
        const limit = Number(url.searchParams.get('_limit')) || response.length;

        return { data: response, total, page, limit };
      },
    }),
  }),
});

export const { useGetListingsQuery } = listingsApi;
