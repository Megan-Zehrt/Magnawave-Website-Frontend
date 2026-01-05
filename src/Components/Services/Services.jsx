import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../Styling/Services.css';

const Services = () => {
  const [websiteContent, setWebsiteContent] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/website-content')
      .then(res => setWebsiteContent(res.data))
      .catch(err => console.error('Failed to fetch website content:', err));
  }, []);

  useEffect(() => {
    if (websiteContent?.colorScheme) {
      const root = document.documentElement;
      root.style.setProperty("--background-color", websiteContent.colorScheme.backgroundColorHex || "#0a0a0a");
      root.style.setProperty("--text-color", websiteContent.colorScheme.textColorHex || "#ffffff");
      root.style.setProperty("--primary-color", websiteContent.colorScheme.primaryColorHex || "#ff1493");
      root.style.setProperty("--secondary-color", websiteContent.colorScheme.secondaryColorHex || "#1a1a1a");
      root.style.setProperty("--accent-color", websiteContent.colorScheme.accentColorHex || "#b0b0b0");
    }
  }, [websiteContent]);

  if (!websiteContent) return <p>Loading...</p>;

  const { serviceSection } = websiteContent;

  const handleBook = (type) => {
    console.log(`Booking ${type}`);
    // You can use navigate(`/book/${type}`) if using React Router
  };

  const handleSubscribe = (type) => {
    console.log(`Subscribing to ${type}`);
    // You can use navigate(`/subscribe/${type}`)
  };

  return (
    <div className="services-container">
      <div className="service-section">
        <img src={serviceSection.magnaWavePEMFUrl} alt="MagnaWave" className="service-image" />
        <div className="service-text">
          <h2>{serviceSection.magnaWavePEMFTitle}</h2>
          <p>{serviceSection.magnaWavePEMFText}</p>
          <div className="service-buttons">
            <button onClick={() => handleBook('magnawave')}>Book Appointment</button>
            <button onClick={() => handleSubscribe('magnawave')}>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="service-section">
        <img src={serviceSection.redLightUrl} alt="Red Light" className="service-image" />
        <div className="service-text">
          <h2>{serviceSection.redLightTitle}</h2>
          <p>{serviceSection.redLightText}</p>
          <div className="service-buttons">
            <button onClick={() => handleBook('redlight')}>Book Appointment</button>
            <button onClick={() => handleSubscribe('redlight')}>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="service-section">
        <img src={serviceSection.massageUrl} alt="Massage" className="service-image" />
        <div className="service-text">
          <h2>{serviceSection.massageTitle}</h2>
          <p>{serviceSection.massageText}</p>
          <div className="service-buttons">
            <button onClick={() => handleBook('massage')}>Book Appointment</button>
            <button onClick={() => handleSubscribe('massage')}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
