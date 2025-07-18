import React from 'react';
import '../../../Styling/ColorSchemeEditor.css';

const ColorSchemeEditor = ({ data, onChange }) => {
  // data = { backgroundColorHex, textColorHex, primaryColorHex, secondaryColorHex, accentColorHex }

  const colorFields = [
    { key: 'backgroundColorHex', label: 'Background Color', default: '#1a1a1a' },
    { key: 'textColorHex', label: 'Text Color', default: '#ffffff' },
    { key: 'primaryColorHex', label: 'Primary Color', default: '#ff1493' },
    { key: 'secondaryColorHex', label: 'Secondary Color', default: '#000000' },
    { key: 'accentColorHex', label: 'Accent Color', default: '#ff69b4' },
  ];

  return (
    <div className="color-scheme-editor">
      <h2>Color Scheme</h2>
      
      <div className="color-inputs-grid">
        {colorFields.map((field) => (
          <div key={field.key} className="color-input-group">
            <label className="color-label">
              {field.label}:
            </label>
            <div className="color-input-wrapper">
              <input
                type="color"
                className="color-input"
                value={data[field.key] || field.default}
                onChange={(e) => onChange(field.key, e.target.value)}
              />
              <div className="color-value">
                {data[field.key] || field.default}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorSchemeEditor;