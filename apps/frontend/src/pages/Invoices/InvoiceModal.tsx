import * as React from "react";
import { Modal, ModalHeader, ModalBody, Row, Col, Label } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setInvoiceModal } from "../../store/invoices/invoicesSlice";
import { RootState } from "../../store/store";

const InvoiceModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { invoiceModalOpen, selectedInvoice } = useAppSelector(
    (state: RootState) => state.invoices
  );
  const date = selectedInvoice
    ? new Date(selectedInvoice.due_date).toLocaleDateString()
    : "";

  const toggle = () => dispatch(setInvoiceModal(!invoiceModalOpen));

  return (
    <Modal isOpen={invoiceModalOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Invoice Details</ModalHeader>
      <ModalBody>
        <Row className="mb-3">
          <Col>
            <Label className="fw-bold">Payee</Label>
            <div>{selectedInvoice?.user_id.name}</div>
          </Col>
          <Col>
            <Label className="fw-bold">Due Date</Label>
            <div>{date}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Label className="fw-bold">Details</Label>
            <div>{selectedInvoice?.details}</div>
          </Col>
          <Col>
            <Row>
              <Label className="fw-bold">Spent</Label>
              <div>${selectedInvoice?.amount}</div>
            </Row>
            <Row>
              <Label className="fw-bold">Received</Label>
              <div>${selectedInvoice?.amount}</div>
            </Row>
            <Row>
              <Label className="fw-bold">Received</Label>
              <div>${selectedInvoice?.amount}</div>
            </Row>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default InvoiceModal;
