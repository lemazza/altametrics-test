import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchInvoices, fetchInvoice } from "./invoices.thunks";

export interface Invoice {
  _id: string;
  id: string;
  due_date: string;
  amount: number;
  details: string;
  user_id: {
    name: string;
    _id: string;
    id: string;
  };
}

interface InvoicesState {
  invoiceList: Invoice[];
  selectedInvoice: Invoice | null;
  invoiceModalOpen: boolean;
}

const initialState: InvoicesState = {
  invoiceList: [],
  selectedInvoice: null,
  invoiceModalOpen: false,
};

export const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    setInvoice: (state, action: PayloadAction<Invoice>) => {
      state.selectedInvoice = action.payload;
      state.invoiceModalOpen = true;
    },
    setInvoiceList: (state, action: PayloadAction<Invoice[]>) => {
      state.invoiceList = action.payload;
    },
    setInvoiceModal: (state, action: PayloadAction<boolean>) => {
      state.invoiceModalOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInvoices.fulfilled, (state, action) => {
      state.invoiceList = action.payload;
    });
    builder.addCase(fetchInvoice.fulfilled, (state, action) => {
      state.selectedInvoice = action.payload;
      state.invoiceModalOpen = true;
    });
  },
});

export const { setInvoice, setInvoiceList, setInvoiceModal } =
  invoicesSlice.actions;

export default invoicesSlice.reducer;
