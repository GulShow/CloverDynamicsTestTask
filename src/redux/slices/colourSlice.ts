import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  colorIndex: 0,
  colors: ['#D199E7', '#72C1ED', '#A196F1', '#7D72ED'],
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setButtonColorIndex: state => {
      state.colorIndex = (state.colorIndex + 1) % 4;
    },
  },
});

export const {setButtonColorIndex} = colorSlice.actions;
export default colorSlice.reducer;
