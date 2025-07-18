import React, { useState } from 'react';
import ImageUpload from '../../ImageUpload'; // adjust the import if needed
import '../../../Styling/AdminCreate.css';

const AdminCreate = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastname: '',
    email: '',
    password: '',
    confirm: '',
    SafetyPin: '',
    preferredPayoutMethod: '',
    paypalEmail: '',
    cashAppTag: '',
    venmoHandle: '',
    zelleEmail: '',
    Location: '',
    Latitude: 0,
    Longitude: 0,
    isActive: true,
    phoneNumber: '',
    profileImageUrl: '',
    instagramUrl: '',
    facebookUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (url) => {
    setFormData(prev => ({
      ...prev,
      profileImageUrl: url,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/admin/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.text();
        alert(`Error: ${error}`);
        return;
      }

      const data = await response.json();
      alert('Admin account created successfully!');
      console.log(data);
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    }
  };

  return (
    <div className="admin-create-container">
      <h2>Create Admin Account</h2>

      <form className="admin-create-form" onSubmit={handleSubmit}>
        <div className="form-sections">
          {/* Basic Information Section */}
          <div className="form-section">
            <h3>Basic Information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input
                  className="form-input"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input
                  className="form-input"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  className="form-input"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="form-section">
            <h3>Security</h3>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Confirm Password</label>
                <input
                  className="form-input"
                  type="password"
                  name="confirm"
                  value={formData.confirm}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Safety Pin</label>
                <input
                  className="form-input"
                  name="SafetyPin"
                  value={formData.SafetyPin}
                  onChange={handleChange}
                  placeholder="Enter safety pin"
                  required
                />
              </div>
            </div>
          </div>

          {/* Payout Information Section */}
          <div className="form-section">
            <h3>Payout Information</h3>
            <div className="form-grid-single">
              <div className="form-group">
                <label className="form-label">Preferred Payout Method</label>
                <select
                  className="form-select"
                  name="preferredPayoutMethod"
                  value={formData.preferredPayoutMethod}
                  onChange={handleChange}
                >
                  <option value="">Select payout method</option>
                  <option value="paypal">PayPal</option>
                  <option value="cashapp">Cash App</option>
                  <option value="venmo">Venmo</option>
                  <option value="zelle">Zelle</option>
                </select>
              </div>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">PayPal Email</label>
                <input
                  className="form-input"
                  name="paypalEmail"
                  value={formData.paypalEmail}
                  onChange={handleChange}
                  placeholder="Enter PayPal email"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Cash App Tag</label>
                <input
                  className="form-input"
                  name="cashAppTag"
                  value={formData.cashAppTag}
                  onChange={handleChange}
                  placeholder="Enter Cash App tag"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Venmo Handle</label>
                <input
                  className="form-input"
                  name="venmoHandle"
                  value={formData.venmoHandle}
                  onChange={handleChange}
                  placeholder="Enter Venmo handle"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Zelle Email</label>
                <input
                  className="form-input"
                  name="zelleEmail"
                  value={formData.zelleEmail}
                  onChange={handleChange}
                  placeholder="Enter Zelle email"
                />
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="form-section">
            <h3>Location</h3>
            <div className="form-grid-single">
              <div className="form-group">
                <label className="form-label">Location</label>
                <input
                  className="form-input"
                  name="Location"
                  value={formData.Location}
                  onChange={handleChange}
                  placeholder="Enter location"
                />
              </div>
            </div>
            <div className="coordinates-grid">
              <div className="form-group">
                <label className="form-label">Latitude</label>
                <input
                  className="form-input"
                  type="number"
                  step="any"
                  name="Latitude"
                  value={formData.Latitude}
                  onChange={handleChange}
                  placeholder="Enter latitude"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Longitude</label>
                <input
                  className="form-input"
                  type="number"
                  step="any"
                  name="Longitude"
                  value={formData.Longitude}
                  onChange={handleChange}
                  placeholder="Enter longitude"
                />
              </div>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="form-section">
            <h3>Profile Image</h3>
            <div className="form-grid-single">
              <div className="form-group">
                <label className="form-label">Profile Image URL</label>
                <input
                  className="form-input"
                  type="text"
                  name="profileImageUrl"
                  value={formData.profileImageUrl}
                  onChange={handleChange}
                  placeholder="Or paste image URL here"
                />
              </div>
            </div>
            <div className="image-upload-section">
              <ImageUpload onUpload={handleImageUpload} />
              {formData.profileImageUrl && (
                <div className="image-preview">
                  <img src={formData.profileImageUrl} alt="Profile Preview" />
                </div>
              )}
            </div>
          </div>

          {/* Social Media Section */}
          <div className="form-section">
            <h3>Social Media</h3>
            <div className="social-links-grid">
              <div className="form-group">
                <label className="form-label">Instagram URL</label>
                <input
                  className="form-input"
                  name="instagramUrl"
                  value={formData.instagramUrl}
                  onChange={handleChange}
                  placeholder="Enter Instagram URL"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Facebook URL</label>
                <input
                  className="form-input"
                  name="facebookUrl"
                  value={formData.facebookUrl}
                  onChange={handleChange}
                  placeholder="Enter Facebook URL"
                />
              </div>
            </div>
          </div>
        </div>

        <button className="submit-button" type="submit">
          Create Admin Account
        </button>
      </form>
    </div>
  );
};

export default AdminCreate;