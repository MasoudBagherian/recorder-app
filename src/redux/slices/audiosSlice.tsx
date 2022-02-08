import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface Audio  {
  id: string | null ;
  audioUrl: string | null;
}
interface AudioSet  {
  audios: Audio[];
}

// Define the initial state using that type
const initialState: AudioSet = {
  audios: []
} ;

export const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    
    addAudio: (state, action: PayloadAction<Audio>) => {
      state.audios = [...state.audios, action.payload] ;
    },
  },
})

export const { addAudio } = audioSlice.actions

export default audioSlice.reducer