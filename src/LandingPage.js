// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center', // Center-align the entire content
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#3498db', // Change color to a pleasing one
  };

  const taglineStyle = {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '20px',
  };

  const sectionStyle = {
    marginBottom: '40px',
    textAlign: 'left', // Align text left within sections
  };

  const featureStyle = {
    marginBottom: '30px',
  };

  const ctaStyle = {
    textAlign: 'center',
    marginTop: '40px',
  };

  const ctaButtonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  };

  return (
    <div style={containerStyle}>
      <header>
        <h1 style={headingStyle}>Welcome to the Missing Grade Reporting System!</h1>
        <p style={taglineStyle}>Empowering Students for Academic Success</p>
      </header>

      <section style={sectionStyle} className="overview-section">
        <h2>Overview</h2>
        <p>
          Are you tired of missing grades slipping through the cracks? We understand the importance of accurate academic records, and that's why we've developed a user-friendly platform to help you track and report any missing grades effortlessly.
        </p>
        <p>
          Our system provides you with a comprehensive set of features to enhance your academic experience. From a detailed overview of your current grades to a simple form for reporting missing grades, we've got you covered.
        </p>
      </section>

      <section style={sectionStyle} className="features-section">
        <h2>Key Features</h2>
        <div style={featureStyle} className="feature">
          <h3>Dashboard Overview</h3>
          <p>Get a quick glance at your current grades and receive instant alerts for any missing grades that require your attention.</p>
        </div>
        {/* ... (similar adjustments for other features) */}
      </section>

      <section style={sectionStyle} className="getting-started-section">
        <h2>Getting Started</h2>
        <ol>
          {/* ... (no style changes for the list) */}
        </ol>
      </section>

      <section style={ctaStyle} className="call-to-action">
        <p>Thank you for choosing the Missing Grade Reporting System. We're here to enhance your academic experience and ensure your grades are accurately reflected. Let's make academic success a shared journey!</p>
        <Link to="/login" style={ctaButtonStyle}>LOGIN</Link>
      </section>
    </div>
  );
};

export default LandingPage;
