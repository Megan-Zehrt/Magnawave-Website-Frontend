import React from 'react';
import '../../../Styling/AppointmentSectionEditor.css';

const AppointmentSectionEditor = ({ data, onChange }) => {
  // data = { appointmentSectionTitle, appointmentSectionSubtext }

  return (
    <div className="appointment-section-editor">
      <h2>Appointment Section</h2>
      
      <div className="form-group">
        <label className="form-label">
          Section Title:
        </label>
        <input
          type="text"
          className="form-input"
          value={data.appointmentSectionTitle || ''}
          onChange={(e) => onChange('appointmentSectionTitle', e.target.value)}
          placeholder="Enter appointment section title"
        />
      </div>

      <div className="form-group">
        <label className="form-label">
          Subtext:
        </label>
        <textarea
          className="form-textarea"
          value={data.appointmentSectionSubtext || ''}
          onChange={(e) => onChange('appointmentSectionSubtext', e.target.value)}
          placeholder="Enter appointment section subtext"
        />
      </div>
    </div>
  );
};

export default AppointmentSectionEditor;