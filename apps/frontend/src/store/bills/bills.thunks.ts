import { createAsyncThunk } from "@reduxjs/toolkit";
import { Bill } from "./billsSlice";

export const fetchBills = createAsyncThunk<Bill[]>(
  "bills/fetchBills",
  async () => {
    const response = await fetch("http://localhost:3000/api/bills", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = response.json();
    return data;
  }
);

export const fetchBill = createAsyncThunk<Bill, string>(
  "bills/fetchBill",
  async (id: string) => {
    const response = await fetch(`http://localhost:3000/api/bills/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = response.json();
    return data;
  }
);
