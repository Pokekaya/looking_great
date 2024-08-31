import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTachometerAlt,
  faSignOut,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import logo from "../assets/menu-log.png";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(window.innerWidth >= 768); // Expanded by default on large screens

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  // Handle automatic collapse on small screens
  const handleResize = () => {
    if (window.innerWidth < 768 && isExpanded) {
      setIsExpanded(false);
    } else if (window.innerWidth >= 768 && !isExpanded) {
      setIsExpanded(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isExpanded]);

  return (
    <div
      className={`d-flex flex-column flex-shrink-0 p-3 text-white bg-dark`}
      style={{
        width: isExpanded ? "280px" : "80px",
        transition: "width 0.3s",
        overflow: "hidden",
      }}
      aria-expanded={isExpanded}
    >
      <div className="d-flex justify-content-between align-items-center">
        <a
          href="/dashboard"
          className="d-flex align-items-center text-white text-decoration-none"
        >
          {isExpanded && (
            <img
              src={logo}
              alt="Logo"
              style={{ maxHeight: "50px", maxWidth: "100%" }}
            />
          )}
        </a>
        <button
          className="btn btn-dark"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <hr />
      {isExpanded && (
        <div className="text-center mb-4">
          <img
            src="https://github.com/mdo.png"
            alt="User"
            className="rounded-circle mb-2"
            style={{ width: "100px", height: "100px" }}
          />
          <h5>John</h5>
          <p className="small">Los Angeles, CA</p>
          <p className="small">Client est. 2/23/17</p>
          <p className="small">Height: 5'8"</p>
        </div>
      )}
      {!isExpanded && (
        <div className="text-center">
          <img
            src="https://github.com/mdo.png"
            alt="User"
            className="rounded-circle mb-2"
            style={{ width: "50px", height: "50px" }}
          />
        </div>
      )}
      <hr />
      <ul className="nav nav-pills flex-column mb-auto text-center">
        <li className="nav-item">
          <NavLink
            to="/dashboard"
            className={`nav-link ${isExpanded ? "" : "text-center"} py-3`}
            activeClassName="active"
            exact
          >
            <FontAwesomeIcon icon={faHome} className="fs-4" />
            {isExpanded && <span className="ms-2">Dashboard</span>}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/analytics"
            className={`nav-link text-white ${
              isExpanded ? "" : "text-center"
            } py-3`}
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faTachometerAlt} className="fs-4" />
            {isExpanded && <span className="ms-2">Analytics</span>}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signout"
            className={`nav-link text-white ${
              isExpanded ? "" : "text-center"
            } py-3`}
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faSignOut} className="fs-4" />
            {isExpanded && <span className="ms-2">Sign out</span>}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
