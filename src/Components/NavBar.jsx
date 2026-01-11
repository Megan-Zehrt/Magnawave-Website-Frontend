import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Styling/NavBar.css'; 

const NavBar = () => {
  const [websiteContent, setWebsiteContent] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // Track dropdown state

  useEffect(() => {
    axios.get('http://localhost:8000/api/website-content')
      .then(res => setWebsiteContent(res.data))
      .catch(err => console.error('Failed to fetch website content:', err));
  }, []);

  if (!websiteContent) {
    return <p>Loading website content...</p>;
  }

  const { landingSection } = websiteContent;

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      {/* LEFT: Logo + Brand Name */}
      <div className="navbar-left">
        <img src={landingSection.logoUrl} alt="Logo" className="navbar-logo" />
        <Link to="/Equine-Edge-Sports-Therapy">
          <p className="brand-name">{landingSection.brandName}</p>
        </Link>
      </div>

      {/* RIGHT: Profile */}
      <div className="navbar-right">
        <div className="profile-menu-container">
          <button className="profile-button" onClick={handleMenuToggle}>
            My Profile ▾
          </button>

          {menuOpen && (
            <div className="dropdown-menu">
              <Link to="/Equine-Edge-Sports-Therapy/account" className="dropdown-item">Account</Link>
              <Link to="/Equine-Edge-Sports-Therapy/view-appointments" className="dropdown-item">Appointments</Link>
              <Link to="/Equine-Edge-Sports-Therapy/login" className="dropdown-item">Log In / Log Out</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
