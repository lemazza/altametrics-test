import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBills, fetchBill } from "./bills.thunks";

export interface Bill {
  _id: string;
  id: string;
  due_date: string;
  amount: number;
  details: string;
  user_id: {
    name: string;
    _id?: string;
    id: string;
  };
}

interface BillsState {
  billList: Bill[];
  selectedBill: Bill | null;
  billModalOpen: boolean;
}

const initialState: BillsState = {
  billList: [],
  selectedBill: null,
  billModalOpen: false,
};

export const billsSlice = createSlice({
  name: "bills",
  initialState,
  reducers: {
    setBill: (state, action: PayloadAction<Bill>) => {
      state.selectedBill = action.payload;
      state.billModalOpen = true;
    },
    setBillList: (state, action: PayloadAction<Bill[]>) => {
      state.billList = action.payload;
    },
    setBillModal: (state, action: PayloadAction<boolean>) => {
      state.billModalOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBills.fulfilled, (state, action) => {
      state.billList = action.payload;
    });
    builder.addCase(fetchBill.fulfilled, (state, action) => {
      state.selectedBill = action.payload;
      state.billModalOpen = true;
    });
  },
});

export const { setBill, setBillList, setBillModal } = billsSlice.actions;

export default billsSlice.reducer;
