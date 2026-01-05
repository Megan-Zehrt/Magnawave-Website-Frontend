import React from 'react';
import ImageUpload from '../../ImageUpload'; // adjust path as needed
import '../../../Styling/AboutSectionEditor.css';

const AboutSectionEditor = ({ data = {}, onChange }) => {
  return (
    <div className="about-section-editor">
      <h2>About Section</h2>

      <div className="form-group">
        <label className="form-label">Title:</label>
        <input
          type="text"
          className="form-input"
          value={data.aboutTitle || ''}
          onChange={(e) => onChange('aboutTitle', e.target.value)}
          placeholder="Enter about section title"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Text:</label>
        <textarea
          className="form-textarea"
          value={data.aboutText || ''}
          onChange={(e) => onChange('aboutText', e.target.value)}
          placeholder="Enter about section text"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Image URL:</label>
        <input
          type="text"
          className="form-input"
          value={data.aboutImageUrl || ''}
          onChange={(e) => onChange('aboutImageUrl', e.target.value)}
          placeholder="Enter image URL"
        />
        <ImageUpload onUpload={(url) => onChange('aboutImageUrl', url)} />

        {data.aboutImageUrl && (
          <div className="image-preview">
            <img
              src={data.aboutImageUrl}
              alt="Landing Preview"
              style={{ maxWidth: '100%', marginTop: '10px' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutSectionEditor;
