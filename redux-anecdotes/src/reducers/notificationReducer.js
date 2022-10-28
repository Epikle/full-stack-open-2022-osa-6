import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  timer: 5,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    newNotification: (state, action) => {
      return {
        message: action.payload.message,
        timer: action.payload.timer,
      };
    },
    resetNotification: () => initialState,
  },
});

export const setNotification = (message, timer) => {
  return (dispatch) => {
    dispatch(newNotification({ message, timer }));
  };
};

export const { newNotification, resetNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
