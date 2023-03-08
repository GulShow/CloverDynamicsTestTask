import {createSlice} from '@reduxjs/toolkit';

export const colorSlice = createSlice({
  name: 'color',
  initialState: {
    buttonColor: '#D199E7',
  },
  reducers: {
    changeColor: (state, {payload}) => {
      state.buttonColor = payload;
    },
  },
});

export const {changeColor} = colorSlice.actions;

export default colorSlice.reducer;
