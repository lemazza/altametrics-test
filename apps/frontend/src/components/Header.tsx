import * as React from "react";
import { useLocation } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  Breadcrumb,
  BreadcrumbItem,
  NavbarText,
  NavItem,
} from "reactstrap";
import { useAppSelector } from "../store/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faBell, faSun } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  toggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggle }) => {
  const { pathname } = useLocation();
  const { user } = useAppSelector((state) => state.auth);
  const path: string =
    pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  return (
    <Navbar light color="light" className="px-2 py-3 px-lg-5 list-unstyled">
      <NavbarToggler onClick={toggle} className="d-inline-block d-md-none" />
      <NavItem>
        <Breadcrumb listClassName="mb-0">
          <BreadcrumbItem>Accounting</BreadcrumbItem>
          <BreadcrumbItem active>{path || "Home"}</BreadcrumbItem>
        </Breadcrumb>
      </NavItem>
      <NavItem className="text-muted">
        <FontAwesomeIcon icon={faBell} className="me-2" />
        <FontAwesomeIcon icon={faGear} className="me-2" />
        <FontAwesomeIcon icon={faSun} className="me-2" />
        <NavbarText>{user?.name}</NavbarText>
      </NavItem>
    </Navbar>
  );
};

export default Header;
