import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { IUnit } from '../../interfaces/IUnit';

export interface IParams {
  _page?: number;
  _limit?: number;
  _sort?: 'unit_id' | 'unit_type' | 'total_price' | string;
  _order?: 'asc' | 'desc';
  unit_id_like?: string;
}

export const unitsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_HOST}`,
  }),
  refetchOnFocus: true,
  refetchOnReconnect: true,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ['Unit'],
  endpoints: (builder) => ({
    getUnitsList: builder.query<IUnit[], IParams | null>({
      query: (params: IParams) => ({ url: `/listings`, params }),
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(({ _id }) => ({
                type: 'Unit' as const,
                _id,
              })),
              'Unit',
            ]
          : ['Unit'],
    }),
  }),
});

export const {
  useGetUnitsListQuery,
  util: { getRunningOperationPromises },
} = unitsApi;

export const { getUnitsList } = unitsApi.endpoints;
