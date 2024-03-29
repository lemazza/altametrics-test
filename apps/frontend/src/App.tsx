import * as React from "react";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import {
  Row,
  Offcanvas,
  Col,
  OffcanvasHeader,
  OffcanvasBody,
} from "reactstrap";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Row className="gx-0">
      <Offcanvas
        toggle={toggle}
        isOpen={isOpen}
        style={{ backgroundColor: "#F3F2FE" }}
        className="d-block d-md-none"
      >
        <OffcanvasHeader toggle={toggle}>Menu</OffcanvasHeader>
        <OffcanvasBody>
          <SideNav />
        </OffcanvasBody>
      </Offcanvas>
      <Col
        sm={3}
        lg={2}
        className="d-none d-md-block px-3"
        style={{ backgroundColor: "#F3F2FE", height: "100vh" }}
      >
        <h2 className="mt-5">Menu</h2>
        <SideNav />
      </Col>

      <Col>
        <Header toggle={toggle} />
        <Outlet />
      </Col>
    </Row>
  );
};

export default App;
