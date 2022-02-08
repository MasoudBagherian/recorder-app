import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {ThemeColors as ColorSet} from '../../style/theme/theme';
import { colorSets } from '../../style/theme/theme'; 

// Define a type for the slice state
interface ThemeColors{
  colors: ColorSet;
}


// Define the initial state using that type
const initialState: ThemeColors = {
    colors: colorSets[0]
  
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    
    setTheme: (state, action: PayloadAction<ColorSet>) => {
      state.colors = action.payload;
    },
  },
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer