import {createSlice} from '@reduxjs/toolkit';
import {getActionMainType} from './utils/redux';

const initialState: {[key: string]: boolean} = {};

const loadingSlice = createSlice({
  name: 'loading_state',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.includes('/pending'),
        (state, action) => {
          state[getActionMainType(action)] = true;
        },
      )
      .addMatcher(
        (action) =>
          action.type.includes('/fulfilled') ||
          action.type.includes('/rejected'),
        (state, action) => {
          state[getActionMainType(action)] = false;
        },
      );
  },
});

export default loadingSlice;
