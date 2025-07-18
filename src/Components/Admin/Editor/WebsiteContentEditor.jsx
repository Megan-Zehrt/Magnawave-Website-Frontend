import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LandingSectionEditor from './LandingSectionEditor';
import AboutSectionEditor from './AboutSectionEditor';
import AppointmentSectionEditor from './AppointmentSectionEditor';
import ColorSchemeEditor from './ColorSchemeEditor';
import '../../../Styling/WebsiteContentEditor.css';

const WebsiteContentEditor = () => {
  const [content, setContent] = useState({
    landingSection: {},
    aboutSection: {},
    appointmentSection: {},
    colorScheme: {},
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8000/api/website-content')  // adjust your API route
      .then((res) => {
        setContent(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch website content:', err);
        setLoading(false);
      });
  }, []);

  const handleSectionChange = (section, field, value) => {
    setContent((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSave = () => {
    axios.put('http://localhost:8000/api/website-content', content)  // adjust your API route
      .then(() => alert('Website content saved!'))
      .catch((err) => alert('Failed to save content:', err));
  };

  if (loading) {
    return (
      <div className="website-content-editor">
        <div className="loading-message">Loading...</div>
      </div>
    );
  }

  return (
    <div className="website-content-editor">
      <h1>Website Content Editor</h1>
      <div className="editor-container">
        <LandingSectionEditor
          data={content.landingSection}
          onChange={(field, value) => handleSectionChange('landingSection', field, value)}
        />
        <AboutSectionEditor
          data={content.aboutSection}
          onChange={(field, value) => handleSectionChange('aboutSection', field, value)}
        />
        <AppointmentSectionEditor
          data={content.appointmentSection}
          onChange={(field, value) => handleSectionChange('appointmentSection', field, value)}
        />
        <ColorSchemeEditor
          data={content.colorScheme}
          onChange={(field, value) => handleSectionChange('colorScheme', field, value)}
        />

        <button className="save-button" onClick={handleSave}>
          Save All Changes
        </button>
      </div>
    </div>
  );
};

export default WebsiteContentEditor;