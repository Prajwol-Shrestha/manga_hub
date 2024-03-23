import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snackbar: {
    isDisplayed: false,
    displayTime: 3000,
    message: "",
    severity: "",
  },
};

export const SnackbarSlice = createSlice({
  name: "Snackbar",
  initialState: initialState,
  reducers: {
    showSnackbar: (state, action) => {
      const message = action.payload.message;
      state.snackbar.isDisplayed = true
      state.snackbar.message = message;
      state.snackbar.severity = action.payload.severity;
    },
    closeSnackbar: (state) => {
        state.snackbar.isDisplayed = false
    }
  },
});


export const { showSnackbar, closeSnackbar } =  SnackbarSlice.actions
export default SnackbarSlice.reducer