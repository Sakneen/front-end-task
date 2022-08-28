import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IGallary {
  images: string[];
  isOpen: boolean;
}

const initialState: IGallary = {
  images: [],
  isOpen: false,
};

export const gallarySlice = createSlice({
  name: 'gallary',
  initialState,
  reducers: {
    openGallary: (state, action: PayloadAction<IGallary['images']>) => {
      state.images = action.payload;
      state.isOpen = true;
    },
    closeGallary: (state, _action: PayloadAction<void>) => {
      state.isOpen = false;
    },
  },
});

export const { openGallary, closeGallary } = gallarySlice.actions;
