import * as React from "react";
import { Invoice } from "./invoices.interfaces";
import { useAppDispatch } from "../../store/hooks";
import { fetchInvoice } from "../../store/invoices/invoices.thunks";

interface InvoiceTableRowProps {
  invoice: Invoice;
  key: string;
}

const InvoiceTableRow: React.FC<InvoiceTableRowProps> = ({ invoice }) => {
  const dispatch = useAppDispatch();
  const date = new Date(invoice.due_date).toLocaleDateString();

  return (
    <tr onClick={() => dispatch(fetchInvoice(invoice._id))}>
      <td>{date}</td>
      <td>{invoice.details}</td>
      <td>{invoice.user_id?.name}</td>
      <td>${invoice.amount}</td>
      <td>${invoice.amount}</td>
      <td>${invoice.amount}</td>
    </tr>
  );
};

export default InvoiceTableRow;
