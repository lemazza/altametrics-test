import * as React from "react";
import { Bill } from "./bills.interfaces";
import { useAppDispatch } from "../../store/hooks";
import { fetchBill } from "../../store/bills/bills.thunks";

interface BillTableRowProps {
  bill: Bill;
  key: string;
}

const BillTableRow: React.FC<BillTableRowProps> = ({ bill }) => {
  const dispatch = useAppDispatch();
  const date = new Date(bill.due_date).toLocaleDateString();

  return (
    <tr onClick={() => dispatch(fetchBill(bill._id))}>
      <td>{date}</td>
      <td>{bill.details}</td>
      <td>{bill.user_id.name}</td>
      <td>${bill.amount}</td>
      <td>${bill.amount}</td>
      <td>${bill.amount}</td>
    </tr>
  );
};

export default BillTableRow;
