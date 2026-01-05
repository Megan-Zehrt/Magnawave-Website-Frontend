import React from 'react';
import ImageUpload from '../../ImageUpload'; // adjust path if needed
import '../../../Styling/LandingSectionEditor.css';

const LandingSectionEditor = ({ data = {}, onChange }) => {
  return (
    <div className="landing-section-editor">
      <h2>Landing Section</h2>

      {/* Landing Image */}
      <div className="form-group">
        <label className="form-label">Landing Image URL:</label>
        <input
          type="text"
          className="form-input"
          value={data.landingImageUrl || ''}
          onChange={(e) => onChange('landingImageUrl', e.target.value)}
          placeholder="Enter landing image URL"
        />
        <ImageUpload onUpload={(url) => onChange('landingImageUrl', url)} />

        {data.landingImageUrl && (
          <div className="image-preview">
            <img
              src={data.landingImageUrl}
              alt="Landing Preview"
              style={{ maxWidth: '100%', marginTop: '10px' }}
            />
          </div>
        )}
      </div>

      {/* Logo */}
      <div className="form-group">
        <label className="form-label">Logo URL:</label>
        <input
          type="text"
          className="form-input"
          value={data.logoUrl || ''}
          onChange={(e) => onChange('logoUrl', e.target.value)}
          placeholder="Enter logo URL"
        />
        <ImageUpload onUpload={(url) => onChange('logoUrl', url)} />

        {data.logoUrl && (
          <div className="image-preview">
            <img
              src={data.logoUrl}
              alt="Logo Preview"
              style={{ maxWidth: '150px', marginTop: '10px' }}
            />
          </div>
        )}
      </div>

      {/* Brand Name */}
      <div className="form-group">
        <label className="form-label">Brand Name:</label>
        <input
          type="text"
          className="form-input"
          value={data.brandName || ''}
          onChange={(e) => onChange('brandName', e.target.value)}
          placeholder="Enter brand name"
        />
      </div>
    </div>
  );
};

export default LandingSectionEditor;
