// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: '#3498db', // Different background color
    color: '#fff',
    padding: '15px 0', // Increased padding for better spacing
    textAlign: 'center',
  };

  const logoStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '2rem',
    fontWeight: 'bold',
  };

  const linkStyle = {
    margin: '0 15px', // Increased spacing between links
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: '0.3s', // Smooth transition effect
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  return (
    <nav style={navbarStyle}>
      <div className="navbar-container">
        <Link to="/" style={logoStyle}>
          Missing Grade Report System
        </Link>

        <div className="navbar-links">
          <Link to="/" style={linkStyle} activeStyle={linkHoverStyle}>
            Home
          </Link>
          <Link to="/dashboard" style={linkStyle} activeStyle={linkHoverStyle}>
            Dashboard
          </Link>
          <Link to="/missing-grade-form" style={linkStyle} activeStyle={linkHoverStyle}>
            Report Missing Grade
          </Link>
          <Link to="/instructor-contact" style={linkStyle} activeStyle={linkHoverStyle}>
            Instructor Contact
          </Link>
          <Link to="/help-and-support" style={linkStyle} activeStyle={linkHoverStyle}>
            Help & Support
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
