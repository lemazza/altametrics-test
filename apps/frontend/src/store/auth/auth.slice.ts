import { createSlice } from "@reduxjs/toolkit";
import { login } from "./auth.thunks";

export interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  user: User | null;
}

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  isAuthenticated: !!localStorage.getItem("token"),
  loading: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      localStorage.setItem("token", action.payload.access_token);
      state.token = action.payload.access_token;
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload.user;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
