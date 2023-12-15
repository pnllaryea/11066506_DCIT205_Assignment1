import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#f5f5f5', padding: '2rem 0' }}>
      <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div className="footer-section" style={{ flex: '0 0 25%', marginRight: '2rem' }}>
          <h3>About Us</h3>
          <p style={{ lineHeight: '1.5' }}>The Missing Grade Reporting System is dedicated to helping students track and report missing grades in a user-friendly manner.</p>
        </div>

        <div className="footer-section" style={{ flex: '0 0 25%' }}>
          <h3>Contact Information</h3>
          <p style={{ lineHeight: '1.5' }}><strong>Email:</strong> info@missinggradesystem.com</p>
          <p style={{ lineHeight: '1.5' }}><strong>Phone:</strong> +1 (555) 123-4567</p>
        </div>

        <div className="footer-section" style={{ flex: '0 0 40%' }}>
          <h3>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Home</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/dashboard" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Dashboard</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/missing-grade-form" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Report Missing Grade</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/instructor-contact" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Instructor Contact</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/help-and-support" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Help & Support</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom" style={{ textAlign: 'center', padding: '1rem 0' }}>
        <p>© 2023 Missing Grade Reporting System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
