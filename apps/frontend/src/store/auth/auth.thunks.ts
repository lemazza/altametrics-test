import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "./auth.slice";

interface loginData {
  email: string;
  password: string;
}

export const login = createAsyncThunk<
  { access_token: string; user: User },
  loginData
>("auth/login", async (data: loginData) => {
  const response = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
});
