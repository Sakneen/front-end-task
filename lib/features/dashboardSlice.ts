import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IParams } from '../services/unitsApi';

export interface Opt {
  label: string;
  value: string;
}

export const options: Opt[] = [
  { label: 'Unit ID', value: 'unit_id' },
  { label: 'Unit Type', value: 'unit_type' },
  { label: 'Total Price', value: 'total_price' },
];

const initialState: IParams = {
  _limit: 5,
  _order: 'asc',
  _page: 1,
  _sort: 'unit_id',
  unitId: null,
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    sortBy: (state, action: PayloadAction<IParams['_sort']>) => {
      state._sort = action.payload;
    },
    orderBy: (state, _action: PayloadAction<void>) => {
      state._order = state._order === 'asc' ? 'desc' : 'asc';
    },
    filterById: (state, action: PayloadAction<IParams['unitId']>) => {
      if (action.payload && action.payload?.length > 0) {
        state.unitId = action.payload;
      }
    },
    selectPage: (state, action: PayloadAction<IParams['_page']>) => {
      state._page = action.payload;
    },
  },
});

export const { orderBy, sortBy, filterById, selectPage } =
  dashboardSlice.actions;
