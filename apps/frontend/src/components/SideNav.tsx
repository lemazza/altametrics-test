import * as React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink, useLocation } from "react-router-dom";

const SideNav: React.FC = () => {
  interface Link {
    name: string;
    path: string;
    available?: boolean;
  }
  const links: Link[] = [
    { name: "Home", path: "/", available: true },
    { name: "Dashboards", path: "/dashboards" },
    { name: "Invoices", path: "/invoices", available: true },
    { name: "Bills", path: "/bills", available: true },
    { name: "Expenses", path: "/expenses" },
    { name: "Reports", path: "/reports" },
    { name: "Accounting", path: "/accounting" },
  ];

  const { pathname } = useLocation();

  return (
    <>
      <Nav vertical>
        {links.map(({ name, path, available }) => {
          const isActive: boolean = path === pathname;
          return (
            <NavItem
              key={name}
              className={`mb-2 ps-3 ${isActive && "bg-primary rounded"}`}
              active={path === pathname}
            >
              {!available ? (
                <span className="text-muted"> {name} </span>
              ) : (
                <NavLink
                  to={path}
                  className={`text-decoration-none fw-bold ${isActive ? "text-light" : "text-dark"}`}
                >
                  {name}
                </NavLink>
              )}
            </NavItem>
          );
        })}
      </Nav>
    </>
  );
};

export default SideNav;
