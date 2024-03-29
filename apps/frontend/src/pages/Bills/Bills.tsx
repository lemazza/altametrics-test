import * as React from "react";
import { Container, Table } from "reactstrap";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { fetchBills } from "../../store/bills/bills.thunks";
import { RootState } from "../../store/store";
import BillTableRow from "./BillTableRow";
import BillModal from "./BillModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faPrint, faPen } from "@fortawesome/free-solid-svg-icons";

const Bills: React.FC = () => {
  const { billList } = useAppSelector((state: RootState) => state.bills);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (!billList.length) {
      dispatch(fetchBills());
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
      <Table hover bordered size="sm">
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
          {billList.map((bill) => (
            <BillTableRow key={bill._id} bill={bill} />
          ))}
        </tbody>
      </Table>
      <BillModal />
    </Container>
  );
};

export default Bills;
