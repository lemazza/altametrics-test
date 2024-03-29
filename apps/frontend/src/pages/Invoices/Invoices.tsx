import * as React from "react";
import { Container, Table } from "reactstrap";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { fetchInvoices } from "../../store/invoices/invoices.thunks";
import { RootState } from "../../store/store";
import InvoiceTableRow from "./InvoiceTableRow";
import InvoiceModal from "./InvoiceModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faPrint, faPen } from "@fortawesome/free-solid-svg-icons";

const Invoices: React.FC = () => {
  const { invoiceList } = useAppSelector((state: RootState) => state.invoices);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (!invoiceList.length) {
      dispatch(fetchInvoices());
    }
  });

  return (
    <Container className="p-3">
      <div className="d-flex justify-content-end text-muted mb-2">
        <div className="me-2">
          <FontAwesomeIcon icon={faPrint} />
        </div>
        <div className="me-2">
          <FontAwesomeIcon icon={faGear} />
        </div>
        <div className="me-2">
          <FontAwesomeIcon icon={faPen} />
        </div>
      </div>
      <Table hover bordered>
        <thead>
          <tr className="table-secondary">
            <th>Date</th>
            <th>Description</th>
            <th>Payee</th>
            <th>Spent</th>
            <th>Received</th>
            <th>Received</th>
          </tr>
        </thead>
        <tbody>
          {invoiceList.map((invoice) => (
            <InvoiceTableRow key={invoice._id} invoice={invoice} />
          ))}
        </tbody>
      </Table>
      <InvoiceModal />
    </Container>
  );
};

export default Invoices;
