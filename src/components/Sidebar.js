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
      className={`d-flex flex-column flex-shrink-0 p-3 text-white bg-dark`}
      style={{
        width: isExpanded ? "280px" : "80px",
        transition: "width 0.3s",
        overflow: "hidden"
      }}
    >
      <div className="d-flex justify-content-center align-items-center">
        <a
          href="/"
          className="d-flex align-items-center text-white text-decoration-none"
        >
          {isExpanded && <span className="fs-4">Looking Great</span>}
        </a>
        <button className="btn btn-dark" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {isExpanded && <hr />}
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
      <hr />
      <ul className="nav nav-pills flex-column mb-auto text-center">
        <li className="nav-item">
          <a href="#" className={`nav-link ${isExpanded ? '' : 'text-center'} py-3`} aria-current="page">
            <FontAwesomeIcon icon={faHome} className="fs-4" />
            {isExpanded && <span className="ms-2">Dashboard</span>}
          </a>
        </li>
        <li>
          <a href="#" className={`nav-link text-white ${isExpanded ? '' : 'text-center'} py-3`}>
            <FontAwesomeIcon icon={faTachometerAlt} className="fs-4" />
            {isExpanded && <span className="ms-2">Analytics</span>}
          </a>
        </li>
        <li>
          <a href="#" className={`nav-link text-white ${isExpanded ? '' : 'text-center'} py-3`}>
            <FontAwesomeIcon icon={faSignOut} className="fs-4" />
            {isExpanded && <span className="ms-2">Sign out</span>}
          </a>
        </li>        
      </ul>
    </div>
  );
};

export default Sidebar;
