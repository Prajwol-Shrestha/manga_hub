import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
      state.snackbar.isDisplayed = true;
      state.snackbar.message = message;
      state.snackbar.severity = action.payload.severity;
    },
    closeSnackbar: (state) => {
      state.snackbar.isDisplayed = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(showSnackbarAsync.pending, (state, action) => {
      state.snackbar.isDisplayed = true;
      const message = action.meta.arg.message;
      const severity = action.meta.arg.severity;
      state.snackbar.message = message;
      state.snackbar.severity = severity;
    });
    builder.addCase(showSnackbarAsync.fulfilled, (state, action) => {
      state.snackbar.isDisplayed = false;
    });
  },
});

export const showSnackbarAsync = createAsyncThunk(
  "snackbar/showSnackbarAsync",
  async ({ message, severity }: { message: string; severity: string }) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return { message, severity };
  },
);

export const { showSnackbar, closeSnackbar } = SnackbarSlice.actions;
export default SnackbarSlice.reducer;
