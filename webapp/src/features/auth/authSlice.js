import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {},
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
