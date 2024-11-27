import React from "react";
import { Link } from "react-router-dom";
import UgLogo from "../../sC:c:\Users\hp\Downloads\11140508_DCIT205_Assignment1-main\src\images\pu-logo.png"; // Adjust the path accordingly

const Sidebar = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon">
          <Link to="/">
            <div class="sidebar-brand-text mx-3">
              <img
                src={UgLogo}
                className="h-8"
                alt="Company Logo"
                class="sidebar-brand-icon rotsate-n-15"
                width="200px"
                height="50px"
              />
            </div>
          </Link>
        </div>
      </Link>

      {/* Divider */}
      <hr className="sidebar-divider my-0" />

      {/* Nav Item - Dashboard */}
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      {/* Nav Item - Grade Report */}
      <li className="nav-item">
        <Link className="nav-link" to="/grade-report">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Grade Report</span>
        </Link>
      </li>

      {/* Nav Item - Missing Grade Form */}
      <li className="nav-item">
        <Link className="nav-link" to="/missing-grade-form">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Missing Grade Form</span>
        </Link>
      </li>

      {/* Nav Item - Instructor Contact */}
      <li className="nav-item">
        <Link className="nav-link" to="/instructor-contact">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Instructor Contact</span>
        </Link>
      </li>

      {/* Nav Item - Help and Support */}
      <li className="nav-item">
        <Link className="nav-link" to="/help-and-support">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Help and Support</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Login</span>
        </Link>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
      {/* <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div> */}
    </ul>
  );
};

export default Sidebar;
