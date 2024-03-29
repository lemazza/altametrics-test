import * as React from "react";
import { Modal, ModalHeader, ModalBody, Row, Col, Label } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setBillModal } from "../../store/bills/billsSlice";
import { RootState } from "../../store/store";

const BillModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { billModalOpen, selectedBill } = useAppSelector(
    (state: RootState) => state.bills
  );
  const date = selectedBill
    ? new Date(selectedBill.due_date).toLocaleDateString()
    : "";

  const toggle = () => dispatch(setBillModal(!billModalOpen));

  return (
    <Modal isOpen={billModalOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Bill Details</ModalHeader>
      <ModalBody>
        <Row className="mb-3">
          <Col>
            <Label className="fw-bold">Payee</Label>
            <div>{selectedBill?.user_id.name}</div>
          </Col>
          <Col>
            <Label className="fw-bold">Due Date</Label>
            <div>{date}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Label className="fw-bold">Details</Label>
            <div>{selectedBill?.details}</div>
          </Col>
          <Col>
            <Row>
              <Label className="fw-bold">Spent</Label>
              <div>${selectedBill?.amount}</div>
            </Row>
            <Row>
              <Label className="fw-bold">Received</Label>
              <div>${selectedBill?.amount}</div>
            </Row>
            <Row>
              <Label className="fw-bold">Received</Label>
              <div>${selectedBill?.amount}</div>
            </Row>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default BillModal;
