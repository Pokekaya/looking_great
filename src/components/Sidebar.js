import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faSignOut, faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import logo from '../assets/menu-log.png';
import { authContext } from '../context/authContext';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(window.innerWidth >= 768); // Expanded by default on large screens
  const { authData } = useContext(authContext);

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
    <div className={`d-flex flex-column flex-shrink-0 p-3 text-white bg-dark`}
      style={{
        width: isExpanded ? "280px" : "80px",
        transition: "width 0.3s",
        overflow: "hidden"
      }}
      aria-expanded={isExpanded}
    >
      <div className="d-flex justify-content-between align-items-center">
        <a
          href="/dashboard"
          className="d-flex align-items-center text-white text-decoration-none"
        >
          {isExpanded && <img src={logo} alt="Logo" style={{ maxHeight: "50px", maxWidth: "100%" }} />}
        </a>
        <button className="btn btn-dark" onClick={toggleSidebar} aria-label="Toggle Sidebar">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <hr />
      {isExpanded && (
        <div className="text-center mb-4">
          <img
            src={authData?.athlete?.profile_medium || "person.png"}
            alt="User"
            className="rounded-circle mb-2"
            style={{ width: "80px", height: "80px" }}
          />
          <h5>{ authData === null || authData === undefined ? "" : authData.athlete.firstname + " " + authData.athlete.lastname}</h5>
          <p className="small">{ authData === null || authData === undefined? "" : authData.athlete.city }</p>
          <p className="small">{ authData === null || authData === undefined? "" : authData.athlete.weight } Kg</p>
        </div>
      )}
      {!isExpanded && (
        <div className="text-center">
          <img
            src={authData?.athlete?.profile_medium || "person.png"}
            alt="User"
            className="rounded-circle mb-2"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
      )}
      <hr />
      <ul className="nav nav-pills flex-column mb-auto text-center">
        <li className="nav-item">
          <NavLink 
            to="/dashboard" 
            className={`nav-link ${isExpanded ? '' : 'text-center'} py-3`} 
            activeClassName="active"
            exact
          >
            <FontAwesomeIcon icon={faDumbbell} className="fs-4" />
            {isExpanded && <span className="ms-2">My Workout</span>}
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/"
            className={`nav-link text-white ${isExpanded ? '' : 'text-center'} py-3`} 
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