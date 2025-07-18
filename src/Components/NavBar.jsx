import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Styling/NavBar.css'; 


const NavBar = () => {

    const [websiteContent, setWebsiteContent] = useState(null);

useEffect(() => {
  console.log("Fetching website content...");
  axios.get('http://localhost:8000/api/website-content')
    .then(res => {
      console.log("Website content received:", res.data);
      setWebsiteContent(res.data);
    })
    .catch(err => {
      console.error('Failed to fetch website content:', err);
    });
}, []);

  if (!websiteContent) {
    return <p>Loading website content...</p>;
  }

  const {
    landingSection
  } = websiteContent;

  return (
    <div className="navbar">
      
      {/* LEFT: Logo + Brand Name */}
      <div className="navbar-left">
        <img src={landingSection.logoUrl} alt="Logo" className="navbar-logo" />
        <Link to="/Equine-Edge-Sports-Therapy"><p className="brand-name">{landingSection.brandName}</p></Link>
      </div>

      {/* CENTER: Navigation Links */}
      <div className="navbar-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/packages">Services</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/Equine-Edge-Sports-Therapy/available-appointments">Book Appointment</Link>
      </div>

      {/* RIGHT: Profile */}
      <div className="navbar-right">
        <Link to="/profile">My Profile</Link>
      </div>
    </div>
  );
};

export default NavBar;
