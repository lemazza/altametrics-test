import { createAsyncThunk } from "@reduxjs/toolkit";
import { Invoice } from "./invoicesSlice";

export const fetchInvoices = createAsyncThunk<Invoice[]>(
  "invoices/fetchInvoices",
  async () => {
    const response = await fetch("http://localhost:3000/api/invoices", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = response.json();
    return data;
  }
);

export const fetchInvoice = createAsyncThunk<Invoice, string>(
  "invoices/fetchInvoice",
  async (id: string) => {
    const response = await fetch(`http://localhost:3000/api/invoices/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = response.json();
    return data;
  }
);
