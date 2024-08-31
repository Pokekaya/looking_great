import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTachometerAlt,
  faSignOut,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true); // State to control sidebar expansion

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`d-flex flex-column flex-shrink-0 p-3 `}
      style={{
        width: isExpanded ? "280px" : "80px",
        transition: "width 0.3s",
        overflow: "hidden",
        backgroundColor: "#083d77", // Sidebar background color
        color: "#fcfce1", // Default text color
      }}
    >
      <div className="d-flex justify-content-center align-items-center">
        <a
          href="/"
          className="d-flex align-items-center text-white text-decoration-none"
          style={{ color: "#fcfce1" }} // Link text color
        >
          {isExpanded && (
            <span className="fs-4" style={{ color: "#fcfce1" }}>
              Looking Great
            </span>
          )}
        </a>
        <button
          className="btn "
          onClick={toggleSidebar}
          style={{ color: "#fcfce1" }} // Button icon color
          backgroundColor="#083d77" // Button background color
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {isExpanded && <hr style={{ borderColor: "#fcfce1" }} />}
      {isExpanded && (
        <div className="text-center mb-4">
          <img
            src="https://github.com/mdo.png"
            alt="User"
            className="rounded-circle mb-2"
            style={{ width: "100px", height: "100px" }}
          />
          <h5 style={{ color: "#fcfce1" }}>John</h5>
          <p className="small" style={{ color: "#fcfce1" }}>
            Los Angeles, CA
          </p>
          <p className="small" style={{ color: "#fcfce1" }}>
            Client est. 2/23/17
          </p>
          <p className="small" style={{ color: "#fcfce1" }}>
            Height: 5'8"
          </p>
        </div>
      )}
      <hr style={{ borderColor: "#fcfce1" }} />
      <ul className="nav nav-pills flex-column mb-auto text-center">
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link ${isExpanded ? "" : "text-center"} py-3`}
            aria-current="page"
            style={{
              color: "#fcfce1", // Default link color
            }}
            activeStyle={{
              backgroundColor: "#ee964b", // Active link background color
              color: "#fcfce1",
            }}
          >
            <FontAwesomeIcon icon={faHome} className="fs-4" />
            {isExpanded && <span className="ms-2">Dashboard</span>}
          </a>
        </li>
        <li>
          {/* <a
            href="#"
            className={`nav-link text-white ${
              isExpanded ? "" : "text-center"
            } py-3`}
          >
            <FontAwesomeIcon icon={faTachometerAlt} className="fs-4" />
            {isExpanded && <span className="ms-2">Analytics</span>}
          </a> */}
          <a
            href="#"
            className={`nav-link ${isExpanded ? "" : "text-center"} py-3`}
            style={{
              color: "#fcfce1", // Default link color
            }}
            activeStyle={{
              backgroundColor: "#ee964b", // Active link background color
              color: "#fcfce1",
            }}
          >
            <FontAwesomeIcon icon={faTachometerAlt} className="fs-4" />
            {isExpanded && <span className="ms-2">Analytics</span>}
          </a>
        </li>
        <li>
          {/* <a
            href="#"
            className={`nav-link text-white ${
              isExpanded ? "" : "text-center"
            } py-3`}
          >
            <FontAwesomeIcon icon={faSignOut} className="fs-4" />
            {isExpanded && <span className="ms-2">Sign out</span>}
          </a> */}
          <a
            href="#"
            className={`nav-link ${isExpanded ? "" : "text-center"} py-3`}
            style={{
              color: "#fcfce1", // Default link color
            }}
            activeStyle={{
              backgroundColor: "#ee964b", // Active link background color
              color: "#fcfce1",
            }}
          >
            <FontAwesomeIcon icon={faSignOut} className="fs-4" />
            {isExpanded && <span className="ms-2">Sign out</span>}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
