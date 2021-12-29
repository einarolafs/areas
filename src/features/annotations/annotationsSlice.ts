import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import fileUpload from '../../services/file-upload';

export interface AnnotationState {
  [key: string]: number[];
}

const initialState: AnnotationState = {};

// First, create the thunk
export const fetchAnnotations = createAsyncThunk(
  'annotation/uploadFile',
  async (file: File, { dispatch }) => {
    const response = await fileUpload(file)

    dispatch(setAnnotations(response.data));
  }
)

export const annotationSlice = createSlice({
  name: 'annotations',
  initialState,
  reducers: {
    setAnnotations: (state, action: PayloadAction<AnnotationState>) => {
      console.log('setAnnotations', action.payload);
      return action.payload;
    }
  },
});

export const { setAnnotations } = annotationSlice.actions;

export default annotationSlice.reducer;