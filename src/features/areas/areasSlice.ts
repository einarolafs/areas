import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import fileUpload from '../../services/file-upload';

export type AreasState = Record<string, {
    areas: number[],
    total: number,
}>;

export type AreasPayload = Record<string, number[]>;

const initialState: AreasState = {};

// First, create the thunk
export const fetchAreas = createAsyncThunk(
  'areas/uploadFile',
  async (file: File, { dispatch }) => {
    const response = await fileUpload(file)

    dispatch(setAreas(response.data));
  }
)

export const areasSlice = createSlice({
  name: 'areas',
  initialState,
  reducers: {
    setAreas: (state, { payload }: PayloadAction<AreasPayload>) => {
      const areas = Object.entries(payload).reduce((acc, [category, areas]) => {
        acc[category] = {
          areas,
          total: areas.reduce((acc, area) => acc + area, 0),
        };

        return acc;
      }, {} as AreasState);

      return areas;
    }
  },
});

export const { setAreas } = areasSlice.actions;

export default areasSlice.reducer;