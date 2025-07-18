import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../Styling/LandingPage.css';

const LandingPage = () => {
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


  if (!websiteContent) {
    return <p>Loading...</p>;
  }

  const {
    landingSection,
    aboutSection,
    appointmentSection,
  } = websiteContent;

  return (
    <div>
      <img
        className="LandingPage-Image"
        src={landingSection?.landingImageUrl}
        alt="Landing"
      />

      {/* About Section */}
      <div className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>{aboutSection?.aboutTitle}</h2>
            <p>{aboutSection?.aboutText}</p>
          </div>
          <div className="about-image">
            <img src={aboutSection?.aboutImageUrl} alt="About Equine Therapy" />
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="services-section">
        <h2>{appointmentSection?.appointmentSectionTitle || 'Our Services'}</h2>
        <p className="services-subtext">
          {appointmentSection?.appointmentSectionSubtext ||
            'Tailored to enhance your horse\'s health, comfort, and performance.'}
        </p>

        <div className="services-grid">
          <div className="service-card">
            <h3>MagnaWave Therapy</h3>
            <p>
              Pulsed Electromagnetic Field (PEMF) therapy that helps reduce inflammation, improve circulation, and speed up recovery.
            </p>
          </div>
          <div className="service-card">
            <h3>Red Light Therapy</h3>
            <p>
              A non-invasive treatment that uses low-wavelength red light to stimulate healing at the cellular level.
            </p>
          </div>
          <div className="service-card">
            <h3>Equine Massage</h3>
            <p>
              Therapeutic massage techniques that relieve tension and improve range of motion.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials / Feedback Section */}
      <div className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <p className="testimonials-subtext">
          Trusted by horse owners, riders, and trainers across the region.
        </p>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">
              "MagnaWave therapy has completely changed the way my horse recovers after shows."
            </p>
            <h4 className="testimonial-author">– Sarah K., Barrel Racer</h4>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              "Red light sessions helped speed up my gelding’s tendon recovery."
            </p>
            <h4 className="testimonial-author">– John D., Eventing Rider</h4>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              "They are always punctual and truly care about the horse’s long-term health."
            </p>
            <h4 className="testimonial-author">– Emily T., Trainer</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
